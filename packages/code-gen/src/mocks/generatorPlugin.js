import {
  addToTemplateContext,
  compileTemplateDirectory,
  dirnameForModule,
  executeTemplate,
} from "@lbu/stdlib";
import { join } from "path";
import { mockForType } from "./js-templates/mockForType.js";

const init = async () => {
  await compileTemplateDirectory(
    join(dirnameForModule(import.meta), "./templates"),
    ".tmpl",
    {
      debug: false,
    },
  );
  addToTemplateContext("mockForType", mockForType);
};

const generate = (opts, data) => {
  const mocksContent = executeTemplate("mocksFile", { ...data, opts });

  return [
    {
      path: "./mocks.js",
      content: mocksContent,
    },
  ];
};

/**
 * Generate mocks
 * @param {Object} [opts]
 * @param {string} [opts.header] Useful for setting extra imports
 */
export const getMocksPlugin = (opts = {}) => {
  return {
    name: "mocks",
    init: init.bind(undefined, opts),
    generate: generate.bind(undefined, opts),
  };
};