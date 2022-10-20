import React from "react";

export function  Todoitem(props){
    function handleClick(){
        props.changeStatus(props.index)
    }
    let selectedStyle ={}
    if(props.checked){
        selectedStyle = {
            textDecorationLine: "line-through"
        }
    }
    return(
    <div onClick={handleClick} style={selectedStyle}>
        {props.text}<input checked={props.checked} id="todo-1" type="checkbox"/>
    </div>
    )
}

