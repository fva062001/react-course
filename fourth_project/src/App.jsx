import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const usersArr = [
  {
    id: '1',
    username: 'Max',
    age: 28
  }
]; 




function App() {

  const [usersArray, setUsersArray] = useState(usersArr);

  const addUserHandler = (userName, userAge) =>{
    setUsersArray((prevUsersArray) =>{
      return [...prevUsersArray, {username: userName, age: userAge, id: Math.random().toString()}]
    });
  }


  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UserList users={usersArray}/>
    </div>
  );
}

export default App;
