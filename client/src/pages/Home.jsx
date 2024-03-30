import React, { useState } from "react";

import { Loader, Card, FormField } from "../components";

const RenderCards = ({ title, data }) => {
  if (data?.length > 0)
    return data?.map((post) => <Card key={post?._id} {...post} />);

  return <h1 className="mt-5 font-bold text-[#12486B] uppercase  ">{title}</h1>;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("Shahzaib");

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-[#0F0F0F] font-bold text-[32px]">
          Have Fun With AI
        </h1>
        <p className="text-[#CCC8AA]  text-[18px] mt-2 max-w-[500px]">
          Here are some already design AI Images for you
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h1 className="font-medium text-xl mb-3 text-[#0F0F0F]">
                Showing Results for{" "}
                <span className=" text-[#12486B] font-extrabold">
                  {searchText}
                </span>
              </h1>
            )}

            <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {searchText ? (
                <RenderCards data={[]} title={`No Search Result Found`} />
              ) : (
                <RenderCards date={[]} title={"No Post Found"} />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
