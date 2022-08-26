import * as React from "react";

const PdfIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width || 50}
    height={props.height || 50}
    {...props}
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#e2e5e7",
      }}
      d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
    />
    <path
      style={{
        fill: "#b0b7bd",
      }}
      d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
    />
    <path
      style={{
        fill: "#cad1d8",
      }}
      d="m480 224-96-96h96z"
    />
    <path
      style={{
        fill: "#f15642",
      }}
      d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M101.744 303.152c0-4.224 3.328-8.832 8.688-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.688-3.184-8.688-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36zM196.656 384c-4.224 0-8.832-2.304-8.832-7.92v-72.672c0-4.592 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528h-30.448zm8.064-72.912V368.4h21.232c34.544 0 36.08-57.312 0-57.312H204.72zM303.872 312.112v20.336h32.624c4.608 0 9.216 4.608 9.216 9.072 0 4.224-4.608 7.68-9.216 7.68h-32.624v26.864c0 4.48-3.184 7.92-7.664 7.92-5.632 0-9.072-3.44-9.072-7.92v-72.672c0-4.592 3.456-7.936 9.072-7.936h44.912c5.632 0 8.96 3.344 8.96 7.936 0 4.096-3.328 8.704-8.96 8.704h-37.248v.016z"
    />
    <path
      style={{
        fill: "#cad1d8",
      }}
      d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
    />
  </svg>
);

export default PdfIcon;
