/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { features } from "../constant";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter} `}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} max-w-[800px]`}>
        Anda urus bisnisnya, <br className="sm:block hidden" /> kami akan
        menangani urusan keuangan.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Dengan kartu kredit yang tepat, Anda dapat meningkatkan kehidupan
        keuangan Anda dengan membangun kredit, mendapatkan reward, dan menghemat
        uang. Namun, dengan ratusan kartu kredit yang beredar di pasar.
      </p>

      <Button styles="mt-10 rounded-[10px]" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
