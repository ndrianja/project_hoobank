import Article from "./Article";
import styles from "../style";

const CardDeal = () => (
  <>
    <div id="actualités" className="w-full flex text-center items-center md:flex-row flex-col relative z-[1] mb-6">
      <h2 className={styles.heading2}>
        Actualités
      </h2>
    </div>
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px" }}>
      <Article imgUrl="/src/assets/IAbg.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      <Article imgUrl="/src/assets/IAbg.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      <Article imgUrl="/src/assets/IAbg.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
    </section >
  </>
);

export default CardDeal;
