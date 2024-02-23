import { TaskContext } from '../taskContext/TaskContext'
import { useContext } from 'react'
import { IconNote    } from '@tabler/icons-react';
import './ButtonCreate.css'

function ButtonCreate() {

const { saveNote } = useContext(TaskContext)

  return (
    
    <>
        <button className="create-button" onClick={() => saveNote()}> <IconNote    size={45} color="white"/> </button>
    </>
  )
}

export default ButtonCreate
