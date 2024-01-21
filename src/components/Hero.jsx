import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="diskon" className="h-[32px] w-[32px] " />
          <p className={`${styles.paragraph}`}>
            Diskon <span className="text-white font-medium">20% </span>
            untuk akun <span className="text-white font-medium">1 bulan</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] text-white ">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[63px] w-full ss:leading-[100px] leading-[75px] text-[52px] text-white ">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Tim ahli kami menggunakan suatu metodologi untuk mengidentifikasi
          kartu kredit yang kemungkinan besar sesuai dengan kebutuhan Anda. Kami
          meneliti tingkat persentase tahunan, biaya tahunan.
        </p>
      </div>

      <div
        className={`relative flex-1 flex ${styles.flexCenter} md:my-0 my-10`}
      >
        <img
          src={robot}
          alt="billing"
          className="h-[100%] w-[100%] relative z-[5] "
        />

        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-0 w-[50%] h-[50%] bottom-20 right-20 blue__gradient "></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
