import { IIconProps } from "./Icon.props";

export const IconControl = ({ className, ...props }: IIconProps) => {
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
        d="M42.0076 42.0076L38.2061 38.2061"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.3375 24C34.5487 24 36.6694 24.8784 38.233 26.442C39.7965 28.0056 40.6749 30.1262 40.6749 32.3375C40.6073 36.9138 36.9138 40.6073 32.3375 40.6749C27.7328 40.6749 24 36.9421 24 32.3375C24 27.7328 27.7328 24 32.3375 24"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.6186 31.2031L31.7674 34.0543L30.0547 32.3436"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99219 32.0039V36.0056C5.99219 38.2156 7.78379 40.0072 9.99385 40.0072H17.9972"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0079 19.998V9.99385C42.0079 7.78379 40.2163 5.99219 38.0063 5.99219H30.0029"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9965 5.99219V12.3588"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9972 23.9997H8.24312C6.99997 23.9997 5.99219 22.9919 5.99219 21.7487V11.4925C5.99257 10.9519 6.10214 10.417 6.31432 9.91982L7.40878 7.35876C7.76347 6.52993 8.57811 5.99219 9.47964 5.99219H20.5122C21.4132 5.99262 22.2271 6.53024 22.5811 7.35876L23.6776 9.92182C23.8897 10.419 23.9993 10.9539 23.9997 11.4945V17.9972"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9997 14.3602C23.9997 13.2552 23.1039 12.3594 21.9989 12.3594H7.99302C6.88799 12.3594 5.99219 13.2552 5.99219 14.3602"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
