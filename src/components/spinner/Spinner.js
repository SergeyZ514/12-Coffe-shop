function Spinner() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width='250px'
        height='250px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle
          cx='50'
          cy='50'
          r='32'
          strokeWidth='8'
          stroke='#0a0a0a'
          strokeDasharray='50.26548245743669 50.26548245743669'
          fill='none'
          strokeLinecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='1s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 50 50;360 50 50'
          ></animateTransform>
        </circle>
        <circle
          cx='50'
          cy='50'
          r='23'
          strokeWidth='8'
          stroke='#28292f'
          strokeDasharray='36.12831551628262 36.12831551628262'
          strokeDashoffset='36.12831551628262'
          fill='none'
          strokeLinecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='1s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 50 50;-360 50 50'
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}

export default Spinner;
