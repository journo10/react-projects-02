import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, club, image, text } = data[index];

  //data'dan gelen indexler bitince sona ve başa dönmesi için,gelen datalar bitince hata veriyor ondan dolayı
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  //next
  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };

  //prev
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };

  //değiştir
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{club}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Değiştir
      </button>
    </article>
  );
};

export default Review;
