import React, { useState } from "react";
import Image from "next/image";
import Button from "../../button";
import TypeWriterText from "./global/TypeWriterText";

export default function BlackShadeSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?cs=srgb&dl=pexels-suraphat-933624.jpg&fm=jpg",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
        "https://media.gettyimages.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=612x612&w=gi&k=20&c=XECxERUEpTd5pgwiILCewEs6V79C32zXT6QgcnJocb8=",
        "https://images.unsplash.com/photo-1504159506876-f8338247a14a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    ];

    const dynamicMessages = [
        "No Amount Is Too Small to Change a Life",
        "Every Gift Matters, No Matter the Size",
        "Small Acts of Kindness Create Big Impacts",
        "Your Generosity, Big or Small, Fuels Change",
        "Together, Every Donation Counts",
        "Even the Smallest Contribution Brings Hope",
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[89vh]">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-500"
                        }`}
                    />
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                </span>
            </button>
            <button
                onClick={handleNext}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9l4-4-4-4"
                        />
                    </svg>
                </span>
            </button>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-9 sm:gap-8 bg-black bg-opacity-50 py-4">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-white text-center max-w-3xl">
                    <TypeWriterText text=  {dynamicMessages[currentIndex]} speed='40' />
                   
                </h1>
                <h5 className="text-lg text-white text-center max-w-2xl max-[445px]:px-3">
                    Real transformation occurs when individuals unite, pooling
                    their efforts and resources, to drive meaningful change.
                </h5>
                <div className="w-full flex flex-row flex-nowrap justify-center item-center gap-10">
                    <Button
                        href="/donate_now"
                        text="Donate Now"
                        color="red-600"
                        className="max-[445px]:scale-125 sm:scale-110"
                    />
                    <Button
                        href="/contact_us"
                        text="Contact Us"
                        color="yellow-600"
                        className="max-[445px]:scale-125 sm:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}
