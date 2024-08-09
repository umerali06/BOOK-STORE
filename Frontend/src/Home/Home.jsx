import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { FreeCourses } from "../components/FreeCourses";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeCourses />
      <Footer />
    </>
  );
};
