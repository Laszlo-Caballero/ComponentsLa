import { FC } from "react";
import { SvgComponentProps } from "./TypeIcon";

export const LastLeftIconPre: FC<SvgComponentProps> = ({
  height,
  width,
  color,
  fill,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 6v12M5 18V6l10 6-10 6Z"
    />
  </svg>
);
