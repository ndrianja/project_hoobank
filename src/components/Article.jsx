const Article = ({ imgUrl, date, text }) => (
    <div>
        <div className="container_article">
            <div className="article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="article-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>En savoir plus</p>
            </div>
        </div>
    </div>
);

export default Article;
