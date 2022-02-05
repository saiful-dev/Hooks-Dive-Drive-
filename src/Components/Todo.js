import React,{useState,useEffect} from "react";
import axios from "axios";
import './Todo.css'

const Todo=props=>{

    const [todoName,settodoName]=useState('');
    const [submittedTodo,setSubmittedTodo]=useState(null);
    const [TodoList,setTodoList]=useState([]);

    // we use useEffect to execute function when component load first time

    //but also we can execute in other seenarios
    //normalyy useEffect run after every render cycle that's why we need to control of execution

    
    useEffect(()=>{
        axios.get('https://hooks-practice-2139c-default-rtdb.firebaseio.com/todos.json')
            .then(result=>{

                const todoData=result.data;
                console.log("working from useEffect")
                console.log(TodoList)
                //console.log(todoData);
                const todos=[];
                for(const key in todoData){
                    todos.push({id:key, name:todoData[key].name})
                }
                //console.log(todos);
                setTodoList(todos);
                //console.log("End from useEffect");
            
                
            });
   
    },[]);  // [] dependency array

    //The dependency array basically tells the hook to "only trigger when the dependency array changes". 
    // [counter1, counter2]

    //If you have multiple elements in a dependency array, the hook will trigger if any element of the dependency array changes:
    //[] -->   it means the callback will run once at the beginning of the lifecycle of the component and never again.
    useEffect(()=>{
        document.addEventListener('mousemove',event=>{
            console.log(event.clientX,event.clientY)
        })
    },[])


    useEffect(()=>{
        if(submittedTodo){
            setTodoList(TodoList.concat(submittedTodo));

        }
    },[submittedTodo])

    const inputHandler=event=>{
      
        console.log("test .................")
      
        settodoName(event.target.value);
       
        //console.log(TodoList);
    }

    const todoListHandler=()=>{

        console.log("working here")
        
       

        
        axios.post('https://hooks-practice-2139c-default-rtdb.firebaseio.com/todos.json',{name: todoName})
                    .then(res=>{
                            console.log(res);
                            //for solving this 
                            //Warning: Each child in a list should have a unique "key" prop.
                            const todoItem={id: res.data.name, name:todoName}
                            setSubmittedTodo(todoItem);
                            

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