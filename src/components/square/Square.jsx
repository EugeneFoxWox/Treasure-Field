import "./Square.css";
import { useState } from 'react';

function Square({ poz, color, val, pin, chip }) {
    const classes = ["square", color + '-square', poz + '-square'];

    return (
        <div className={classes.join(" ")}>
            <div className="value">{val}</div>
            <div className="pin">{pin}</div>
            <div className="chip">{chip}</div>
        </div>
    )

}

export default Square;