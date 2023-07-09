import "./Maximize.css"
import { useContext } from "react";
import { TaskContext } from "../../taskContext/TaskContext";
import { IconWindowMaximize  } from '@tabler/icons-react';


function Maximize({id}) {

 const { maximizedFB } = useContext(TaskContext)
  
  return (

    <>
        <button className='button-maximize' onClick={() => {maximizedFB(id)}}> <IconWindowMaximize /> </button>
    </>
  )
}

export default Maximize