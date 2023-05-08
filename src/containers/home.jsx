import React from "react";
import { Carousel } from "antd";

export default function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="text-purple-500 text-center m-5">Home</h1>
            <Carousel effect="fade">
                <div className="h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-50 text-center leading-[24rem] text-3xl">
          Caroussel 1
                </div>
                <div className="h-96 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-gray-50 text-center leading-[24rem] text-3xl">
          Caroussel 2
                </div>
                <div className="h-96 bg-gradient-to-r from-cyan-500 to-blue-500  text-gray-50 text-center leading-[24rem] text-3xl">
          Caroussel 3
                </div>
            </Carousel>
        </div>
    );
}
