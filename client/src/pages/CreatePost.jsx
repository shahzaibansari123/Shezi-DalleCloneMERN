import React, { useState } from "react";

import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";

const CreatePost = () => {
  const naviagte = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", image: "" });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
    
  };
  const handleSurpise = (e) => {
    e.preventDefault()
    setForm({...form, prompt: getRandomPrompt(form.prompt)})

  };

  const handleGenerate = (e) => {};


  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="text-[#0F0F0F] font-bold text-[32px]">Create</h1>
        <p className="text-[#CCC8AA]  text-[18px]  max-w-[500px]">
          Create Something using Gen AI
        </p>
      </div>
      <form className="mt-2 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            type="text"
            labelName="Name"
            name="name"
            value={form.name}
            placeholder="Your Name"
            handleChange={handleChange}
          />
          <FormField
            type="text"
            labelName="Prompt"
            name="prompt"
            value={form.prompt}
            placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
            handleChange={handleChange}
            isSurpriseMe
            handleSurprise={handleSurpise}
          />
        </div>
        <div className=" flex flex-col lg:flex-row  justify-between  ">
          <div className="relative h-52 w-52 my-6 flex justify-center items-center bg-slate-300 ">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="h-full w-full object-contain "
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="h-32 w-32 object-contain "
              />
            )}
            {generatingImage && (
              <div className=" opacity-[0.2] bg-black absolute inset-0 top-0 left-0  right-0  bottom-0 z-1 flex justify-center items-center">
                <Loader />
              </div>
            )}
          </div>
          <div className="flex-[0.85] my-6 text-center flex flex-col gap-3 justify-end ">
            <button onClick={handleGenerate} className="font-inter font-medium text-xs bg-[#31304D] py-2 px-4 rounded-md text-[#B6BBC4] hover:bg-[#B6BBC4] hover:text-[#31304D]">
              {generatingImage ? "Generating..." : "Generate"}
            </button>
            <p className="text-xs w-full">
              Once You have create the image you want, Share it with the others
            </p>
            <button className="font-inter font-medium text-xs bg-[#B6BBC4] py-2 px-4 rounded-md text-[#31304D] hover:bg-[#31304D] hover:text-[#B6BBC4]">
              {isLoading ? "Sharing..." : "Share"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
