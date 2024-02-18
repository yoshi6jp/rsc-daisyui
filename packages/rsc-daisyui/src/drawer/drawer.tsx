import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { DrawerToggle } from "./drawer-toggle";
import { DrawerContent } from "./drawer-content";
import { DrawerSide } from "./drawer-side";

export const DrawerBase = classed(
  "div",
  "drawer",
  configWithThemeFn({
    end: {
      true: "drawer-end",
    },
    open: {
      true: "drawer-open",
    },
  })
);

export type DrawerProps = Omit<ComponentProps<typeof DrawerToggle>, "id"> &
  Pick<ComponentProps<typeof DrawerBase>, "theme" | "open" | "end"> & {
    id: string;
    theme: ComponentProps<typeof DrawerBase>["theme"];
  };
export const Drawer = deriveClassed<typeof DrawerToggle, DrawerProps>(
  ({ children, className, end, id, theme, open, ...rest }, ref) => {
    return (
      <DrawerBase className={className} end={end} open={open} theme={theme}>
        <DrawerToggle {...rest} id={id} ref={ref} />
        {children}
      </DrawerBase>
    );
  }
);
Drawer.displayName = "Drawer";

export default Object.assign(Drawer, {
  Content: DrawerContent,
  Side: DrawerSide,
});
