import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <>
            <section className="py-20 px-24 bg-black bg-opacity-30">
                <div className="container ">
                    <div
                        className="relative z-10 overflow-hidden rounded py-12 px-8"
                    >
                        <div className="flex">
                            <div className="w-full">
                                <h2 className=" text-3xl font-bold leading-tight text-white text-[38px] cursor-default">
                                    Try Natiq right now
                                </h2>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-end">
                                    <Link
                                        to="/natiq"
                                        className="my-1 cursor-pointer  rounded bg-white py-4 px-6 text-base font-medium text-black hover:bg-opacity-80"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
