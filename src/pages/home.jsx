import React from "react";
import Hero from "../components/hero";
import NewsCard from "../components/newsCard";
import MiniTable from "../components/miniTable";
import MiniMatch from "../components/miniMatch";
import MiniScorers from "../components/miniScorers";

const Home = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="flex">
        {/* Major */}
        <div className="grid grid-col-2 grid-gap-2 rounded-lg w-3/4 m-6">
          <Hero />
          <div className="my-4 bg-gray-100 grid grid-cols-4 gap-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard/>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 my-6 bg-gray-100 w-1/4">
          <MiniMatch />
          <MiniTable />
          <MiniScorers/>
        </div>
      </div>
    </div>
  );
};

export default Home;
