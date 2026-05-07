import { IIconProps } from "./Icon.props";

export const IconWarehouse = ({ className, ...props }: IIconProps) => {
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
        d="M14 42H24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16H28"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 30H24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 36H24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 24H14V42"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 42H6V15.778C6 14.326 6.788 12.986 8.058 12.282L22.058 4.504C23.266 3.832 24.736 3.832 25.944 4.504L39.944 12.282C41.212 12.986 42 14.326 42 15.778V24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 30H42C43.104 30 44 30.896 44 32V42C44 43.104 43.104 44 42 44H32C30.896 44 30 43.104 30 42V32C30 30.896 30.896 30 32 30Z"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.1598 36H35.8398"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
