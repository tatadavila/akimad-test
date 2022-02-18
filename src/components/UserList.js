import React, { useEffect, useState } from "react";

import { getUser, authenticate } from "../data/Fetch";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

const UserList = ({ show, query, setLoader }) => {
  const [userData, setUserData] = useState(null);

  // authenticate();

  useEffect(() => {
    const fetchData = async () => {
      if (query !== "") {
        const response = await getUser(query);
        setUserData(response.data);
      }
    };
    fetchData();
  }, [query]);

  console.log(userData);

  return (
    <div className="listContainer">
      {show && userData && (
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={userData.avatar_url} />
                </ListItemAvatar>
                {userData.name ? (
                  <ListItemText primary={userData.name} />
                ) : (
                  <ListItemText primary="No Name" />
                )}
              </ListItem>
            }
          </List>
        </Box>
      )}
    </div>
  );
};

export default UserList;
