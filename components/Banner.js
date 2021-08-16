import Image from 'next/image';
import React from 'react';

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]
        xl:h-[400px] 2xl:h-[700px]">
            <Image 
                src="https://studyportals-cdn2.imgix.net/59787f311e70e.jpg" 
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

                <button className="text-purple-500 px-10 py-4 shadow-md
                rounded-full bg-white font-bold my-3 hover:shadow-xl
                active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner;
