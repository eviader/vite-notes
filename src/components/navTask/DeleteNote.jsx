import {TaskContext} from '../taskContext/TaskContext'
import { useContext } from 'react'
import { IconX  } from '@tabler/icons-react';
import './DeleteNote.css'

function DeleteNote({id}) {

    const { deleteNotes } = useContext(TaskContext)

    return (
    <>
        <button className='close-button' onClick={() => {deleteNotes(id)}}><IconX  /></button>
    </>
  )
}

export default DeleteNote
