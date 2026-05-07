import { IIconProps } from "./Icon.props";

export const IconDeferred = ({ className, ...props }: IIconProps) => {
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
        d="M5.99219 15.9965H42.0072"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9982 24.0004H13.9961"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0057 34.0042C42.0062 38.4238 38.4238 42.0071 34.0041 42.0076C29.6102 41.9426 26.064 38.3963 25.999 34.0024C25.9995 29.5823 29.5831 25.9995 34.0032 26C38.4234 26.0005 42.0062 29.5841 42.0057 34.0042"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.792 31.0059V34.4793L36.5238 36.1458"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.998 36.0048H11.9947C8.6796 36.0048 5.99219 33.3174 5.99219 30.0023V13.9957C5.99219 10.6806 8.6796 7.99316 11.9947 7.99316H36.0047C39.3198 7.99316 42.0072 10.6806 42.0072 13.9957V21.999"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
