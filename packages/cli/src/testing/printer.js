import { inspect } from "util";
import { AppError, isNil } from "@compas/stdlib";
import { state, testLogger } from "./state.js";

/**
 * Prints test results and returns the exit code
 * @returns {number}
 */
export function printTestResults() {
  markTestFailuresRecursively(state);

  const result = [];

  const { passed, failed } = sumAssertions(state);
  result.push("");
  result.push(`Total assertions: ${passed + failed}`);
  result.push(`          Passed: ${passed}`);
  result.push(`          Failed: ${failed}`);
  result.push(`-----------`);

  if (state.hasFailure) {
    for (const child of state.children) {
      if (!child.hasFailure) {
        printSuccessResults(child, result, 0);
      } else {
        printFailedResults(child, result, 0);
      }
    }
  }

  if (state.hasFailure) {
    testLogger.error(result.join("\n"));
  } else {
    testLogger.info(result.join("\n"));
  }

  return state.hasFailure ? 1 : 0;
}

/**
 * Prints test results from workers and return the exit code
 *
 * @param {{
 *   isFailed: boolean,
 *   assertions: { passed: number, failed: number, },
 *   failedResult: string[]
 * }[]} testResults
 * @returns {number}
 */
export function printTestResultsFromWorkers(testResults) {
  const hasFailure = testResults.find((it) => it.isFailed);
  let passed = 0;
  let failed = 0;

  const result = [];

  for (const partial of testResults) {
    passed += partial.assertions.passed;
    failed += partial.assertions.failed;
  }

  result.push("");
  result.push(`Total assertions: ${passed + failed}`);
  result.push(`          Passed: ${passed}`);
  result.push(`          Failed: ${failed}`);
  result.push(`-----------`);

  if (hasFailure) {
    for (const partial of testResults) {
      result.push(...partial.failedResult);
    }
  }

  if (hasFailure) {
    testLogger.error(result.join("\n"));
  } else {
    testLogger.info(result.join("\n"));
  }

  return hasFailure ? 1 : 0;
}

/**
 * Prints a quick test summary for the provided state
 * @param {TestState} state
 * @param {string[]} result
 * @param {number} indentCount
 */
function printSuccessResults(state, result, indentCount) {
  const { passed } = sumAssertions(state);
  const indent = `  `.repeat(indentCount);
  result.push(`${indent}${state.name} (${passed}/${passed})`);
}

/**
 * Prints information over test failures
 * @param {TestState} state
 * @param {string[]} result
 * @param {number} indentCount
 */
export function printFailedResults(state, result, indentCount) {
  const { passed, failed } = sumAssertions(state);
  const failedAssertions = state.assertions.filter((it) => !it.passed);

  if (state.caughtException || failedAssertions.length > 0) {
    let indent = "  ".repeat(indentCount);
    result.push(`${indent}${state.name} (${passed}/${passed + failed})`);

    // Increase indent so error info is nested in relation to test name
    indent += "  ";

    if (state.caughtException) {
      const exception = AppError.format(state.caughtException);

      if (AppError.instanceOf(state.caughtException)) {
        result.push(
          `${indent}AppError: ${exception.key} - ${exception.status}`,
        );
      } else {
        result.push(`${indent}${exception.name} - ${exception.message}`);
      }

      // Pretty print info object
      const errorPretty = inspect(exception, {
        depth: null,
        colors: true,
      }).split("\n");

      for (const it of errorPretty) {
        result.push(`${indent}  ${it}`);
      }
    } else {
      for (const assertion of failedAssertions) {
        if (assertion.message) {
          result.push(`${indent}${assertion.type}: ${assertion.message}`);
        } else {
          result.push(`${indent}${assertion.type}`);
        }

        if (assertion.meta) {
          const subIndent = `${indent}  `;
          if (assertion.meta.message) {
            const parts = assertion.meta.message.split("\n");
            for (const part of parts) {
              result.push(`${subIndent}${part}`);
            }
          } else {
            const { expected, actual } = assertion.meta;
            result.push(
              `${subIndent}Expected: (${typeof expected}) ${expected}`,
            );
            result.push(
              `${subIndent}Actual: (${typeof actual}) ${JSON.stringify(
                actual,
              )}`,
            );
          }
        }
      }
    }
    for (const child of state.children) {
      printFailedResults(child, result, indentCount + 2);
    }
  } else {
    printSuccessResults(state, result, indentCount);
    for (const child of state.children) {
      printFailedResults(child, result, indentCount + 1);
    }
  }
}

/**
 * Recursively marks hasFailure if test has a caughtException or if an assertion did not
 * pass
 * @param {TestState} state
 */
export function markTestFailuresRecursively(state) {
  if (state.caughtException) {
    markFailure(state);
  }

  // Skips unnecessary looping
  if (!state.hasFailure) {
    for (const assertion of state.assertions) {
      if (!assertion.passed) {
        markFailure(state);
      }
    }
  }

  for (const child of state.children) {
    markTestFailuresRecursively(child);
  }
}

/**
 * Marks this state as hasFailure and recursively the parents as well
 *
 * @param {TestState} state
 */
function markFailure(state) {
  state.hasFailure = true;

  if (!isNil(state.parent) && !state.parent.hasFailure) {
    markFailure(state.parent);
  }
}

/**
 * Returns a sum of all assertions recursively, ignoring caught exceptions.
 *
 * @param {TestState} state
 * @returns {{ passed: number, failed: number }}
 */
export function sumAssertions(state) {
  let passed = 0;
  let failed = 0;

  for (const assertion of state.assertions) {
    if (assertion.passed) {
      passed++;
    } else {
      failed++;
    }
  }

  for (const child of state.children) {
    const childSum = sumAssertions(child);
    passed += childSum.passed;
    failed += childSum.failed;
  }

  return {
    passed,
    failed,
  };
}
