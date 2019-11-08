import React from 'react';

const Bars = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path transform="translate(2)" d="M 0 9.96481 V 22.0352 H 4 V 9.96481 Z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0"
          keyTimes="0;.2;.5;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(8)" d="M 0 4.44718 V 27.5528 H 4 V 4.44718 Z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.2"
          keyTimes="0;.2;.5;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(14)" d="M 0 11.7847 V 20.2153 H 4 V 11.7847 Z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.4"
          keyTimes="0;.2;.5;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(20)" d="M 0 12 V 20 H 4 V 12 Z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.6"
          keyTimes="0;.2;.5;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path transform="translate(26)" d="M 0 12 V 20 H 4 V 12 Z">
        <animate
          attributeName="d"
          values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.8"
          keyTimes="0;.2;.5;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
          calcMode="spline"
        />
      </path>
    </svg>
  );
};

export default Bars;
