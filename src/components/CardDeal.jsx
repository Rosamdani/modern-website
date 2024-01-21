import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Temukan penawaran kartu terbaik dengan mudah.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dapatkan penawaran kartu terbaik dengan langkah-langkah mudah. Pilih
          kartu dengan manfaat optimal, tingkat bunga bersaing, dan kelola
          keuangan Anda dengan lebih efisien untuk pengalaman finansial yang
          lebih baik.
        </p>
        <Button styles="mt-10 rounded-[10px]" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  );
};

export default CardDeal;
