import { Helmet, HelmetProvider } from "react-helmet-async";
import MainPageContent from "../components/mainPageContent/MainPageContent";
import MainPageOurBest from "../components/mainPageOurBest/MainPageOurBest";

function MainPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Coffe House</title>
        </Helmet>
      </HelmetProvider>
      <MainPageContent />
      <MainPageOurBest />
    </>
  );
}

export default MainPage;
