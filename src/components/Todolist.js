import React from "react";
import { Todoitem } from "./Todoitem";
import { Addtodoitem } from "./Addtodoitem";
import { useState } from "react";
  

export function  Todolist(){
    const [todos, setTodos] = useState({ToDoItems:[
        {text:'eat', checked:false},
        {text:'sleep', checked:false}
],addtext:''});


    function ChangeAddInput(event){
        setTodos({...todos,addtext:event.target.value})
    }


function AddItem(){
    const TodoItemsArray = todos.ToDoItems
    TodoItemsArray.push({text:todos.addtext, checked:false});
    console.log('TodoItemsArray',TodoItemsArray);
    setTodos({...todos,ToDoItems:TodoItemsArray,addtext:''})
}

function changeItemStatus(index){
    const TodoItemsArray = todos.ToDoItems
    TodoItemsArray[index].checked = !TodoItemsArray[index].checked
    setTodos({...todos,ToDoItems:TodoItemsArray})
}

const TodoItems =[];
console.log('todos.ToDoItems',todos.ToDoItems.length)
    for(let i=0; i < todos.ToDoItems.length;i++){
        TodoItems.push(<Todoitem 
            changeStatus={changeItemStatus} 
            index={i} key={i} 
            text={todos.ToDoItems[i].text} 
            checked={todos.ToDoItems[i].checked}/>
            )
    }


    console.log('TodoItems',TodoItems)

return(
    <div>
    <h1>To do list</h1>
    {TodoItems}
    <Addtodoitem 
    onChangeText={ChangeAddInput} 
    value={todos.addtext} 
    onSubmitForm={AddItem}/>
    </div>
)

}
