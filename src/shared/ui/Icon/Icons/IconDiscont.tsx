import { IIconProps } from "./Icon.props";

export const IconDiscont = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99967 18.3337C13.6816 18.3337 16.6663 15.3489 16.6663 11.667C16.6663 6.66699 9.99967 1.66699 9.99967 1.66699C9.67612 3.73943 9.35929 4.85164 8.33301 6.66699C7.33224 6.20441 7.08301 5.83366 6.66634 4.79199C4.99967 6.66699 3.33301 9.16699 3.33301 11.667C3.33301 15.3489 6.31778 18.3337 9.99967 18.3337Z"
        stroke="#EF6C00"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.33301 14.1673L11.6663 10.834"
        stroke="#EF6C00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33301 10.834H8.34048M11.6589 14.1673H11.6663"
        stroke="#EF6C00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
