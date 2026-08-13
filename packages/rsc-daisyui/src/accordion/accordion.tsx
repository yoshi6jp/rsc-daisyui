import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Collapse } from "../collapse";

export const AccordionBase = classed("input", Collapse);
export type AccordionProps = Omit<
  ComponentProps<typeof AccordionBase>,
  "as" | "type" | "open"
>;
export const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
  ({ children, icon, theme, className, vanilla, ...rest }, ref) => {
    return (
      <Collapse
        className={className}
        icon={icon}
        theme={theme}
        vanilla={vanilla}
      >
        <input {...rest} ref={ref} type="radio" />
        {children}
      </Collapse>
    );
  },
);
Accordion.displayName = "Accordion";

export default Object.assign(Accordion, {
  Title: Collapse.Title,
  Content: Collapse.Content,
});
