import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => (
  <FontAwesomeIcon className={props.classname} icon={props.type} color={props.color} />
);

export default Icon;
