import React from "react";
import { Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId);

    if (!user) return <Typography>User not found</Typography>
    return (
        <div clasName="user-detail">
          <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
          <Typography>Email: {user.location}</Typography>
          <Typography>Occupation: {user.occupation}</Typography>
          <Typography>Description: {user.description}</Typography>
          <Button component={Link} to={`/photos/${userId}`} variant="contained" sx={{mt:2}}>
            View Photos
          </Button>
        </div>
    );
}

export default UserDetail;
