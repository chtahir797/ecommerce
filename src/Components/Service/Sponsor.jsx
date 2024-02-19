import './Sponsor.css'
import Sponsor1 from '../../assets/Footer/sponsors_1.png'
import Sponsor2 from '../../assets/Footer/sponsors_2.png'
import Sponsor3 from '../../assets/Footer/sponsors_3.png'
import Sponsor4 from '../../assets/Footer/sponsors_4.png'
import Sponsor5 from '../../assets/Footer/sponsors_5.png'
const Sponsor = () =>{
    return(
        <>
           <div className="sponsor-parent">
           <div className="sponsor-container">
                <div className="sponsor-1">
                    <img src={Sponsor1} alt="Sponsor-1" />
                </div>
                <div className="sponsor-2">
                    <img src={Sponsor2} alt="" />
                </div>
                <div className="sponsor-3">
                    <img src={Sponsor3} alt="" />
                </div>
                <div className="sponsor-4">
                    <img src={Sponsor4} alt="" />
                </div>
                <div className="sponsor-5">
                    <img src={Sponsor5} alt="" />
                </div>
            </div>
           </div>
        </>
    )
}

export default Sponsor