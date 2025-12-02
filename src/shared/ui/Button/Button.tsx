import React from "react";
import clx from "classnames";
import { Icon } from "../Icon";
import "./Button.scss";

type IconPosition = "before" | "after";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  icon?: React.ElementType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: IconPosition;

  label?: string;
  isLabelHidden?: boolean;
}

export function Button(props: ButtonProps): React.ReactElement {
  const {
    className = "",
    type = "button",
    icon,
    iconPosition = "before",
    label,
    isLabelHidden = false,
    ...rest
  } = props;

  const classes = clx("button", className, {
    "button--icon-only": !label && icon,
  });

  const iconNode = icon ? <Icon className="button__icon" Svg={icon} /> : null;

  return (
    <button className={classes} type={type} {...rest}>
      {iconPosition === "before" && iconNode}

      {!isLabelHidden && <span className="button__label">{label}</span>}

      {iconPosition === "after" && iconNode}
    </button>
  );
}
