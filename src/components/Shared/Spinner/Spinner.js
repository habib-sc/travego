import React from 'react';

const Spinner = () => {
    return (
        <div class="text-center my-5 py-5">
            <div class="spinner-border" style={{'width': '3rem', 'height': '3rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;