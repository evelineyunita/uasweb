import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Button } from 'reactstrap'
import { NavLink} from 'react-router-dom'
const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setvalue} = useContext(CartContext)

    return (
     < div >
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">MyBookstrore</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about"className="nav-link">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/barang"className="nav-link">Barang</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/stok"className="nav-link">Stok</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/useeffects"className="nav-link">Data Barang</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/produk"className="nav-link">Produk Barang</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/reducer"className="nav-link">Pembelian</NavLink>
                    </NavItem>
                </Nav>
                
                <NavbarText>
                    <Button color="danger">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="badge badge-lipht">{value}</span>
                    </Button>
                </NavbarText>
            </Collapse>
        </Navbar>
        </div >
    )
}


export default NavbarComp;