
import { useState } from "react";
import Container from "./containers/Login-Container/Container";
import EditProfile from "./components/Edit-Profile/EditProfile";

function App() {


  const [newUser,setNewUser] = useState({})
  const [oldUser, setOldUser] = useState({})

  const oldUserHandler = (user) =>{
    setOldUser(user);
  }
  const newUserHandler = (user) =>{

    console.log("From app.js")
    setNewUser(user);

  }
  console.log(newUser);
  console.log(oldUser);
  
  return (
    <div className="App">
    {/*  <Container sendUserDb ={newUserHandler} oldUser={oldUserHandler}/> */}

    <EditProfile />
    </div>
  );
}

export default App;
