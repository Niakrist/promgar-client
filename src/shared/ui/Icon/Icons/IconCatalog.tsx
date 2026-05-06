import { IIconProps } from "./Icon.props";

export const IconCatalog = ({ className, ...props }: IIconProps) => {
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
        d="M17.8027 18.0303C18.0956 18.3232 18.5704 18.3232 18.8633 18.0303C19.1562 17.7374 19.1562 17.2626 18.8633 16.9697L18.333 17.5L17.8027 18.0303ZM16.333 15.5L15.8027 16.0303L17.8027 18.0303L18.333 17.5L18.8633 16.9697L16.8633 14.9697L16.333 15.5ZM17.333 12H18.083C18.083 9.1005 15.7325 6.75 12.833 6.75V7.5V8.25C14.9041 8.25 16.583 9.92893 16.583 12H17.333ZM12.833 7.5V6.75C9.93351 6.75 7.58301 9.1005 7.58301 12H8.33301H9.08301C9.08301 9.92893 10.7619 8.25 12.833 8.25V7.5ZM8.33301 12H7.58301C7.58301 14.8995 9.93351 17.25 12.833 17.25V16.5V15.75C10.7619 15.75 9.08301 14.0711 9.08301 12H8.33301ZM12.833 16.5V17.25C15.7325 17.25 18.083 14.8995 18.083 12H17.333H16.583C16.583 14.0711 14.9041 15.75 12.833 15.75V16.5Z"
        fill="white"
      />
      <path
        d="M1.66699 8.33301L5.83366 8.33304"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 14.167H5.83366"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 2.5H15.8337"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
