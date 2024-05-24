import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import { Home } from "./Home";
import { Detail } from "./Detail";

import profilePic from "../public/profilePictureExample.png";
import logo from "../public/reactLogo.png";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <>
      <ShellBar
        logo={<img src={logo} />}
        profile={
          <Avatar>
            <img src={profilePic} />
          </Avatar>
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}
