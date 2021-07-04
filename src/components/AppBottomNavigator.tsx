import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { AssignmentInd, Face, People } from "@material-ui/icons";
import React from "react";

interface Props {}
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
});
const AppBottomNavigator = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Nhân viên" icon={<AssignmentInd />} />
      <BottomNavigationAction label="Khách hàng" icon={<People />} />
      <BottomNavigationAction label="Tài khoản" icon={<Face />} />
    </BottomNavigation>
  );
};

export default AppBottomNavigator;
