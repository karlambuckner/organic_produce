import React from "react";
import Season from "./Season";

var masterSeasonList = [
  {
    name: 'Winter',

  },
  {
    name: 'Spring',

  },
  {
    name: 'Summer',

  },
  {
    name: 'Fall'
  }
];

function SeasonList(){
  return (
    <div>
      <hr/>
      {masterSeasonList.map((season, index) =>
      <Season name={season.name}
      key={index}/>
    )}
    </div>
  )
  };

export default SeasonList;
