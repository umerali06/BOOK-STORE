/* eslint-disable react/prop-types */

export const Cards = ({ item }) => {
  return (
    <div className="card flex flex-col bg-base-100 max-w-96 shadow-xl h-[440px] mx-2 hover:scale-105 duration-150 transition-all">
      <div className="flex-grow flex-shrink relative overflow-hidden rounded-md dark:bg-slate-800 dark:text-white">
        <figure className=" flex-grow flex-shrink-0">
          <img src={item.image} alt="Shoes" className="h-full w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-outline ">{item.prize}</div>
            <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200 cursor-pointer float-">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
