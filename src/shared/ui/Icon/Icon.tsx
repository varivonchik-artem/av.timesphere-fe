import React from "react";
import clx from "classnames";
import "./Icon.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;

  Svg: React.ElementType<React.SVGProps<SVGSVGElement>>;
}

export function Icon({ Svg, className, ...svgProps }: IconProps) {
  const classes = clx(className, "icon");

  return <Svg className={classes} {...svgProps} />;
}
