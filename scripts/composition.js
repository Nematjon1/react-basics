import React from "react";

const FancyBorder = (props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog">Welcome</h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
};
