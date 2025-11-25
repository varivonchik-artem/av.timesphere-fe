import React from "react";
import clx from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  className?: string;
}

export function Button(props: ButtonProps): React.ReactElement {
  const { children, className = "", type = "button", ...rest } = props;

  const classes = clx(className, "button");

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}
