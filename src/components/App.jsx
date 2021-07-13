import React from "react";
import Card from "./cards";
import contacts from "../contacts";
import Avatar from "./avatar";

function createcard(inside) {
  
  return <Card 
               id = {inside.id}
               key={inside.id}
               name={inside.name}
               img={inside.imgURL}
               no={inside.phone}
               em={inside.email}
  />
}

function App() {
  return (
    <div>
     <h1 className="heading">My Contacts</h1>
     <Avatar img = {contacts[0].imgURL} />

     {contacts.map(createcard)}
    
     {/* <Card 
     name ={contacts[0].name} 
     img={contacts[0].imgURL} 
     no ={contacts[0].phone} 
     em={contacts[0].email}   
     />

     <Card  
      name={contacts[1].name}
      img={contacts[1].imgURL} 
      no={contacts[1].phone}
      em={contacts[1].email}
      />

     <Card  
     name ={contacts[2].name} 
     img={contacts[2].imgURL} 
     no={contacts[2].phone} 
     em={contacts[2].email}       
     /> */}
    </div>
  );
}

export default App;
