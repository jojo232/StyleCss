export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          desplay: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .butto {
          backgroud-color: #abedd8;
          border: none;
          padding: 8px;
          barder-radius: 8px;
        }
      `}</style>
    </>
  );
};

// JSXはフラグメントで囲う、<> <>
