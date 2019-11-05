import  React from 'react';


const UsersList = props => {
    const users = props.usersList;
    const listItems = users.map((users, index) =>
    <li key={index} onClick={()=>props.deleteUser(index)}>{users}</li>
    );

    
    // console.log(listItems);

    return ( 
        <ul className="users-list" >
            {listItems}
        </ul>
    );
}


export default UsersList;