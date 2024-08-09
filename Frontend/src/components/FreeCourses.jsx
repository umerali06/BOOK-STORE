/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Cards } from "./Cards";
import list from "../../public/list.json";
import { useEffect, useState } from "react";
import axios from "axios";

export const FreeCourses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getBook();
  }, []);

  const FilterData = book.filter((currData) => currData.category === "Free");
  console.log(FilterData);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="text-responsive-xl font-bold">Free Course</h1>
        <p>
          Our free book section features a diverse collection of genres, from
          classic literature to contemporary bestsellers, available at no cost.
        </p>
      </div>
      <div className="py-8 slider-container">
        <Slider {...settings}>
          {FilterData.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
