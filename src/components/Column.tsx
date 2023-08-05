import React from "react";
import Question from "./Question";

type Props = {
    name?: string,
    q1?: string,
    q2?: string,
    q3?: string,
}

export default function Column(props: Props) {


  return (
    <div style={{display: "inline-block", position: "relative", margin: "0px 20px 10px 10px", textAlign: "center", color: "#ffffff"}}>
      <h3>{props.name}</h3>
      <Question q={props.q1} val={100}/>
      <Question q={props.q2} val={200}/>
      <Question q={props.q3} val={300}/>
    </div>
  );
}
