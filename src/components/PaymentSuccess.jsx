import { React, useEffect } from "react";
import FloatNavbar from "./Atoms/FloatNavbar";
import Footer from "./Atoms/Footer";
import Header from "./Atoms/Header";
const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "Astrofeast - Payment Success";
  }, []);
  return (
    <>
      <Header />
      <FloatNavbar />
      <section
        className="lg:px-16 relative font-poppins dark:text-gray-100
dark:bg-slate-900"
      >
        <div
          className="lg:border-x border-black dark:border-slate-300
 lg:pt-10"
        >
          <hr
            className="w-full border-black dark:border-slate-300
 absolute left-0"
          />
          <div className="bg-gray-100 dark:bg-slate-800 h-screen font-poppins">
            <div className="bg-white dark:bg-slate-900 p-6  md:mx-auto">
              {/**SVG for success correct sign*/}
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <div className="text-center">
                <h3 className="md:text-2xl text-base dark:text-gray-100 text-gray-900 font-semibold text-center">
                  Payment Done!
                </h3>
                <p className="text-gray-600 my-2">
                  Thank you for completing your secure online payment.
                </p>
                <p> Have a great day! </p>
                <div className="py-10 text-center">
                  <a
                    href="#"
                    className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                  >
                    GO BACK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="lg:h-0 lg:border-t  border-black dark:border-slate-300
 lg:flex lg:justify-center lg:items-center"
      />
      <section className="lg:px-16 lg:relative dark:bg-slate-900">
        <div
          className="lg:border-x border-black dark:border-slate-300
 pt-12"
        />
      </section>

      <Footer />
    </>
  );
};

export default PaymentSuccess;
