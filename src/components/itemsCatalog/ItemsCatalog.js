import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee, filteredCoffeeItems } from "../../reducers/coffeeSlice";
import { Link } from "react-router-dom";
import ItemsSpinner from "../itemsSpinner/itemsSpinner";
import "./itemsCatalog.scss";

function ItemsCatalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coffeeList = useSelector(filteredCoffeeItems);

  const coffeeLoadingStatus = useSelector(
    (state) => state.coffee.coffeeLoadingStatus
  );

  if (coffeeLoadingStatus === "loading") {
    return <ItemsSpinner />;
  } else if (coffeeLoadingStatus === "error") {
    return <h5 className='secondary-title'>Loading error</h5>;
  }

  const renderItems = (arr) => {
    if (arr.length === 0) {
      return <h5 className='secondary-title'>No coffee found</h5>;
    }

    return arr.map(({ id, name, thumbnail, origin, price, weight }) => {
      return (
        <li key={id} className='items-catalog__item'>
          <Link to={`/${id}`}>
            <img src={thumbnail} alt={`${name} ${weight}`} />
            <span className='items-catalog__item-name'>
              {`${name} ${weight}`}
            </span>
            <span className='items-catalog__item-origin'>{origin}</span>
            <div className='items-catalog__item-price'>{price}$</div>
          </Link>
        </li>
      );
    });
  };

  const elements = renderItems(coffeeList);

  return <ul className='items-catalog'>{elements}</ul>;
}

export default ItemsCatalog;
