import { Wrench } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { IsEditingContext } from './IsEditingProvider'

export default function Edit() {
  const {isEditing, setIsEditing}= useContext(IsEditingContext)

  return (
    <div onClick={() => setIsEditing(prev => !prev)} style={{float: "right"}}>
        <Wrench size={32} />
    </div>
  )
}
