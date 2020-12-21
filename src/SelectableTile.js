import React from "react";
import PropTypes from "prop-types";

function SelectableTile(props) {
  const style = {
    height: "100%",
    width: "100%",
  };

  return <div style={style}></div>;
}
SelectableTile.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default React.memo(SelectableTile);
