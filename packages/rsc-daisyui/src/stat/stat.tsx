import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { StatActions } from "./stat-actions";
import { StatDesc } from "./stat-desc";
import { StatFigure } from "./stat-figure";
import { StatTitle } from "./stat-title";
import { StatValue } from "./stat-value";

export const StatBase = classed("div", "stat");
export type StatProps = ComponentProps<typeof StatBase> & {
  title?: ReactNode;
  value?: ReactNode;
  figure?: ReactNode;
  desc?: ReactNode;
  actions?: ReactNode;
};

export const Stat = deriveClassed<typeof StatBase, StatProps>(
  ({ children, title, value, figure, desc, actions, ...rest }, ref) => (
    <StatBase {...rest} ref={ref}>
      {figure ? <StatFigure>{figure}</StatFigure> : null}
      {title ? <StatTitle>{title}</StatTitle> : null}
      {value ? <StatValue>{value}</StatValue> : null}
      {desc ? <StatDesc>{desc}</StatDesc> : null}
      {actions ? <StatActions>{actions}</StatActions> : null}
      {children}
    </StatBase>
  )
);
