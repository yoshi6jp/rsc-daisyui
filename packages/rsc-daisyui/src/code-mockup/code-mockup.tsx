import type { FC, ComponentProps } from "react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { CodeMockupLine } from "./code-mockup-line";

export const CodeMockup = classed("div", "mockup-code", configWithThemeFn({}));
CodeMockup.displayName = "CodeMockup";

export default Object.assign(CodeMockup, {
  Line: CodeMockupLine as FC<ComponentProps<typeof CodeMockupLine>>,
});
