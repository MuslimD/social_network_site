import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Interesting from "./Interesting/Interesting";
import SignIn from "./Authorization/SignIn";
import Navbar from "./Navbar/Navbar";
import SignUp from "./Authorization/SignUp";
import Mypage from "./Mypage/Mypage";
import Messager from "./Messager/Messager";
import Followers from "./Followers/Followers";
import Follows from "./Follows/Follows";
import styles from "./App.module.scss";

function App() {
  const token = useSelector((state) => state.userSlice.token);
  const base64 = require("base-64");
  if (token) {
    const id = base64.decode(token.split(".")[1]).split('"')[3];
    return (
      <>
        <div className={styles.navroute}>
          <Navbar />
          <Routes>
            <Route path="/mypage" element={<Mypage userid={id} />} />
            <Route path="/" element={<Interesting />} />
            <Route path="/messagepage" element={<Messager  userid={id}/>} />
            <Route path="/followerspage" element={<Followers userid={id} />} />
            <Route path="/followspage" element={<Follows userid={id} />} />
          </Routes>
        </div>
      </>
    );
  }
  if (!token)
    return (
      <>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    );
}

export default App;
