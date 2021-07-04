import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { AssignmentInd, Face, People } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

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
  const [value, setValue] = React.useState("customer");
  const history = useHistory();

  const onTabChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
    history.push(`/${value}`);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={onTabChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        value="staff"
        label="Nhân viên"
        icon={<AssignmentInd />}
      />
      <BottomNavigationAction
        value="customer"
        label="Khách hàng"
        icon={<People />}
      />
      <BottomNavigationAction
        value="account"
        label="Tài khoản"
        icon={<Face />}
      />
    </BottomNavigation>
  );
};

export default AppBottomNavigator;
