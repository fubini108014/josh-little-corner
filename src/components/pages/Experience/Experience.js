import React, { useState } from "react";
import Timeline from "./Timeline";
import { TimeLineItems } from "../../../data/timelineSource";
import ExperienceDesc from "./ExperienceDesc";

function Experience() {
  const [selectIndex, setSelectIndex] = useState(3);

  const currentData = TimeLineItems.find((el) => el.order === selectIndex);
  console.log("currentData:", currentData);
  const handleClickStep = (idx) => {
    if (idx < 4) {
      setSelectIndex(idx);
    }
  };

  return (
    <div>
      <ExperienceDesc dataSource={currentData} />
      <Timeline onClick={handleClickStep} />
    </div>
  );
}

export default Experience;
