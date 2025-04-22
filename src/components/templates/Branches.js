"use client";

import ModalContainer from "../container/ModalContainer";
import { useState } from "react";
import ImageSlider from "../module/slider/ImageSlider";
import { branches } from "src/constant/branches";
import BranchesCard from "../module/branchesCards/BranchesCard";
function Branches() {
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showImageHandler = (images) => {
    setIsOpenImage(true);
    setSelectedImage(images);
  };
  return (
    <div className="my-16">
      <h4 className="text-[24px] font-bold text-center leading-[140%] mx-auto my-10 ">
        Mehmoni Branches
      </h4>
      <div className="card grid  md:grid-cols-2 lg:grid-cols-4 items-center md:gap-6 gap-10 md:px-10 justify-center">
        {branches.map((branch) => ( 
        <BranchesCard key={branch.id} branch={branch} showImageHandler={showImageHandler}/>
        ))}
      </div>
      {isOpenImage && (
        <ModalContainer isOpen={isOpenImage}>
          <ImageSlider selectedImage={selectedImage} setIsOpen={setIsOpenImage} />
        </ModalContainer>
      )}
    </div>
  );
}

export default Branches;
