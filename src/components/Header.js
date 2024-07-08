import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = (props) => {
  return (
    <Navbar className="navbar-custom" expand="lg">
        <Nav className="color " style={{marginLeft: '580px',fontFamily: 'Freestyle Script'}}>
        <h1 className='hsize'>{props.title}</h1></Nav>
    </Navbar>
  );
};

export default Header;
