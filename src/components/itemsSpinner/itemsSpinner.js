function ItemsSpinner() {
  return (
    <div
      style={{
        margin: "20px auto 0 auto",
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
        width='130px'
        height='130px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <rect x='20' y='37.5' width='10' height='25' fill='#0a0a0a'>
          <animate
            attributeName='y'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='25;37.5;37.5'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-0.2s'
          ></animate>
          <animate
            attributeName='height'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='50;25;25'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-0.2s'
          ></animate>
        </rect>
        <rect x='45' y='37.5' width='10' height='25' fill='#28292f'>
          <animate
            attributeName='y'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='28.125;37.5;37.5'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-0.1s'
          ></animate>
          <animate
            attributeName='height'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='43.75;25;25'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-0.1s'
          ></animate>
        </rect>
        <rect x='70' y='37.5' width='10' height='25' fill='#000000'>
          <animate
            attributeName='y'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='28.125;37.5;37.5'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          ></animate>
          <animate
            attributeName='height'
            repeatCount='indefinite'
            dur='1s'
            calcMode='spline'
            keyTimes='0;0.5;1'
            values='43.75;25;25'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          ></animate>
        </rect>
      </svg>
    </div>
  );
}

export default ItemsSpinner;
