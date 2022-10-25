import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee, selectAll } from "../../reducers/coffeeSlice";
import { Link } from "react-router-dom";
import ItemsSpinner from "../itemsSpinner/itemsSpinner";
import "./mainPageOurBest.scss";

function MainPageOurBest() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bestCoffeeItems = useSelector(selectAll)
    .filter((item) => item.isBest === true)
    .slice(0, 3);

  const coffeeLoadingStatus = useSelector(
    (state) => state.coffee.coffeeLoadingStatus
  );

  if (coffeeLoadingStatus === true) {
    return <ItemsSpinner />;
  } else if (coffeeLoadingStatus === "error") {
    return <h5 className='secondary-title'>Loading error</h5>;
  }

  const renderItems = (arr) => {
    if (arr.length === 0) {
      return <h5 className='secondary-title'>No coffee found</h5>;
    }

    return arr.map(({ id, name, thumbnail, price, weight }) => {
      return (
        <li key={id} className='our-best__item'>
          <Link to={`/${id}`}>
            <img src={thumbnail} alt={`${name} ${weight}`} />
            <span className='our-best__item-name'>{`${name} ${weight}`}</span>
            <div className='our-best__item-price'>{price}$</div>
          </Link>
        </li>
      );
    });
  };

  const elements = renderItems(bestCoffeeItems);

  return (
    <section className='our-best'>
      <h2 className='secondary-title'>Our best</h2>
      <ul className='our-best__row'>{elements}</ul>
    </section>
  );
}

export default MainPageOurBest;
