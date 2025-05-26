import React from "react";

export const MoreThanFiveYearsByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="flex items-start">
                <div className="w-px h-16 bg-[#c91430] rounded-xl mr-6 mt-8 hidden md:block" />
                <div className="font-['Baloo_Bhaina_2',Helvetica] text-4xl md:text-5xl leading-tight">
                  <span className="text-[#848484]">More than </span>
                  <span className="text-[#c91430]">
                    ten years of experience
                  </span>
                  <span className="text-[#848484]">
                    {" "}
                    in this area, and we achieve our success through close
                    cooperation{" "}
                  </span>
                  <span className="text-[#fffcf5]">
                    with credible and powerful
                  </span>
                  <span className="text-[#848484]">
                    {" "}
                    manufacturing companies that allow us to pursue the
                    industrialization process directly
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto object-contain"
              alt="Experience illustration"
              src="/-10.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
