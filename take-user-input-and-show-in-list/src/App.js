import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";


function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
