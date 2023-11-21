import React from 'react';
import './navbar.scss'

function Navbar(){
    return (
        <navbar>
            <div className='wrapper'>
            <div className="logo">
                QR GEN
            </div>
            <div className="links">
                <button>Login</button>
            </div>
            </div>
        </navbar>
    );
}

export default Navbar;