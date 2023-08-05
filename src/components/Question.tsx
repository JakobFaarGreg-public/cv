import React from 'react'

type Props = {
  q?: string
  val?: number
}

export default function Question(props: Props) {
  return (
    <div style={{margin: "10px 0px", color: "#F1B982", cursor: "pointer"}} onClick={() => alert(props.q)}>{props.val}</div>
  )
}
