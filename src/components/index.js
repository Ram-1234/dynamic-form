import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Users from "./users/users";
import Posts from "./posts/posts";
import Contact from "./contact/contact";
import Signup from "./form/index";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Signup />} />
    </Routes>
  );
};

export default Main;
