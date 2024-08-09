/* eslint-disable no-undef */
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div
        id=""
        className="pt-32 text-center space-y-10 grid place-items-center"
      >
        <div className="max-w-[600px] w-full ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-2xl mb-8 ">Contact Us</h3>
            <div className="space-y-1 my-4">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="outline-none focus:border w-[70%] px-4 py-2 rounded-sm"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 my-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="outline-none focus:border w-[70%] px-4 py-2 rounded-sm"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 my-4">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                type=""
                name="textarea"
                placeholder="Enter your message"
                className="outline-none focus:border w-[70%] px-4 py-2 rounded-sm"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button
              className="bg-pink-500 mx-auto py-2 rounded-md text-white w-[70%]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
