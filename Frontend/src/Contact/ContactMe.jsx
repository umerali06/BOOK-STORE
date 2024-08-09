import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const ContactMe = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <div className="h-[1px] w-full dark:bg-slate-800 bg-slate-200 mt-10"></div>
      <Footer />
    </>
  );
};
