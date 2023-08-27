import Image from "next/image";

const LandingPage = () => {
  return (
    <div id="home">
      <div
        className="h-screen overflow-hidden relative -z-10 bg-[url(https://user-images.githubusercontent.com/10141928/147430937-dc4f7649-2190-4568-b503-1ead665c1c5c.jpeg)] bg-cover bg-top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="bg-primary-bg opacity-30 h-full w-full"></div>
        <div className=" w-full flex flex-col items-center absolute bottom-0 text-white text-center font-semibold">
          <div
            className=" flex flex-col  w-full  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/assets/icons/gelombang.svg"
              alt="Hero image"
              width={500}
              height={50}
              layout="responsive"
              className="w-full"
            />
            <div className="bg-primary-bg px-6 gap-3 pb-14 md:pb-6 py-6 ">
              <div className="flex flex-col font-clicker_script text-2xl">
                <span>Dear Mr/Mrs/Ms,</span>
                <span>Family & Friends</span>
              </div>
              {/* <div> */}
              <p className="max-sm:text-xs text-sm font-jost">
                We are pleased to announce and invite you to our wedding. We
                sincerely hope that you will be able to attend and pray directly
                on our wedding day. Your presence will mean a lot to us.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen overflow-hidden ">
        <Image
          src="/assets/images/hero_1.png"
          alt="Hero image"
          width={500}
          height={500}
          layout="cover"
          className="object-cover w-full h-full"
        />
      </div> */}
    </div>
  );
};

export default LandingPage;
