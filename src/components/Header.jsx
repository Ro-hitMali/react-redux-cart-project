/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useSelector} from "react-redux"

const Header = () => {

  const getdata = useSelector((state) => state.cartreducer)
  console.log(getdata)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-sharp fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details d-flex justify-content-center align-items-center" style={{width:"20rem", padding:10, position:"relative"}} >
            <i className="fas fa-close smallclose"
            onClick={handleClose}
            style={{position:"absolute",fontSize:23, top:2, right:20, cursor:"pointer"}}></i>
          <p style={{fontSize:22}}>Your cart is empty</p>
          <img src="./public/cart.gif" alt="" className="emptyacart_img" style={{width:"5rem", padding:5}} />
          </div>
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
