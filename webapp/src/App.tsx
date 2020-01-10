import React from 'react';
import './App.css';
import {Todos} from "./Todos";
import {AuthButton, useUser} from "./AuthButton";

function App() {
    const user = useUser();
    return <div>
        <AuthButton/>
        {user && <Todos userId={user.uid}/>}
    </div>;
}

export default App;
