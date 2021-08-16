import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer left-12 mr-20 -mt-20">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className="absolute top-44 left-12">
                <h3 className="text-white text-4xl mb-3 w-64">{title}</h3>
                <p className="text-white">{description}</p>

                <button className="text-sm text-white rounded-lg mt-5 px-4 py-2
                bg-gray-900">{buttonText}</button>
            </div>
            
        </section>
    )
}

export default LargeCard;
