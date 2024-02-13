import React from "react";

const PortfolioCard = ({ props }) => {
  return (
    <section className="w-auto h-auto">
      <div className="relative flex w-[350px] flex-col rounded-xl bg-[#ffffff0f] bg-clip-border border shadow-md md:w-[1200px] md:grid md:grid-cols-2">
        <div className="p-3 md:p-3">
          <img
            src={props.img}
            alt=""
            className="inset-0 w-full object-cover object-center relative -mt-9 h-48 overflow-hidden rounded-xl bg-clip-border md:h-auto md:mt-0"
          />
        </div>

        <div className="p-6">
          <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.title}
          </h5>
          <p className="block font-sans text-[17px] leading-7 text-inherit antialiased md:text-[18px]">
            {props.desc}
          </p>
          <a href={props.url} target="_blank">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 mt-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Demo
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
