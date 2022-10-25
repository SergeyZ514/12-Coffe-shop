import { Helmet, HelmetProvider } from "react-helmet-async";
import CoffeePageContent from "../components/coffeePageContent/CoffeePageContent";
import CoffeePageHeader from "../components/coffeePageHeader/CoffeePageHeader";
import CoffePageFilters from "../components/coffeePageFilters/CoffePageFilters";
import ItemsCatalog from "../components/itemsCatalog/ItemsCatalog";

function CoffePage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Coffee that can be found in our store'
          />
          <title>Our coffee</title>
        </Helmet>
      </HelmetProvider>
      <CoffeePageHeader />
      <CoffeePageContent />
      <CoffePageFilters />
      <ItemsCatalog />
    </>
  );
}

export default CoffePage;
