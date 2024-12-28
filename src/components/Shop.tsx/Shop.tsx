import { X } from "lucide-react";
import { articlesType } from "../Main/articles/utilities";
import { useDispatch, useSelector } from "react-redux";
import { articleType, shopType } from "../../reducers/root";
import { toggleShopMenu } from "../../reducers/ShopReducer";
const Shop = () => {
  const shopShow = useSelector((state: shopType) => state.shop);
  const dispatch = useDispatch();
  const articles = useSelector<{ article: articlesType[] }>(
    (state: articleType) => state.article
  ) as articlesType[];

  const toggleShopVisibility = () => {
    dispatch(toggleShopMenu());
  };
  const total = () => {
    let total = 0;
    if (articles.length > 0) {
       total = articles
        .map((item) => item.prix * item.number!)
        .reduce((sum = 0, current) => {
          return sum + current;
        });
      }
      return total;
  };

  return (
    <div
      className={`shop absolute bg-slate-700 bg-opacity-40 backdrop-blur-sm z-10 top-28 left-0 w-full transform duration-150 ${
        shopShow ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="shop-items absolute  right-0 top-0 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="p-4 flex justify-between w-80 items-center">
            <h1>Shopping Cart</h1>
            <button
              onClick={toggleShopVisibility}
              aria-label="Close shopping cart"
            >
              <X className="bg-green-700 text-white rounded-sm" size={25} />
            </button>
          </div>
          <hr className="my-0" />
          <div className="p-4 pb-0">
            {articles.length > 0 ? (
              <ul>
                {articles.map((item: articlesType,index) => (
                  <div key={item.nom} >
                  <li className="flex  items-center gap-5 mb-4 justify-between">
                   <img src={item.img} className="w-14 aspect-square rounded-md" /> 
                   <p className="me-auto ">X{item.number} {item.nom} </p>
                   <p>${item.prix.toFixed(2)}</p>
                  </li>
                  {index < articles.length - 1 && <hr className="mb-4" /> }
                  </div>
                ))}
              </ul>
            ) : (
              <p className="mb-4">Your cart is empty.</p>
            )}
          </div>
          <hr className="border-2" />
          <div className="p-4">
            <h1 className="font-semibold tracking-wider">
              Total : <span className="font-bold">{total()}$</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
