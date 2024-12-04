import React from "react";
import iphone from "../assets/iPhone-mockup.svg";
import square from "../assets/orange-square.svg";
import { Link } from "react-router-dom";
import Andriod from "../assets/andriod-button-about-us.svg";
import iosbtn from "../assets/ios-btn-aboutus.svg";
const About = () => {
  return (
    <section className="bg-light lg:pt-[85px] lg:pb-[121px]">
      <div className=" container grid lg:grid-cols-[40%,60%] items-center">
        {/* left side */}
          <img className="block mx-auto mt-[-14%] lg:mt-[-154%]  xl:mt-[-34%]" src={iphone} alt="iphone mockup" />
        {/* right side */}
        <div>
          <div className="flex items-baseline  gap-[7px]">
            <h1 className="text-[40px] lg:text-[64px] font-extrabold text-primary ">
              About Us
            </h1>
            <img src={square} alt="orange square" />
          </div>
          <h1 className="font-bold text-primary text-[24px]  lg:text-[47px]  mb-[20px] lg:mb-[40px]">
            Smart Wear Virtual World
          </h1>
          <p className="mb-[8px] lg:mb-[24px] text-[18px] lg:text-[22px]    text-primary  leading-[32px] ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt. hel
            mollitia animi, id est laborum et dolorum fuga. Et harum. Is tr
            quidem rerum facilis est et expedita distinctio.{" "}
            <span className="font-bold">
              Nam I am libero tempore, cum soluta nobis est eligendi
            </span>
          </p>
          <p className="mb-[21px] lg:mb-[63px] text-[18px]  lg:text-[22px] text-primary leading-[32px] ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis{" "}
            <span className=" font-bold">
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occa
            </span>
            ecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt. hel mollitia animi, id est laborum et dolorum fuga. Et
            harum. Is tr quidem rerum facilis est et expedita distinctio. Nam I
            am libero tempore, cum soluta nobis est eligendi
          </p>
          <div className="flex gap-[16px]">
            <Link>
              <img src={Andriod} alt="" />
            </Link>
            <Link>
              <img src={iosbtn} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
