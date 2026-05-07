import { IIconProps } from "./Icon.props";

export const IconCertificates = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 11H30"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 18H12"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 29H18"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.2426 25.7574C36.5858 28.1005 36.5858 31.8995 34.2426 34.2426C31.8995 36.5858 28.1005 36.5858 25.7574 34.2426C23.4142 31.8995 23.4142 28.1005 25.7574 25.7574C28.1005 23.4142 31.8995 23.4142 34.2426 25.7574"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 34.4424V44.0004L30 42.0004L26 44.0004V34.4424"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 38H40C42.21 38 44 36.21 44 34V8C44 5.79 42.21 4 40 4H8C5.79 4 4 5.79 4 8V34C4 36.21 5.79 38 8 38H26"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
