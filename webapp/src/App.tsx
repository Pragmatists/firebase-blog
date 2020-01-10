import React from 'react';
import './App.css';
import {Todos} from "./Todos";
import {AuthButton, useUser} from "./AuthButton";
import {ServerTime} from "./ServerTime";

function App() {
    const user = useUser();
    return <div>
        <ServerTime/>
        <AuthButton/>
        {user && <Todos userId={user.uid}/>}
    </div>;
}

export default App;
