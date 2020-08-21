import React from "react";
import styled from "styled-components";

const UsersContainer = styled.div `
    margin-top: 70px;
    font-family: "Barlow";
    color: white;
    width: 100%;

`

const UsersDetails = styled.div `
    color: black;
    width: 40%;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    margin: 40px 40px 10px 10px;
    /* box-shadow: 5px 10px 10px black; */

    h3 {
        font-size: 2.0em;
    }

    img {
        margin-top: 30px;
        height: 200px;
        width: auto;
    }

    p {
        text-align: left;
        margin-left: 10px;
        font-size: 1.3em;
    }

`

const Users = props => {
    const { details } = props

    //safe guard in case user data is not passing down
    if(!details) {
        return <h3>Working on retrieving user&apos;s data....</h3>
    }

    console.log(details.location);

    return (
        <UsersContainer>
        <UsersDetails>
            <img src="/avatarusers.png" alt="avatar"/>
            <h3>{details.fname} {details.lname}</h3>
            <p>Location: {details.location}</p>
            <p>Email: {details.email}</p>
        </UsersDetails>
        </UsersContainer>
    )
}

export default Users