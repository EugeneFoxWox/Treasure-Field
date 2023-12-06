import face1 from '../../img/face1.svg'
import face2 from '../../img/face2.svg'
import face3 from '../../img/face3.svg'
import face4 from '../../img/face4.svg'
import face5 from '../../img/face5.svg'
import face6 from '../../img/face6.svg'
import gift from '../../img/gift.svg'
import star from '../../img/star.svg'

function Dice({id, faceNumber}){
    switch (faceNumber) {
        case 1: 
            return(<img src={face1} alt=""/>);
        
        case 2: 
            return(<img src={face2} alt=""/>);

        case 3: 
            return(<img src={face3} alt=""/>);

        case 4: 
            return(<img src={face4} alt=""/>);
        
        case 5: 
            return(<img className='Dice' src={face5} alt=""/>);

        case 6: 
            return(<img src={face6} alt=""/>);     

        case 7: 
            return(<img src={gift} alt=""/>); 

        case 8: 
            return(<img src={star} alt=""/>); 
            
        default:
            return null;
    }
    
}

export default Dice;