import React from 'react';

const CONTAINER_STYLE = {  width: '100%', minHeight: '50px', backgroundColor: 'gray' }

const Navbar = () => {

    return (
        <div style={CONTAINER_STYLE}>
            <div style={{ paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h1 style={{ color: '#fff'}}>The Legend of Zelda</h1>
                <div>
                    <button>Menú</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;