import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { LoginAuth } from "../redux/Actions/Actions";

const Home = () => {
  let token = useSelector((state) => state?.Auth_Reducer?.token);
  console.log(token);
  let dispatch = useDispatch();
  let username = process.env.REACT_APP_USER_NAME;
  let password = process.env.REACT_APP_PASSWORD;
  let url = process.env.REACT_APP_URL;

  var config = {
    method: "post",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        'Digest username="{{appToken}}" realm="_root_" password=""',
    },
    data: JSON.stringify({
      username,
      password,
    }),
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        dispatch(LoginAuth(res?.data?.Result?.auth?.token));
        console.log(token);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return <div>Home</div>;
};

export default Home;
