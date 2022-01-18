import React,{useState,useEffect} from "react";
import axios from "axios";
import './Todo.css'
const Todo=props=>{


     const [todoName,settodoName]=useState('');
    const [TodoList,setTodoList]=useState([]);

    // we use useEffect to execute function when component load first time

    //but also we can execute in other seenarios
    //normalyy useEffect run after every render cycle that's why we need to control of execution

    
    useEffect(()=>{
        axios.get('https://hooks-practice-2139c-default-rtdb.firebaseio.com/todos.json')
            .then(result=>{

                console.log("start from UseEffect");
                console.log(result);
                const todoData=result.data;
                console.log(todoData);

                const todos=[];
                for(const key in todoData){
                    todos.push({id:key, name:todoData[key].name})
                }
                console.log(todos);
                setTodoList(todos);
                console.log("End from useEffect");
            
                
            });

            return ()=>{
                //it will run in every render cycle
                console.log("cleanup")
            }
       
    },[todoName]);


    useEffect(()=>{
        document.addEventListener('mousemove',event=>{
            console.log(event.clientX,event.clientY)
        })
    },[])

    const inputHandler=event=>{
      
        settodoName(event.target.value);
    }

    const todoListHandler=()=>{

        setTodoList(TodoList.concat(todoName))
        axios.post('https://hooks-practice-2139c-default-rtdb.firebaseio.com/todos.json',{name: todoName})
                    .then(res=>{
                            console.log(res);

                    }).catch(err=>{
                        console.log(err);
                    })
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
         

           {TodoList.map((todo,i)=>(

            <li key={todo.id}> {todo.name}</li>
         ) )}

           
               
        </ul>
    </React.Fragment>
    )
    
}


export default Todo;