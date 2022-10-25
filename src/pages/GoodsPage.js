import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeFilterChange } from "../reducers/coffeeFiltersSlice";
import GoodsPageHeader from "../components/goodsPageHeader/GoodsPageHeader";
import GoodsPageContent from "../components/goodsPageContent/GoodsPageContent";
import ItemsCatalog from "../components/itemsCatalog/ItemsCatalog";

function GoodsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeFilterChange("all"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GoodsPageHeader />
      <GoodsPageContent />
      <ItemsCatalog />
    </>
  );
}

export default GoodsPage;
