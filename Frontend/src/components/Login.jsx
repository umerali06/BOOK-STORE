/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
      // console.log(data);
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").style.display = "none";

          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 1500);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        toast.error(
          "Error: " + (error.response?.data.message || error.message)
        );
      });
  };

  const navigate = useNavigate();

  const handleClose = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close(); // Close the modal
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <div className="dark:text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-800 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
            >
              ✕
            </button>

            <h3 className="font-bold text-2xl mb-8 ">Login</h3>
            <div className="space-y-1 my-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="outline-none focus:border w-[70%] px-4 py-2 rounded-sm dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 my-4">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="outline-none focus:border w-[70%] px-4 py-2 rounded-sm dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  className="bg-pink-500 px-4 py-2 rounded-md text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <div className="flex justify-between items-center gap-4">
                  <h3>Not Register</h3>{" "}
                  <Link to="/SignUp" className="underline text-blue-500">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
