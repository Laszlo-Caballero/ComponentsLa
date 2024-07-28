import { SVGProps, FC } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  width: number;
  height: number;
}

export const ArrowDown: FC<SvgComponentProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="none" d="M0 0h48v48H0z" />
    <path d="M24 29.171 9.414 14.585l-2.828 2.828L24 34.827l17.414-17.414-2.828-2.828z" />
  </svg>
);
