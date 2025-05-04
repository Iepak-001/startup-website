import React from "react"
const ImageCard=({heading,description, imageurl})=>{
    return (
        <>
            <div className="w-50 h-50 shrink-0 flex flex-col items-center border-1 rounded-xl bg-white shadow-2xl m-4">
                <img src={imageurl} className="h-20 w-20 items-center object-center"  />
                <p className="text-xl font-semibold">{heading}</p>
                <p className="m-4 text-justify">{description}</p>
            </div>
        </>
    )
}
export default ImageCard