import { Button, TextField, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "firebase/auth";
import React from "react";
import "./customer.scss";

interface Props {}

const Customer = (props: Props) => {
  return (
    <>
      <form className="customer-form">
        <Typography className="customer-form__title" variant="h5">
          Lịch sử khách hàng
        </Typography>
        <TextField
          className="customer-form__phone"
          variant="outlined"
          placeholder="Số điện thoại KH"
          id="customerPhone"
          name="customerPhone"
          required
        />
        <Button
          className="customer-form__submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          <Search />
          Tìm kiếm
        </Button>
      </form>
    </>
  );
};

export default Customer;
