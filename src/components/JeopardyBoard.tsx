import React from 'react'

type Props = {
  children?: JSX.Element[]
}

export default function JeopardyBoard(props: Props) {
  return (
    <div style={{ position: "absolute", backgroundColor: "#060ce9", }}>{props.children}</div>
  )
}
