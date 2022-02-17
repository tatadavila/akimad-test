import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import { FixedSizeList } from "react-window";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const UserList = ({show}) => {
  console.log({show});
  return (
    <div className="listContainer">
      {show ? (
        <div>
          <Box
            sx={{
              width: "100%",
              height: 250,
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <FixedSizeList
              height={250}
              width={360}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          </Box>
        </div>
      ) : null}
    </div>
  );
};

export default UserList;

const renderRow = (props) => {
  const { index, style } = props;

  return (
    <>
      {data &&
        data.map((user, index) => {
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>;
        })}
    </>
  );
};
