import banner from "/Banner.png";

export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 grid md:grid-cols-2 grid-cols-1 md:pt-32 pt-12 gap-8 my-10">
        <div className="order-2 md:order-1">
          <div className="space-y-9">
            <h1 className="text-responsive font-bold">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>
            <p className="text-responsive-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              dignissimos sapiente earum at laborum molestiae. Dicta fugiat
              architecto quibusdam atque.
            </p>

            {/* input field */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>

          {/* button field */}
          <button className="btn btn-secondary mt-4">Secondary</button>
        </div>
        <div className="order-1 md:order-2 mx-auto md:mx-0 my-auto">
          <img src={banner} alt="" className="w-90 h-90" />
        </div>
      </div>
    </>
  );
};
