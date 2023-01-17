import React from "react";
import SignIn from "./Authorization/SignIn";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import SignUp from "./Authorization/SignUp";
import { Route, Routes } from "react-router-dom";
import Mypage from "./Mypage/Mypage";
import Interesting from "./Interesting/Interesting";
import Message from "./Message/Message";
import Followers from "./Followers/Followers";
import Follows from "./Follows/Follows";
function App() {
  const token = useSelector((state) => state.userSlice.token);
  if (token) {
    return (
      <>
        <Header />
        <div className={styles.navroute}>
          <Navbar />
          <Routes>
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/" element={<Interesting />} />
            <Route path="/messagepage" element={<Message />} />
            <Route path="/followerspage" element={<Followers />} />
            <Route path="/followspage" element={<Follows />} />
          </Routes>
        </div>
      </>
    );
  }
  if (!token)
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    );
}

export default App;
