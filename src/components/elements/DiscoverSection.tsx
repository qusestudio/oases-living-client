"use client"

import { motion } from "framer-motion"
import React from 'react'
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y:20},
    visible: { opacity: 1 }
}

const DiscoverSection = () => {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once: true, amount: 0.8}}
            variants={containerVariants}
            className="py-12 bg-white mb-16"
        >
            <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <motion.div
                    variants={itemVariants}
                    className={"my-12 text-center"}
                >
                    <h2 className="text-3xl font-semibold leading-tight text-gray-800">
                        Discover
                    </h2>
                    <p
                        className="text-gray-600 font-semibold mb-4"
                    >
                        Find Your Dream Rental Property Today!
                    </p>
                    <p
                        className="text-gray-500 max-w-3xl mx-auto mt-2"
                    >
                        Searching for your dream rental property has never been easier.
                        With our user-friendly search feature, you quickly
                        find the perfect home that meets all your needs.
                        Start your search today and discover your dream rental property!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8  md:grid-cols-3 lg:gap-12 xl:gap-16">
                    {
                        [0,1,2].map((index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}

                            >
                                <DiscoverCard
                                    imageSrc={`/landing-icon-${[
                                        "wand",
                                        "calendar",
                                        "heart",
                                    ][index]}.png`}
                                    title={
                                        [
                                            "Search for Properties",
                                            "Book Your Rental",
                                            "Enjoy Your New Home"
                                        ][index]
                                    }
                                    description={
                                        [
                                            "Browse through our extensive collection of rental properties in your desired location.",
                                            "Once you've found the perfect rental property, easily book it online with just a few clicks.",
                                            "Move into your new rental property and start enjoying your dream home."
                                        ][index]
                                    }
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

const DiscoverCard = ( {
                          imageSrc,
                          title,
                          description,
                      }: {
    imageSrc: string,
    title: string,
    description: string,
} ) => (
    <div className="text-center bg-primary-50 shadow-lg rounded-lg px-4 py-12 md:h-72">
        <div className={"p-[0.6rem] mx-auto w-10 h-10 bg-primary-700 rounded-full mb-4 flex items-center justify-center"}>
            <Image
                src={imageSrc}
                alt={title}
                width={30}
                height={30}
                className={"object-contain"}
            />
        </div>
        <h3 className={"text-xl font-medium mt-4 text-gray-800"}>{title}</h3>
        <p className={"mt-2 text-base text-gray-500"}>{description}</p>
    </div>
)

export default DiscoverSection
