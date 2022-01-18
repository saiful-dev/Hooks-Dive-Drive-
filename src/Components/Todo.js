import React,{useState} from "react";
import './Todo.css'
const Todo=props=>{


   // const [todoName,settodoName]=useState('');
    //const [TodoList,setTodoList]=useState([]);

    //replace two state into single state
    const [todoState,setTodoState]=useState({userInput:'',todoList:[] })

    const inputHandler=event=>{
        setTodoState({
                userInput: event.target.value,
                todoList: todoState.todoList,
        
        
        })
    }

    const todoListHandler=()=>{
        setTodoState({
            userInput:todoState.userInput,
            todoList: todoState.todoList.concat(todoState.userInput),
    })}
    return(
    <React.Fragment>
        
        <div className="input">
            <input type='text' 
                    placeholder="Todo"
                    onChange={inputHandler}  
                    //The onChange event in React detects when the value of an input element changes
                    value={todoState.userInput}/>
                    <ul>

                    </ul>
                    
            <button type="button" onClick={todoListHandler}> Add</button>
        </div>
        

        <ul> 
            {/*<li>{TodoList}</li> */}

           {todoState.todoList.map(todo=>(

            <li> {todo}</li>
         ) )}

           
               
        </ul>
    </React.Fragment>
    )
    
}


export default Todo;