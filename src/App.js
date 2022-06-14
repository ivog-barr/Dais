
import { useState } from "react";
import Container from "./containers/Container";

function App() {

  const [newUser,setNewUser] = useState("")


  const newUserHandler = (user) =>{

    console.log("From app.js")
    setNewUser(user);

  }
  console.log(newUser);
  
  return (
    <div className="App">
     <Container sendUserDb ={newUserHandler}/>
    </div>
  );
}

export default App;
