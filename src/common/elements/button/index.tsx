import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../components/spinner";
import "./Button.scss";

const Button = (props: any) => {
  return (
    <button
      style={props.style}
      id={props.id}
      onClick={(e) => {
        e.target = e.currentTarget;
        return props.onClick ? props.onClick(e) : null;
      }}
      onSubmit={props.onSubmit}
      className={`btn ${props.color} ${props.loading && "loading"} ${
        props.block && "block"
      } ${props.className}`}
      disabled={props.disabled}
      type={props.type}
      value={props.value}
      title={props.title}
    >
      <span className={"content"}>
        {props.icon && <span className={"icon-left"}>{props.icon}</span>}
        {props.children}
      </span>
      {props.loading ? (
        <span className={`spinner ${props.color}`}>
          <Spinner />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
