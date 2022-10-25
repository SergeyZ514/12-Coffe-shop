import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
      <HelmetProvider>
        <Helmet>
          <meta name='description' content='All coffee in our store' />
          <title>For your pleasure</title>
        </Helmet>
      </HelmetProvider>
      <GoodsPageHeader />
      <GoodsPageContent />
      <ItemsCatalog />
    </>
  );
}

export default GoodsPage;
