import { SVGProps } from "react";

export interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  color?: string;
}
