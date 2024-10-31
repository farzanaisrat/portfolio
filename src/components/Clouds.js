import Cloud1 from '../assets/cloud1.png';
import Cloud2 from '../assets/cloud2.png';
import Cloud3 from '../assets/cloud3.png';
import Cloud4 from '../assets/cloud4.png';

import '../styles/Clouds.css'

function Clouds() {
    
    return (
        <div className='clouds'>
                <div className='cloud1'>
                    <img src={Cloud1} alt="Cloud1"/>
                </div>
                <div className='cloud2'>
                    <img src={Cloud2} alt="Cloud2"/>
                </div>
                <div className='cloud3'>
                    <img src={Cloud3} alt="Cloud3"/>
                </div>
                <div className='cloud4'>
                    <img src={Cloud4} alt="Cloud4"/>
                </div>
        </div>
    )
  }
  export default Clouds;