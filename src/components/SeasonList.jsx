import React from "react";
import Season from "./Season";

var masterSeasonList = [
  {
    name: 'Winter',
    produce: 'Carrots'
  },
  {
    name: 'Spring',
    produce: 'Leeks'
  },
  {
    name: 'Summer',
    produce: 'Squash'
  },
  {
    name: 'Fall',
    produce: 'Pumpkins'
  }
];

function SeasonList(){
  return (
    <div>
      <hr/>
      {masterSeasonList.map((season, index) =>
      <Season name={season.name}
        produce={season.produce}
      key={index}/>
    )}
    </div>
  )
  };

export default SeasonList;
