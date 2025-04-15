import React from "react";

export default function hairThick(props: { color: string, colorRandom: boolean }): SVGElement {
  const { color, colorRandom } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "40.2%",
        width: "93.5%",
        height: "64%"
      }}
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {
        <path
        d="M30.678 134.896c29 71.5 28 62.5 35.5 61.5-3.893-12.689-10.348-30.579-13.107-47.723 9.232-1.538 21.73-3.927 26.93 21.327l11-2c-14.345-18.312-26.398-61.437-11.752-70.43a57.652 57.652 0 0 1 4.43-.674c14.966 0 74.711-3.194 106.66-21.935l14.796 49.986c5.22-3.78 5.007-23.584-4.385-57.648 4.825-4.578 8.165-9.845 9.428-15.903 4.939-23.678 0-40.396-20.678-48.894 0 0-18.684 16.663-67.5 28.498-24.975 6.054-54.37 18.136-74.019 36.153-4.372-1.825-14.431-4.1-22.992.21 4.146 2.359 11.14 7.407 12.11 11.82a68.537 68.537 0 0 0-1.555 2.217C30.582 79.63 20.44 78.38 10 84.5c5.34.636 14.93 2.98 19.71 7.785-5.058 12.458-5.499 26.667.968 42.611Z"
        fill={(colorRandom && color) || "black"}
        stroke="black"
        strokeWidth="3.8"
      />
      /* <path d="M210.177 51.3965C201.855 91.2936 103.499 96.8962 83.6772 96.8962C31.6548 102.823 56.6248 165.262 66.1772 196.396C58.6772 197.396 59.6772 206.396 30.6772 134.896C7.47724 77.6964 73.1831 42.8337 121.999 30.9995C170.815 19.1653 189.499 2.50195 189.499 2.50195C210.177 11 215.116 27.7185 210.177 51.3965Z" fill={colorRandom && color || "black"} stroke={colorRandom && color || "black"} />
      <path d="M205.134 124.947L189.316 71.5069L199.354 62.3644C210.109 99.4523 210.601 120.988 205.134 124.947Z" fill={colorRandom && color || "black"} stroke={colorRandom && color || "black"} />
      <path d="M80 170C74.4 142.8 60.3333 147.667 51 149L41 105L81.5844 96.5056C82.3363 96.2656 83.1408 96.0955 84 96L81.5844 96.5056C63.4332 102.299 75.9565 148.796 91 168L80 170Z" fill={colorRandom && color || "black"} stroke={colorRandom && color || "black"} strokeWidth="3" />
      <path d="M24.9887 67.3632C33.8341 62.9091 44.2805 65.4873 48.3981 67.3331L36.6273 82.2134C39.6625 77.3568 30.1329 70.2897 24.9887 67.3632Z" fill={colorRandom && color || "black"} />
      <path d="M10 84.4996C21.6 77.6996 32.8333 79.9996 37 81.9996L32.5 97.5C31.3 89.1 17 85.3331 10 84.4996Z" fill={colorRandom && color || "black"} /> */
      }
    </svg>

  );
}
