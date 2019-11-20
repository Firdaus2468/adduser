import React from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';

class App extends React.Component{
  state ={
    users:[]
  };
 removeUser=(index)=>{
    const users= this.state.users;

    this.setState({
      users: users.filter((user ,i)=>{
        return (i!== index);
      })
    });
  }

  addUser = (newUserObj)=>{
    this.setState({
      users: [...this.state.users,newUserObj]
    })
  }

  render(){
    return(
      <div>  
        <Header siteName="Userapp"/>
        <div className="container">
          <h1>Helloooooo React</h1>
          <Form addUser={this.addUser}/>
          <Table userDetails={this.state.users} delUser={this.removeUser}/>
        </div>
       </div>
    );
  }
}

export default App;