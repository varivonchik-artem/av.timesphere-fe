import React from "react";
import clx from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;

  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function Icon({ Svg, className, ...svgProps }: IconProps) {
  const classes = clx("icon", className);

  return <Svg className={classes} {...svgProps} />;
}
