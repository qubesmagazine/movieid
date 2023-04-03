import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { Image } from "react-bootstrap";

export default function Imagebox({
  backdrops,
  index,
  setIndex,
  setShowPicModal,
  profiles
}) {
  const backDrops = backdrops?.slice(0, 25).map((u) => u.file_path);
  const imgSlides = profiles?.map((u) => u.file_path)



  const prevSlide = () => {
    backdrops
    ? setIndex(index === 1 ? backdrops.length : (prev) => prev - 1)
    : setIndex(index === 1 ? profiles.length : (prev) => prev - 1)
  }

  const nextSlide = () => {
    backdrops
    ? setIndex(index === backdrops.length ? 1 : (prev) => prev + 1)
    : setIndex(index === profiles.length ? 1 : (prev) => prev - 1)
  }

  return (
    <div className="modalbox">
      <div className="backdrop" />
      <div className="text-white bg-transparent p-3 rounded-3 contentbox">
        <div className="d-flex justify-content-end">
          <AiOutlineClose
            size="1.8rem"
            className="text-white mt-2"
            style={{ cursor: "pointer" }}
            onClick={() => setShowPicModal(false)}
          />
        </div>
        <div className="position-relative mt-3">
          <div className="d-flex w-100 justify-content-between position-absolute top-50">
            <IoMdArrowDropleftCircle
              size="2rem"
              style={{ cursor: "pointer" }}
              onClick={prevSlide}
            />
            <IoMdArrowDroprightCircle
              size="2rem"
              style={{ cursor: "pointer" }}
              onClick={nextSlide}
            />
          </div>
          <div className="text-center">
           {imgSlides && ( <Image
              src={`https://image.tmdb.org/t/p/w500/${imgSlides[index]}`}
              className='personImg rounded-3'
            />
           )}
 {backDrops && (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${backDrops[index]}`}
              className='personImg rounded-3'
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
