import { Divider, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import UpdateUser from "../../sections/UserUpdate/UpdateUser";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  value: {
    flex: 1,
  },
  container: {
    height: "100%",
  },
  tabHead: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
}));
function UserManageUpdate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6" color="primary" align="center">
          Commercial Web Application - User Management
        </Typography>
        {/*<Divider />*/}
      </div>
      <div className={classes.value}>
        <UpdateUser />
      </div>
    </div>
  );
}

export default UserManageUpdate;
