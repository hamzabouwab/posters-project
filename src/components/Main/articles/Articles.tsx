import Card from "./Card";
import { articles } from "./utilities";
function Articles() {

  return (
    <section className="articles">
      <div className="container">
        <div className="articles-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 text-start">
          {articles.map((item,index) => {
            return <Card key={index} img={item.img!} prix={item.prix} poster={item.nom} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Articles;
