import { IIconProps } from "./Icon.props";

export const IconInStock = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="18" height="18" rx="9" fill="#0EA348" />
      <path
        d="M13.0827 6.08301L7.4681 11.9163L4.91602 9.26483"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
