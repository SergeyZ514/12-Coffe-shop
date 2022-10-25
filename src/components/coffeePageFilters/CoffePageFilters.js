/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilters,
  activeFilterChange,
  searchInputChange,
  selectAll,
} from "../../reducers/coffeeFiltersSlice";
import classNames from "classnames";
import ItemsSpinner from "../itemsSpinner/itemsSpinner";
import store from "../../store/";
import "./coffePageFilters.scss";

function CoffePageFilters() {
  const { filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state.filters
  );
  const filters = selectAll(store.getState());
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const changeFilter = (filter) => {
    if (filter === activeFilter) {
      dispatch(activeFilterChange("all"));
    } else {
      dispatch(activeFilterChange(filter));
    }
  };

  const handleInputChange = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(searchInputChange(searchValue)),
      500
    );
    return () => clearTimeout(timer);
  }, [searchValue]);

  if (filtersLoadingStatus === "loading") {
    return <ItemsSpinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className='secondary-title'>Loading error</h5>;
  }

  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h5 className='secondary-title'>Filters not found</h5>;
    }

    return arr.map(({ id, name }) => {
      const btnClass = classNames("coffee-filters__button", {
        "coffee-filters__button_active": name === activeFilter,
      });

      return (
        <button
          key={id}
          className={btnClass}
          onClick={() => changeFilter(name)}
        >
          {name}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);

  return (
    <>
      <section className='coffee-filters'>
        <div className='coffee-filters__filters-row'>
          <div className='coffee-filters__input'>
            <label>
              Looking for
              <input
                type='text'
                placeholder='start typing here...'
                value={searchValue}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>
          <div>Or filter{elements}</div>
        </div>
      </section>
    </>
  );
}

export const { changeFilter } = CoffePageFilters;

export default CoffePageFilters;
