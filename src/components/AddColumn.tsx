import { Plus } from '@phosphor-icons/react'
import React from 'react'

type Props = {
  onClick: () => void
}

export default function AddColumn(props: Props) {
  return (
    <div style={{float: "right"}} onClick={props.onClick}>
        <Plus size={32} />
    </div>
  )
}
