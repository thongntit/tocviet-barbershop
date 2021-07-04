import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { Button, TextField } from "@material-ui/core";
interface Props {}

const Customer = (props: Props) => {
  return (
    <>
      <form>
        <span>Lịch sử sử dụng dịch vụ</span>
        <TextField
          variant="outlined"
          placeholder="Số điện thoại KH"
          id="customerPhone"
          name="customerPhone"
          required
        />
        <Button type="submit">Tìm</Button>
      </form>
    </>
  );
};

export default Customer;
