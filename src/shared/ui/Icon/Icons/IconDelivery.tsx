import { IIconProps } from "./Icon.props";

export const IconDelivery = ({ className, ...props }: IIconProps) => {
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
      <circle cx="34" cy="36" r="4" stroke="#0277BD" strokeWidth="2" />
      <circle cx="14" cy="36" r="4" stroke="#0277BD" strokeWidth="2" />
      <path
        d="M10 35.9449C7.80655 35.8356 6.43821 35.5093 5.46447 34.5355C4.49073 33.5618 4.16444 32.1934 4.0551 30M18 36L30 36M38 35.9449C40.1935 35.8356 41.5618 35.5093 42.5355 34.5355C44 33.0711 44 30.714 44 26L44 22L34.6 22C33.111 22 32.3665 22 31.7639 21.8042C30.5462 21.4086 29.5914 20.4538 29.1958 19.2361C29 18.6335 29 17.889 29 16.4C29 14.1665 29 13.0497 28.7063 12.1459C28.1128 10.3193 26.6807 8.88717 24.8541 8.29366C23.9503 8 22.8335 8 20.6 8L4 8"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16H16"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22H12"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 12L32.6424 12C35.5531 12 37.0085 12 38.1928 12.7074C39.3772 13.4148 40.0672 14.6962 41.4472 17.259L44 22"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
