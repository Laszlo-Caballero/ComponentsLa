import { FC } from "react";
import { SvgComponentProps } from "./TypeIcon";

export const GoogleIcon: FC<SvgComponentProps> = ({
  width,
  height,
  color = "#000",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 0 1-9.573 8.982l3.925-6.798c.41-.628.648-1.378.648-2.184 0-.729-.195-1.412-.535-2h5.312c.146.643.223 1.313.223 2ZM3 12a9.004 9.004 0 0 0 6.338 8.6l2.656-4.6a4 4 0 0 1-3.564-2.194L4.508 7.012A8.958 8.958 0 0 0 3 12Zm2.884-6.603A8.968 8.968 0 0 1 12 3a9 9 0 0 1 8.064 5H12a3.998 3.998 0 0 0-3.461 1.994L5.884 5.397Zm4.38 7.595.004-.002-.071-.124a2 2 0 1 1 3.54.126l-.005-.003-.08.137a1.999 1.999 0 0 1-3.39-.134Z"
      clipRule="evenodd"
    />
  </svg>
);
