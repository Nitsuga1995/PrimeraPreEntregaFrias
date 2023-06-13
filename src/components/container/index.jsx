import React from 'react';

const CONTAINER_STYLE = {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddin: '20px 40px',

}

const Container = ({ children }) => {

    return (
        <div style={CONTAINER_STYLE}>
            <div style={{ maxWith:'960px' }}>
            { children }
            </div>
        </div>
    );
}

export default Container;



