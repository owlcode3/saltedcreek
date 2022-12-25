import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import heroImageLeft from "../assets/rolex-png-logo-0 1.svg";
import watch1 from "../assets/wrist-watch-1.svg";
import watch2 from "../assets/wrist-watch-2.svg";
import watch3 from "../assets/wrist-watch-3.svg";
import watch4 from "../assets/wrist-watch-4.svg";

function HeroSection() {
   const watch_1 = useRef(null);
   const watch_2 = useRef(null);
   const watch_3 = useRef(null);
   const watch_4 = useRef(null);

   const [watchOne, setWatchOne] = useState(true);
   const [watchTwo, setWatchTwo] = useState(false);
   const [watchThree, setWatchThree] = useState(false);
   const [watchFour, setWatchFour] = useState(false);

   const clickWatchOne = () => {
      watch_1.current.style.transform = "translateY(-100%)";
      watch_2.current.style.transform = "translateY(0%)";
      setWatchTwo(true);
      setWatchOne(false);
      setWatchThree(false);
      setWatchFour(false);
   };

   const clickWatchTwo = () => {
      watch_2.current.style.transform = "translateY(-100%)";
      watch_3.current.style.transform = "translateY(0%)";
      setWatchThree(true);
      setWatchTwo(false);
      setWatchOne(false);
      setWatchFour(false);
   };

   const clickWatchThree = () => {
      watch_3.current.style.transform = "translateY(-100%)";
      watch_4.current.style.transform = "translateY(0%)";
      setWatchFour(true);
      setWatchThree(false);
      setWatchTwo(false);
      setWatchOne(false);
   };

   const clickWatchFour = () => {
      watch_4.current.style.transform = "translateY(-100%)";
      watch_1.current.style.transform = "translateY(0%)";
      setWatchOne(true);
      setWatchFour(false);
      setWatchTwo(false);
      setWatchThree(false);
   };

   useLayoutEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 2 } });
      tl.fromTo(
         ".preloader__list--2",
         { letterSpacing: 0 },
         { letterSpacing: 30, duration: 2, delay: 0.8, ease: "linear" }
      );
      tl.fromTo(
         ".hero__img-box-2",
         { yPercent: -300, opacity: 0 },
         { yPercent: 0, opacity: 1 },
         "<1.5"
      );
      tl.to(".preloader__text-box", { marginTop: 0 }, "+=0.2");
      tl.to(".preloader", { opacity: 0, zIndex: -1 });
      tl.to(".hero__img-box-2", { height: "100%", left: 0, top: 0 }, "<");
      tl.to(".preloader__list--3", { yPercent: 100, xPercent: 50, opacity: 0 }, "<0.5");
      tl.fromTo(".hero__right", { opacity: 0, x: -300, y: 100 }, { x: 0, y: 0, opacity: 1 }, "<");
   }, []);

   return (
      <section className="hero">
         <div className="hero__left">
            <div className="hero__img-box">
               <div className="hero__img-box-2">
                  <img className="hero__img-left" src={heroImageLeft} alt="" />
               </div>
            </div>
            <h1 className="hero__heading">
               ROLEX DAY DATE{" "}
               <span className="hero__sub-heading">
                  {watchOne && "Rose Gold"}
                  {watchTwo && "Mean Green"}
                  {watchThree && "Quick Silver"}
                  {watchFour && "Gold Rust"}
               </span>
            </h1>
            <p className="hero__paragraph">
               Rolex SA is a British-founded Swiss watch designer and manufacturer based in Geneva,
               Switzerland. Founded in 1905 as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis
               in London, the company registered Rolex as the brand name of its watches in 1908 and
               became Rolex Watch Co. Ltd. in 1915.
            </p>
            <span className="hero__amount">
               $600,000 <span className="hero__usd">USD</span>
            </span>
            <a className="hero__btn hero__btn--1" href="/">
               Add to cart
            </a>
            <a className="hero__btn hero__btn--2" href="/">
               Add to wishlist
            </a>
         </div>
         <div className="hero__right">
            <img
               onClick={clickWatchOne}
               ref={watch_1}
               className="hero__image-right hero__image-right--1"
               src={watch1}
               alt=""
            />
            <img
               onClick={clickWatchTwo}
               ref={watch_2}
               className="hero__image-right hero__image-right--2"
               src={watch2}
               alt=""
            />
            <img
               onClick={clickWatchThree}
               ref={watch_3}
               className="hero__image-right hero__image-right--3"
               src={watch3}
               alt=""
            />
            <img
               onClick={clickWatchFour}
               ref={watch_4}
               className="hero__image-right hero__image-right--4"
               src={watch4}
               alt=""
            />
         </div>
         <div className="preloader">
            <ul className="preloader__lists">
               {/* <li className="preloader__list preloader__list--1">
                  <img src={heroImageLeft} alt="" />
               </li> */}
               <li className="preloader__list preloader__list--2">ROLEX</li>
               <li className="preloader__list preloader__list--3">
                  <div className="preloader__text-box">
                     Salted<span>Creek</span> Inspired by Culture
                  </div>
               </li>
            </ul>
         </div>
      </section>
   );
}

export default HeroSection;
