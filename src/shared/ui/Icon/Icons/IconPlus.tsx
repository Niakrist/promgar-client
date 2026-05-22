import { IIconProps } from "./Icon.props";

export const IconPlus = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99967 3.33301V12.6663M3.33301 7.99967H12.6663"
        stroke="#505153"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
