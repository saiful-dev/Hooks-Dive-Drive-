
import React,{useState} from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Auth from './Components/Auth';

import AuthContex from './AuthContex';

function App() {
  const [page,setPage]=useState('auth');
  const [authStatus,setAuthStatus]=useState(false);

  const switchPage= (pageName)=>{
      setPage(pageName);
  };

  const login=()=>{
      setAuthStatus(true);

  };

  return (
    <div className="App">
      <AuthContex.Provider value={{status:authStatus, login: login }}>
        <Header  onLoadTodos={switchPage.bind(this,'todos')} onLoadAuth={switchPage.bind(this,'auth')}/>
        <hr/>

        {page ==='auth' ? <Auth/> :<Todo/>}
        
        </AuthContex.Provider>
        
    </div>
  );
}

export default App;
