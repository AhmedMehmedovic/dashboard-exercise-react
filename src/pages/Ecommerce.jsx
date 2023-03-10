import React from "react";
import { Button, EcommerceCards, RevenueCard } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

function Ecommerce() {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$100,2312</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <EcommerceCards />
      </div>
      <RevenueCard />
    </div>
  );
}

export default Ecommerce;
