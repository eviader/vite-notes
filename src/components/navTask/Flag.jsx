import './Flag.css'
import { useState,  useContext } from 'react'
import { IconFlag3Filled, IconFlag3  } from '@tabler/icons-react';
import { TaskContext } from '../taskContext/TaskContext'


function Flag({id, flagData}) {
  const [booleanFlag, setBooleanFlag] = useState(false)
  const { stateFlag } = useContext(TaskContext)
 
  const redButton = <IconFlag3Filled />
  const greenButton = <IconFlag3 />

  return (
    <>
      <button className= 'button-flag'  onClick={() => 
        {
        !booleanFlag ? setBooleanFlag(true) : setBooleanFlag(false),
        stateFlag(id, booleanFlag)
        }}> {flagData ? redButton : greenButton} </button>
    </>
  )
}

export default Flag
