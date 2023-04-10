import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
    <p className="text-center mt-4 mb-4">Or right-aligned</p>
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">HOME</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">ABOUT ME</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">PORTFOLIO</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">RESUME</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">CONTACT ME</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </>
  );
}

render(<NavDropdownExample />);