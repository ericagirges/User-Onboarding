import React from "react";
import styled from "styled-components";

const Users = props => {
    const { details } = props

    //safe guard in case user data is not passing down
    if(!details) {
        return <h3>Working on retrieving user&apos;s data....</h3>
    }

    return (
        <div>
            <h2>{details.fname} {details.lname}</h2>
            <p>Location: {details.location}</p>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default Users