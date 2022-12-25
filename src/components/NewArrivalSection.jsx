import na_watch1 from "../assets/na-watch-1.svg";
import na_watch2 from "../assets/na-watch-2.svg";
import na_watch3 from "../assets/na-watch-3.svg";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";

function NewArrivalSection() {
   return (
      <section className="new-arrival">
         <h2 className="new-arrival__heading">new arrivals</h2>

         <div className="new-arrival__box">
            <div className="new-arrival__icon-box">
               <img className="new-arrival__icon" src={prev} alt="" />
            </div>
            <div className="new-arrival__box-2">
               <ul className="new-arrival__lists">
                  <li className="new-arrival__list">
                     <div className="new-arrival__image-box">
                        <img className="new-arrival__image" src={na_watch1} alt="" />
                     </div>
                     <div className="new-arrival__texts">
                        <span className="new-arrival__name">AUTO CHRONOGRAPH</span>
                        <span className="new-arrival__price">$23,000</span>
                     </div>
                  </li>
                  <li className="new-arrival__list">
                     <div className="new-arrival__image-box">
                        <img className="new-arrival__image" src={na_watch2} alt="" />
                     </div>
                     <div className="new-arrival__texts">
                        <span className="new-arrival__name">AQUA TERA 150M</span>
                        <span className="new-arrival__price">$45,000</span>
                     </div>
                  </li>
                  <li className="new-arrival__list">
                     <div className="new-arrival__image-box">
                        <img className="new-arrival__image" src={na_watch3} alt="" />
                     </div>
                     <div className="new-arrival__texts">
                        <span className="new-arrival__name">NAUTLLUS</span>
                        <span className="new-arrival__price">$16,000</span>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="new-arrival__icon-box">
               <img className="new-arrival__icon" src={next} alt="" />
            </div>
         </div>

         <a className="new-arrival__btn" href="/">
            Explore new arrivals
         </a>
      </section>
   );
}

export default NewArrivalSection;
