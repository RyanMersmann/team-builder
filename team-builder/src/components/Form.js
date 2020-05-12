import React from 'react';
import { useState } from 'react';

//create list of team members
//assign key/value pairs to team members
//create useState

const Form = props => {
    const [team, setTeam] = useState({name: '', email: '', role:''});

    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(team);
        setTeam({name: '', email: '', role:''});
    };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={team.name}
            />

            <br></br>

            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                type='text'
                name='email'
                onChange={handleChanges}
                value={team.email}
            />


            <br></br>


            <label htmlFor='role'>Role</label>
            <input 
                id='role'
                type='text'
                name='role'
                onChange={handleChanges}
                value={team.role}
            />
            
            <br></br>

            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form;