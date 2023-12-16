import "./Square.css";

function Square({ poz, color, val, pin }) {
    const classes = ["square", color + '-square', poz + '-square'];

    return (
        <div className={classes.join(" ")}>
            <div className="value">{val}</div>
            <div className="pin">{pin}</div>
            
        </div>
    )

}

export default Square;