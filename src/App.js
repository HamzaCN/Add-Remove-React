import { useState } from "react";
import React from "react";
import "./index.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const App = () =>{

  const [num, setNum] = useState(0);

  const incNum = () =>{
    setNum(num+1);
  }

  const decNum = () =>{

    if(num>0){
      setNum(num-1);
    }
    else{
      alert("Zero Reached");
      setNum(0);
    }
  }


  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
          <Tooltip title="Add .">
            <button onClick={incNum} className="green"> <AddCircleOutlineIcon/> </button>
            </Tooltip>

<Tooltip title="Delete">
            <button onClick={decNum} className="red"> <RemoveCircleOutlineIcon /></button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
