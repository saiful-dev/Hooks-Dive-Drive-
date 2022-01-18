import React,{useState} from "react";
import './Todo.css'
const Todo=props=>{


    const [todoName,settodoName]=useState('');

    const [TodoList,setTodoList]=useState([]);

    const inputHandler=event=>{
        settodoName(event.target.value);
        //console.log(todoName)
    }

    const todoListHandler=()=>{
        setTodoList(TodoList.concat(todoName))
    }
    return(
    <React.Fragment>
        
        <div className="input">
            <input type='text' 
                    placeholder="Todo"
                    onChange={inputHandler}  
                    //The onChange event in React detects when the value of an input element changes
                    value={todoName}/>
                    <ul>

                    </ul>
                    
            <button type="button" onClick={todoListHandler}> Add</button>
        </div>
        

        <ul> 
            {/*<li>{TodoList}</li> */}

           {TodoList.map(todo=>(

            <li> {todo}</li>
         ) )}

           
               
        </ul>
    </React.Fragment>
    )
    
}


export default Todo;