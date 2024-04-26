import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div>
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          molestias sequi, officiis iusto assumenda libero explicabo beatae amet
          consequuntur veniam fugiat corporis minus adipisci modi a aliquam
          maiores exercitationem provident.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          molestias sequi, officiis iusto assumenda libero explicabo beatae amet
          consequuntur veniam fugiat corporis minus adipisci modi a aliquam
          maiores exercitationem provident.
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
                <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                    1099$
                </h5>
                <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                      999$
                </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                120 sold
            </span>
        </div>
        <CountDown />
      </div>
    </div>
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
    <div className="w-full lg:-w[50%] m-auto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7xz1Uq16sS1KS1OGOzsNgEWTSQLHM6EuOA&usqp=CAU" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>MacBook pro M2 chipset 256gb ssd 8gb ram</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          molestias sequi, officiis iusto assumenda libero explicabo beatae amet
          consequuntur veniam fugiat corporis minus adipisci modi a aliquam
          maiores exercitationem provident.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          molestias sequi, officiis iusto assumenda libero explicabo beatae amet
          consequuntur veniam fugiat corporis minus adipisci modi a aliquam
          maiores exercitationem provident.
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
                <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                    1099$
                </h5>
                <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                      999$
                </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                120 sold
            </span>
        </div>
        <CountDown />
      </div>
      </div>
      </div>
  );
};

export default EventCard;