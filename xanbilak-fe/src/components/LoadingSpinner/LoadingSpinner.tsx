import React from "react";
//import { css } from "@emotion/react";
//import ClipLoader from "react-spinners/ClipLoader";

// const override = css`
// display: block;
// margin: 0 auto;
// border-color: #AE00FF;
// `;
// X console.log(override);

interface LoadingSpinnerPropTypes {
  color: string;
  size: number;
}

const SPINNER_SIZE = 40;

const LoadingSpinner = ({ color = "#FFFFFF",
  size = SPINNER_SIZE }: LoadingSpinnerPropTypes): JSX.Element => (
  // <ClipLoader color={color} loading={true} size={size} />
  <span>Loading ...</span>
);

export default LoadingSpinner;
