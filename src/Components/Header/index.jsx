import React, { useEffect, useState } from 'react';
import './header.css';
import { nav } from './navbarComponents'
import { Link } from 'react-router-dom';
import { constants } from '../../Utils/constants'
import { useLocation } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header(props) {
    const location = useLocation();
    const [navElements, setNavElements] = useState(nav);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        const routeName = location.pathname;
        setNavElements(
            navElements.map((ne) => ne.active = false)
        );
        nav.map((ne) => {
            if (ne.url === routeName) {
                ne.active = true;
            }
        })
    }, [])

    return (
        <div className='base'>
            <div className='container-head'>
                <div style={{ width: "10px" }}></div>
                <div className="logo-container">
                    <Link to="/"><img className="logo" src={constants?.logo} /></Link>
                </div>
                {/* <div style={{ width: "60px" }}></div> */}
                <div className='navbar'>
                    <nav className='navbar-body'>
                        {nav.map((ne) => {
                            return (
                                <Link key={ne.id} className={ne.active ? 'nav-elements-active' : "nav-elements"} to={ne.url}>{ne.label}</Link>
                            )
                        })}

                        {/* <Link className="nav-elements" to="#" onClick={handleClick}>
                            More
                        </Link>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            {nav.slice(10).map((ne) => {
                                return (
                                    <Link className='nav-popper-elements' key={ne.id} to={ne.url}>{ne.label}</Link>
                                )
                            })}
                        </Popover> */}

                        {/* <div style={{paddingLeft: "120px"}}>
                            <div style={{border: "2px solid #027ef8", cursor: "pointer", borderRadius: "50%"}}>
                                <constants.AiOutlineUser style={{height: "18px", width: "22px"}} />
                            </div>
                        </div> */}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;