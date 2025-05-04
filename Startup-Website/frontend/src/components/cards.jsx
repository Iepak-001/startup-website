import React from "react";

export const Card = ({ heading, subheading, imageurl }) => {
  return (
    <div
      className="h-60 w-80  shrink-0 border-amber-200 border-4 flex flex-col items-center justify-center text-center rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${imageurl})` }}
    >
      <div className="w-full mt-auto p-2 rounded-b-lg bg-white/50 backdrop-blur-md">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="text-sm">{subheading}</p>
      </div>
      
    </div>
  );
};
