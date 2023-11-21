import React, { useState } from 'react';
import './home.scss'

function Navbar(){
    const [value,setValue]=useState("");
    return (
        <section>
            <div className='wrapper'>
                <div className='card'>
                    <input name='text' placeholder='Enter text or url' onChange={e=>setValue(e.target.value)}/>
                    <div className='img-cont'>
                        <img src='test.png' alt=''></img>
                    </div>
                    <button type="submit" onClick={e=>{
                        document.querySelector('img').src=` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;
                    }}>Generate</button>
                </div>
            </div>
        </section>
    );
}

export default Navbar;