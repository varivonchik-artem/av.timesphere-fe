import React from "react";
import clx from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input(props: InputProps): React.ReactElement {
  const { className, ...rest } = props;

  const classes = clx(className, "input");

  return <input className={classes} {...rest} />;
}
