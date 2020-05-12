import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

//create list of team members
//assign key/value pairs to team members
//create useState

const FormStyle = styled.form`
    border-bottom: 1px solid pink;
    padding-bottom: 25px;

    label {
        padding-right: 10px;
    }
`;

const Form = props => {
    const [team, setTeam] = useState({
        name: '', 
        email: '',
         role:''
    });

    const changeHandler = e => {
        setTeam({...team, 
            [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(team);
        setTeam({name: '', email: '', role:''});
    };

    return(
        <FormStyle onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={changeHandler}
                value={team.name}
            />
            <br /><br />
            <label htmlFor='email'>Email:</label>
            <input 
                id='email'
                type='text'
                name='email'
                onChange={changeHandler}
                value={team.email}
            />
            <br /><br />
            <label htmlFor='role'>Role:</label>
            <input 
                id='role'
                type='text'
                name='role'
                onChange={changeHandler}
                value={team.role}
            />
            <br /><br />
            <button type='submit'>Add Team Member</button>
        </FormStyle>
    )
}

export default Form;