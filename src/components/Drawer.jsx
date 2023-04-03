import React from "react";
import Sidebar from "./Sidebar";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = ({ setShowMenu }) => {
  return (
    <div className="drawer">
      <div className="py-3 px-2">
        <AiOutlineClose
          color="white"
          size="1.5rem"
          className="d-flex ms-auto"
          style={{ cursor: "pointer" }}
          onClick={() => setShowMenu(false)}
        />
        <Sidebar setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default Drawer;
