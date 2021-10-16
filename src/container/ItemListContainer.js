import React from 'react';

const Items = ({titulo}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '4rem'}}>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Items 