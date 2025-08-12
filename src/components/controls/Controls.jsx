import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Controls.css';

function Controls() {
    const location = useLocation();
    const navigate = useNavigate();

    const buttons = [
        { label: 'POS Project', path: '/projects' },
        { label: 'BirthDay Project', path: '/projects2' },
        { label: 'Rental Room Project', path: '/projects3' }
    ];

    return (
        <div className="controls-wrap">
            <div className="controls">
                {buttons.map((btn) => (
                    <button
                        key={btn.path}
                        type="button"
                        className={`controlbtn ${location.pathname === btn.path ? 'active' : ''}`}
                        onClick={() => navigate(btn.path)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Controls;