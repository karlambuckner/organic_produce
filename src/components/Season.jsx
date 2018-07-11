import React from "react";
import PropTypes from "prop-types";

function Season(props) {
  return(
    <div>
      <style  global jsx>{`
          div {
            background-color: green;
          }
        `}</style>
    <h3>{props.name}</h3>
    <p><em>{props.produce}</em></p>
    <hr/>
  </div>
  );
}

Season.propTypes = {
  name: PropTypes.string.isRequired,
  produce: PropTypes.string.isRequired
};

export default Season;
