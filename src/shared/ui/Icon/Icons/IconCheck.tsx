import { IIconProps } from "./Icon.props";

export const IconCheck = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 5.10556L3.99599 8.75L11.4167 0.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
