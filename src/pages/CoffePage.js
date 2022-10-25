import CoffeePageContent from "../components/coffeePageContent/CoffeePageContent";
import CoffeePageHeader from "../components/coffeePageHeader/CoffeePageHeader";
import CoffePageFilters from "../components/coffeePageFilters/CoffePageFilters";
import ItemsCatalog from "../components/itemsCatalog/ItemsCatalog";

function CoffePage() {
  return (
    <>
      <CoffeePageHeader />
      <CoffeePageContent />
      <CoffePageFilters />
      <ItemsCatalog />
    </>
  );
}

export default CoffePage;
