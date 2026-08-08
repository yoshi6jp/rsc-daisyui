import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const OtpBase = classed(
  "label",
  "otp",
  configWithThemeFn({
    joined: {
      true: "otp-joined",
    },
    size: {
      xs: "otp-xs",
      sm: "otp-sm",
      md: "otp-md",
      lg: "otp-lg",
      xl: "otp-xl",
    },
    color: {
      neutral: "otp-neutral",
      primary: "otp-primary",
      secondary: "otp-secondary",
      accent: "otp-accent",
      info: "otp-info",
      success: "otp-success",
      warning: "otp-warning",
      error: "otp-error",
    },
  }),
);

type OtpProps = React.ComponentProps<typeof OtpBase> & {
  maxLength?: number;
};
export const Otp = ({ children, maxLength = 4, ...rest }: OtpProps) => {
  return (
    <OtpBase {...rest}>
      {Array.from({ length: maxLength }).map((_, index) => (
        <span />
      ))}
      {children}
    </OtpBase>
  );
};
Otp.displayName = "Otp";
