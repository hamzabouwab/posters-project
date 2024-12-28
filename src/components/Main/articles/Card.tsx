import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../reducers/ArticlesSlice";
function Card({

  img,
  poster,
  prix,
}: {
  img: string;
  poster: string;
  prix: number;
}) {
  const dispatch = useDispatch()
  const addArticleToCart = ()=>{
    dispatch(addArticle({prix:prix,nom:poster,img:img}))

  }
  return (
    <div className="articles-card">
      <div className="card-header relative w-full bg-emerald-500 aspect-square mb-3">
        <img src={img} alt="" />
        <button className=" bg-green-600 rounded-full border-2 border-white p-2 absolute right-3 top-3 duration-150 opacity-0" onClick={addArticleToCart}>
          <ShoppingBag size={20} className="text-white" />
          <span className="tooltiptext text-[12px] font-semibold w-[80px] py-1 border border-white">Add to cart</span>
        </button>
      </div>
      <div className="card-body">
        <p className="mb-3 text-slate-400">Posters</p>
        <p className="mb-3 font-semibold tracking-wide text-xl capitalize">
          {poster}
        </p>
        <p className="mb-3 font-extrabold tracking-wide">${prix}</p>
      </div>
    </div>
  );
}

export default Card;