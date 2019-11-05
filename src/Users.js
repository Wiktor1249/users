import React, {Component} from 'react';

import Heading from './Heading';
import UsersList from './UsersList';



class Users extends Component {
    
    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Olga', 'Kasia','Karol'],
        }

    }

    addUser = (e) => {
        e.preventDefault()
        // console.log(this.userInput.value);
        this.setState(prevState=>{
            return({users: [...prevState.users,this.userInput.value ]})
        });
    }
    
    removeUser = (indexToDelete) => {

        // this.setState(prevState=>{
        //     return({user: prevState.users.splice(index, 1)})
        // });
        let filteredArray = this.state.users.filter((elem, index)=>{
            return index !== indexToDelete;
        });

        this.setState({users: filteredArray});
    }

    render() {


        
        return (
            <div className="users">
                <Heading  text="User's List" />

                <form onSubmit={this.addUser} className="add-user-form">
                    <input type="text" placeholder="Nazwa użytkownika" ref={input=>this.userInput = input} />
                    <button>Add user</button>
                </form>

                <UsersList usersList={this.state.users} deleteUser={this.removeUser}/>
            </div>
        );
    }
}

export default Users;