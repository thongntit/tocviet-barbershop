import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AccountCircle, NotificationsNoneOutlined } from "@material-ui/icons";
import { AuthContext } from "contexts";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "firebase/auth";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

const AppHeader: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const { user, logout } = useContext(AuthContext);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <NotificationsNoneOutlined />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Tóc Việt Barber
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {user?.photoURL ? (
              <Avatar alt="DisplayInfo" src={user.photoURL} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>{user?.displayName}</MenuItem>
            <MenuItem onClick={logout}>Đăng xuất</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
