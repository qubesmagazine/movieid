import { useState } from "react";
import React from "react";
import { Container, Stack } from "react-bootstrap";
import { SiThemoviedatabase } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Searchbar, Drawer } from "./";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container
      fluid
      className="position-fixed top-0 bg-dark shadow-lg"
      style={{ zIndex: 10 }}
    >
      <Stack
        direction="horizontal"
        className="py-2 px-1 px-md-2 justify-content-between"
      >
        <Stack direction="horizontal" gap={2} style={{ cursor: "pointer" }}>
          <FiMenu
            className="d-lg-none text-white"
            size="1.5rem"
            onClick={() => setShowMenu(true)}
          />
          <Link to="/">
            <SiThemoviedatabase size="2.5rem" color="orange" />
          </Link>
        </Stack>
        <Searchbar />
      </Stack>
      {showMenu && <Drawer setShowMenu={setShowMenu} />}
    </Container>
  );
}
