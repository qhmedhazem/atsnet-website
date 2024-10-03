import Image from "next/image";

const Overview = () => {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="max-w-3xl flex flex-col justify-center items-center gap-16">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            Training the Future of Nuclear Energy
          </h1>
          <p className="text-lg">
            El-Dabaa Nuclear School is a premier institution dedicated to
            educating and training the next generation of nuclear engineers and
            scientists. We are proud to be a key component of Egypt&apos;s
            ambitious nuclear energy program. Our curriculum is designed to
            provide students with a comprehensive understanding of nuclear
            technology, safety protocols, and technical departments. By
            fostering a culture of innovation and excellence, we are preparing
            our graduates to play a vital role in shaping the future of
            sustainable energy.
          </p>
        </div>
        <div className="w-full gap-8 flex flex-col md:flex-row justify-around items-center">
          <Image
            src="/MOE.png"
            alt="Ministry of Education"
            width={192}
            height={192}
          />
          <Image
            src="/NPPA.png"
            alt="Nuclear Power Plants Authority"
            width={192}
            height={192}
          />
          <Image
            src="/brand.png"
            alt="Advanced Technology School for Nuclear Energy"
            width={192}
            height={192}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
