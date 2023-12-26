import "./Chip.css";
function Chip({isChip}){

    if(isChip){
        return(
            <div className="chip"></div>
        );
    }else{
        return null;
    }
    
    
    
}

export default Chip;