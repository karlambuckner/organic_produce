import React from "react";
import PropTypes from "prop-types";

function Season(props) {
  return(
    <div>
      <style  global jsx>{`
          div {
            background-color: orange;
          }
        `}</style>
    <h3>{props.name}</h3>
    <hr/>
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Season;
