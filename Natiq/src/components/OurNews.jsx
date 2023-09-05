import React from "react";

const OurNews = () => {
    return (
        <>
            <h2 className="m-8 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What is Natiq?
            </h2>
            <p className="s text-body-color text-3xl">
                Natiq is RDI’s state-of-the-art text-to-speech software, that enables users to convert their Arabic input text into spoken words with different natural voices. This technology is built on Tashkeel, RDI’s Arabic Diacritizer. Tashkeel converts raw Arabic text into diacritized text, so that it can be read out loud as speech with the proper pronunciation. Natiq is an easy-to-use robust software that allows for different users’ preferences, resulting in seamless audio-powered applications that enrich user experiences and engage audiences.
            </p>
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container w-full relative">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Our Recent News
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <NewsCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                        />
                        <NewsCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Y23YC07/image-02.jpg"
                        />
                        <NewsCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurNews;

const NewsCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                        <img src={image} alt="" className="w-full" />
                    </div>
                    <div>
                        {date && (
                            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                {date}
                            </span>
                        )}
                        <h3>
                            <a
                                href="/#"
                                className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="text-base text-body-color">{CardDescription}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
