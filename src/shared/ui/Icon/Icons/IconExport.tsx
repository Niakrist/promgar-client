import { IIconProps } from "./Icon.props";

export const IconExport = ({ className, ...props }: IIconProps) => {
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
        d="M42 20V10C42 7.79 40.21 6 38 6H10C7.79 6 6 7.79 6 10V38C6 40.21 7.79 42 10 42H22"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 6.154V15.132C30 16.236 29.104 17.132 28 17.132H20C18.896 17.132 18 16.236 18 15.132V6"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5743 41.4138L43.4143 34.5738C44.1963 33.7918 44.1963 32.5258 43.4143 31.7458L40.2423 28.5738C39.4603 27.7918 38.1943 27.7918 37.4143 28.5738L30.5743 35.4138C30.1983 35.7898 29.9883 36.2978 29.9883 36.8278V41.9998H35.1603C35.6903 41.9998 36.1983 41.7898 36.5743 41.4138V41.4138Z"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
