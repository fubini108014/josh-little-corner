import React, { useState } from "react";
import Timeline from "./Timeline";
import { TimeLineItems } from "../../../data/timelineSource";
import ExperienceDesc from "./ExperienceDesc";

const defaultSelectIndex = 3;
function Experience() {
  const [selectIndex, setSelectIndex] = useState(defaultSelectIndex);

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
      <Timeline step={selectIndex} onClick={handleClickStep} />
    </div>
  );
}

export default Experience;
