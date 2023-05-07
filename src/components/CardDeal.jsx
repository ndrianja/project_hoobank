import Article from "./Article";
import styles from "../style";
import { articles } from "../constants";

const CardDeal = () => (
  <>
    <div id="actualités" className="w-full flex text-center items-center md:flex-row flex-col relative z-[1] mb-6">
      <h2 className={styles.heading2}>
        Actualités
      </h2>
    </div>
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px" }}>
      {articles.map((article, idxArticle) => <Article key={idxArticle} imgUrl={article.imgUrl} date={article.date} text={article.text} />)}
    </section >
  </>
);

export default CardDeal;
