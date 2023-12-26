import "./Square.css";
import Chip from "../chip/Chip";
import { useState } from 'react';
/*import pawYe from '../../img/pins/paw03.png';
import pawNo from '../../img/pins/paw03.png';
import pawQ from '../../img/pins/paw03.png';
*/

function Square({ poz, color, val, pin, chip, index }) {
    let imgpin;
    const classes = ["square", color + '-square',
                     poz + '-square',
                     ];
    
   

    return (
        <div className={classes.join(" ")}>
            <div className="value">{val}</div>
            <img src={pin} alt=''></img>
            <Chip isChip={chip}></Chip>
        </div>
    )

}

export default Square;