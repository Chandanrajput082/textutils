import React from "react";

export default function Alerts(props) {
  return (
    <>
      {props.alerts && (
        <div class={`alert alert-${props.alerts.type}`} role="alert">
          <strong>{props.alerts?.type} </strong> : {props.alerts?.msg}
        </div>
      )}
    </>
  );
}
