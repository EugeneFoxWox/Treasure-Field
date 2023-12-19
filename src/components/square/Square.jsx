import "./Square.css";
import { useState } from 'react';
/*import pawYe from '../../img/pins/paw03.png';
import pawNo from '../../img/pins/paw03.png';
import pawQ from '../../img/pins/paw03.png';
*/

function Square({ poz, color, val, pin, chip }) {
    let imgpin;
    const classes = ["square", color + '-square',
                     poz + '-square', chip + '-square',
                     ];
    
    /*switch (pin) {
        case "pawYe":
            imgpin = pawYe;
        case "pawNo":
            imgpin = pawNo;
        case "pawQ":
            imgpin = pawQ;

    }*/

    return (
        <div className={classes.join(" ")}>
            <div className="value">{val}</div>
            <img src={pin} alt=''></img>
            <div className="chip">{chip}</div>
        </div>
    )

}

export default Square;