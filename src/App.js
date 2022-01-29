
import React,{useState} from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Auth from './Components/Auth';

function App() {
  const [page,setPage]=useState('auth');

  const switchPage= (pageName)=>{
      setPage(pageName);
  };

  return (
    <div className="App">
        <Header  onLoadTodos={switchPage.bind(this,'todos')} onLoadAuth={switchPage.bind(this,'auth')}/>
        <hr/>

        {page ==='auth' ? <Auth/> :<Todo/>}
        

        
    </div>
  );
}

export default App;
