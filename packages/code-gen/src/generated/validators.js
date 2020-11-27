// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

import {
  anonymousValidator0,
  anonymousValidator101,
  anonymousValidator107,
  anonymousValidator116,
  anonymousValidator118,
  anonymousValidator13,
  anonymousValidator15,
  anonymousValidator21,
  anonymousValidator27,
  anonymousValidator32,
  anonymousValidator35,
  anonymousValidator38,
  anonymousValidator43,
  anonymousValidator48,
  anonymousValidator58,
  anonymousValidator62,
  anonymousValidator77,
  anonymousValidator83,
  anonymousValidator86,
  anonymousValidator95,
  anonymousValidator97,
} from "./anonymous-validators.js";
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenAnyOfType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenAnyOfType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator0(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenAnyType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenAnyType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator15(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenArrayType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenArrayType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator21(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenBooleanType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenBooleanType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator27(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenContext | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenContext(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator95(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenDateType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenDateType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator32(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenFile | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenFile(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator107(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenFileType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenFileType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator35(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenGenerateOpts | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenGenerateOpts(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator97(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenGenericType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenGenericType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator38(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenNumberType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenNumberType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator43(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenObjectType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenObjectType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator48(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenReferenceType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenReferenceType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator62(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenRelationType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenRelationType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator58(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenRouteType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenRouteType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator86(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenStringType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenStringType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator77(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenStructure | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenStructure(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator101(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenTemplateState | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenTemplateState(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator116(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator13(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenTypeSettings | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenTypeSettings(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator118(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenUuidType | undefined, errors: (*[])|undefined}}
 */
export function validateCodeGenUuidType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator83(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return {
    data,
    errors: undefined,
  };
}
