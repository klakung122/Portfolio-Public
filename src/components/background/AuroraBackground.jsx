import React from "react";
import "./aurora.css";

export default function AuroraBackground() {
    return (
        <div className="aurora-center" aria-hidden="true">
            <span className="blob b1" />
            <span className="blob b2" />
            <span className="blob b3" />
            <span className="blob b4" />
        </div>
    );
}