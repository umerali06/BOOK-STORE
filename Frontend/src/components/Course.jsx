import { useNavigate } from "react-router-dom";
// import list from "../../public/list.json";
import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

export const Course = () => {
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

  const history = useNavigate();
  const handleBack = () => {
    history(-1);
  };
  return (
    <div className="max-w-screen-2xl min-h-screen container mx-auto md:px-20 px-4">
      <div className="pt-32 text-center space-y-10">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We are delighed to have you
          <span className="text-pink-500"> here! :</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero
          totam voluptatum deleniti fugiat commodi, molestias tempore inventore
          eum a optio. Dolores perspiciatis magnam totam quia quis ut ullam
          quaerat sint, maxime architecto repudiandae cupiditate molestiae harum
          ipsum, veniam sequi? Voluptates eveniet officia sequi nostrum!
        </p>
        <button className="btn btn-secondary px-6" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10 gap-4">
        {book.map((item) => {
          console.log(item.prize);
          return <Cards item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
