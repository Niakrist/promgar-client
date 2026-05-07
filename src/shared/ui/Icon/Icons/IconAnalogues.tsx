import { IIconProps } from "./Icon.props";

export const IconAnalogues = ({ className, ...props }: IIconProps) => {
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
      <circle
        cx="33.5"
        cy="22.5"
        r="6.5"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0004 30.0004L38.5684 26.5684"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 36V38C40 40.2091 38.2091 42 36 42H10C7.79086 42 6 40.2091 6 38V10C6 7.79086 7.79086 6 10 6H36C38.2091 6 40 7.79086 40 10V12"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24H20"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 32H24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16H22"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
