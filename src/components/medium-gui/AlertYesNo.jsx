import React from "react";

export default function AlertYesNo(props) {
  return (
    <div className="alert-yes-no">
      <div className="alert">
        <div className="message">
          <p>{props.text}</p>
          <p>{props.lastText}</p>
        </div>
        <div className="buttons">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
