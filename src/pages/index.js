import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LogoPR from "images/logo.svg";
import Header from "components/Header";
import DecorIntersect from "images/decor-intersect.svg";
import DecorTextUnderline from "images/text-decor.svg";
import HeroImage from "../../public/images/hero-traveller.png";
import DecorPlus1 from "images/decor-category.svg";

export default function Home() {
  return (
    <div className="">
      {/* Meta Head */}
      <Head>
        <title>Pedagang Remote Website</title>
        <meta name="description" content="Pedagang Remote Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
          <DecorIntersect className="fill-accent-4" />
        </span>
        {/* Decor Blurred Light Top Left Hero */}
        <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {/* Left Hero */}
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
                Best destinations around the world
              </h1>
              <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
                Travel, {"  "}
                <span className="relative">
                  enjoy
                  <span className="absolute left-0 top-full -mt-8 -ml-4 -z-10">
                    <DecorTextUnderline className="w-[385px] h-[12px] fill-accent-2" />
                  </span>
                </span>{" "}
                and live a new and full life!
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="flex">
                <Link href="" legacyBehavior>
                  <a className="mr-11 bg-accent-1 shadow-accent-1/25 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl">
                    Find out more
                  </a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                    <span class="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>
            {/* Right Hero */}
            <div className="w-7/12 pt-52">
              <div className="relative z-20 transform -translate-x-16">
                <Image
                  width="100%"
                  height="100%"
                  src={HeroImage}
                  alt="Hero Image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-10 -top-10">
            <DecorPlus1 className="decor-plus-style-1"></DecorPlus1>
          </div>
          <div className="text-center flex flex-col mb-16">
            <h3 className="uppercase text-lg mb-2 text-gray-500">Category</h3>
            <h3 className="font-serif text-4xl leading-snug text-gray-900">
              We Offer Best Services
            </h3>
          </div>
          <div className="flex text-gray-900">
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2">
                    <Image
                      alt="Category Weather"
                      width={60}
                      height={60}
                      src="/images/category-weather.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
