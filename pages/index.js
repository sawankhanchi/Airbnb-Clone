import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import imageApi1 from '../components/imageApi1';
import imageApi2 from '../components/imageApi2';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <h1>Lets build Airbnb</h1> */}

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 ">
        <section className="pt-5">
          <h2 className="text-4xl text-gray-900 font-semibold pb-5
          px-12">Explore nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {/* { exploreData && exploreData?.map(item => {
            <h1>{item.name}</h1>
          })} */}

          {/* {exploreData.name}
          <br />
          {exploreData.age} */}

          <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 px-12">
            {imageApi1?.map(({img, distance, location}) =>
              <SmallCard 
                key={img} 
                img={img} 
                distance={distance} 
                location={location}
              />
            )}
          </div>
        </section>

        <section className="text-4xl font-semibold py-8 mr-9">
          <h2 className="text-gray-900 px-12">Live anywhere</h2>

          <div className="flex space-x-3 overflow-scroll
          scrollbar-hide p-12">
            {imageApi2?.map(({img, title}) =>
              <MediumCard 
                key={img} 
                img={img} 
                title={title}
              />
            )}
          </div>
        </section>

        <LargeCard
          img="https://kuknus.com/wp-content/uploads/2020/03/why-study-abroad.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn more"
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://api.agify.io/?name=bella`)
  .then(res => res.json()
  );

  const cardsData = await fetch(`https://api.agify.io/?name=bella`)
  .then(res => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

