import type { ReactNode, JSX } from "react";

export function PreviewLayout({
  children,
  theme,
}: {
  children: ReactNode;
  theme: string;
}): JSX.Element {
  return (
    <div
      className="rounded-box min-h-[6rem] border bg-base-100 preview flex items-center justify-center gap-2 p-4 has-[.no-container]:p-0 has-[.no-container]:border-none"
      data-theme={theme}
    >
      {children}
    </div>
  );
}
