import {
  type ComponentProps,
  deriveClassed,
  type DerivedComponentType,
} from "@tw-classed/react";
import { classed } from "../classed.config";

export const CodeMockupLineBase = classed("pre");
type CodeMockupLineProps = ComponentProps<typeof CodeMockupLineBase> & {
  prefix?: string;
};
export const CodeMockupLine: DerivedComponentType<
  typeof CodeMockupLineBase,
  CodeMockupLineProps
> = deriveClassed<typeof CodeMockupLineBase, CodeMockupLineProps>(
  ({ children, prefix, ...rest }, ref) => {
    return (
      <CodeMockupLineBase {...rest} data-prefix={prefix} ref={ref}>
        <code>{children}</code>
      </CodeMockupLineBase>
    );
  }
);
CodeMockupLine.displayName = "CodeMockupLine";
