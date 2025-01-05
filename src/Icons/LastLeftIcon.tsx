import { FC, SVGProps } from "react";

export const LastLeftIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 6v12M5 18V6l10 6-10 6Z"
    />
  </svg>
);
