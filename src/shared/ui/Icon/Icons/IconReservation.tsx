import { IIconProps } from "./Icon.props";

export const IconReservation = ({ className, ...props }: IIconProps) => {
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
        d="M8 28H12.7896C13.3779 28 13.9582 28.1325 14.4843 28.3871L18.5683 30.3631C19.0945 30.6177 19.6747 30.7503 20.263 30.7503H22.3483C24.3651 30.7503 26 32.3324 26 34.284C26 34.3629 25.946 34.4322 25.8676 34.4539L20.7857 35.8589C19.8741 36.1109 18.898 36.0232 18.05 35.6129L13.6842 33.5005"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 33L35.1855 30.1778C36.8139 29.6705 38.5742 30.2721 39.5942 31.6846C40.3317 32.7059 40.0314 34.1684 38.9569 34.7883L23.9258 43.4611C22.9697 44.0127 21.8419 44.1472 20.7903 43.8352L8 40.0399"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 24H26C22.2288 24 20.3431 24 19.1716 22.8284C18 21.6569 18 19.7712 18 16V12C18 8.22876 18 6.34315 19.1716 5.17157C20.3431 4 22.2288 4 26 4L30 4C33.7712 4 35.6569 4 36.8284 5.17157C38 6.34315 38 8.22876 38 12V16C38 19.7712 38 21.6569 36.8284 22.8284C35.6569 24 33.7712 24 30 24Z"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 10H30"
        stroke="#0277BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
