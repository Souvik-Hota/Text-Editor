import React from 'react';
import './App.css'; // ⬅️ if you’re using a separate CSS file

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show alert-fixed`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}

