import React from "react";
import { AppBar, Toolbar, Typography} from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
  const location = useLocation();
  const params = useParams();
  let rightText = "";

  if (location.pathname.startsWith("/users/") && !location.pathname.includes("/photos")) {
    const user = models.userModel(params.userId);
    if (user) rightText = user.first_name + " " + user.last_name;
  } else if (location.pathname.includes("/photos")) {
    const user = models.userModel(params.userId);
    if (user) rightText = "Photos of " + user.first_name + " " + user.last_name;
  } else {
    rightText = "User List";
  }
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar sx={{display:"flex", justifyContent: "space-between"}}>
          <Typography variant="h5" color="inherit">
            Nguyễn Đình Quyền
          </Typography>
          <Typography variant="h5" color="inherit">
            {rightText}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
