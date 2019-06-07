import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card(props) {
  return (
    <div>
      <CardHeading title={props.title} />
      <CardImg image={props.image} />
      <CardBody />
      <CardBtn
        onClick={props.handleBtnClick}
        style={{ opacity: props.image ? 1 : 0 }}
      />
      <CardBtn
        onClick={props.handleBtnClick}
        style={{ opacity: props.image ? 1 : 0 }}
      />
    </div>
  );
}

export default Card;
