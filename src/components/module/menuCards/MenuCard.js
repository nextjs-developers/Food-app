"use client";

import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import Rating from "./Rating";

function MenuCard({ item, onClick }) {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(item.rate);

  const likeHandler = () => {
    setLiked((liked) => !liked);
  };

  const truncateString = (str, num) => {
    return str.split(' ').slice(0, num).join(' ');
}

  return (
    <div
      className="card card-side bg-base-100 border border-[#CBCBCB] lg:shadow-sm"
    >
      <figure className="w-[130px] h-[150px]  cursor-pointer lg:w-[169px] lg:h-[174px]" onClick={onClick}>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body h-[150] lg:h-[174px]">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-xs text-[#353535] font-semibold lg:text-xl">
            {truncateString(item.title, 3)}
          </h2>
          <button onClick={likeHandler} className="cursor-pointer">
            {liked ? <FcLike /> : <AiOutlineHeart />}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#353535]">{item.ingredients}</p>

          <div className="flex flex-col justify-center items-center">
            {item.discount !== 0 ? (
              <>
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[#ADADAD] line-through">{item.price}$</p>
                  <p className="bg-[#FFF2F2] rounded-lg w-8 text-xs text-[#C30000] text-center">
                    {item.discount}%
                  </p>
                </div>
                <p className="text-[#353535]">{item.priceAfterDiscount}$</p>
              </>
            ) : (
              <p className="text-[#353535] mb-5">{item.price}$</p>
            )}
          </div>
        </div>
        <div className="card-actions justify-between items-center">
          <Rating
            initialValue={rating}
            onChange={(newRating) => setRating(newRating)}
          />
          <button className="btn bg-[#417F56] text-[10px] text-white font-medium w-[85px] lg:w-[104px] lg:text-sm 2xl:text-xl 2xl:w-[244px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
