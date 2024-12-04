import React from "react";
import square from "../assets/orange-square.svg";
import playStore from "../assets/andriod-btn.svg";
import appleStore from "../assets/ios-btn.svg";
import heroSectionImg from "../assets/hero-image.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-primary  pt-[85px] pb-[85px] lg:pt-[200px] lg:pb-[290px] ">
      <div className="container grid  lg:grid-cols-[40%,60%] items-center  gap-[50px] lg:gap-[50px] ">
        {/* left  side div */}
        <div>
          <div className="flex  gap-[9px] w-fit lg:gap-[15px] items-center bg-[#F8F0E380] rounded-[20px] pl-[18px] py-[6px] pr-[25px] lg:pr-[40px]">
            <img src={square} alt="orange square"/>
            <p className=" text-[14px] lg:text-[16px] font-light text-light leading-5 whitespace-nowrap">
              Vestium is the new mode of dressing
            </p>
          </div>
          <h1 className=" text-light text-[40px] md:text-[48px] leading-[45px] md:leading-[50px] font-medium pt-[15px] lg:pt-[25px]  pb-[21px] lg:pb-[32px] ">
            The way we <span className="border-[2px] border-secondary rounded-[50%] ">dress</span> is more important than how we
            <span className="text-secondary"> look</span>
          </h1>
          <div className=" text-light text-[18] leading-[24px] font-normal pb-[26px] lg:pb-[59px]">
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, smod
              tempor incididunt ut labore et dolore Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-[60px] lg:gap-[63px]">
            <Link>
              <img src={playStore} alt="" />
            </Link>
            <Link>
              <img src={appleStore} alt="" />
            </Link>
          </div>
        </div>
        {/* right side div */}
        <div>
          <img src={heroSectionImg} alt="girlimage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
