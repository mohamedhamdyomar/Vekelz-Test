import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Progressbar = (props) => {
  let val =props.val;
  let txt =props.txt;
  let col = props.col;

  return (
      <CircularProgressbar
        value="Energy"
        text={txt}
        circleRatio={0.7}
        strokewidth="7"
        styles={{
            trail:{
                strokeLinecap:"butt",
                transform:"rotate(-126deg)",
                transformOrigin:"center center"
            },
            path:{
                strokeLinecap:"butt",
                transform:"rotate(-126deg)",
                transformOrigin:"center center",
                strok:"#A162F7"
            }
            ,text:{
                fill:col
            }
        }}
        strokeWidth={10}
      />
  );
};
// buildStyles({
//     textSixe: "14px",
//     textColor: "balck",
//     pathColor: "black",
//   })
export default Progressbar;
