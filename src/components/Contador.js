import React from "react";
import '../stylesheet/contador.css';
export default function Contador( { numDeClics } ){
    return (
        <div className="contador">
            { numDeClics }
        </div>
    );
};