import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import Spinner from "../spinner/Spinner";
import "./app.scss";

const MainPage = lazy(() => import("../../pages/MainPage"));
const CoffePage = lazy(() => import("../../pages/CoffePage"));
const GoodsPage = lazy(() => import("../../pages/GoodsPage"));
const Page404 = lazy(() => import("../../pages/page404/Page404"));
const SinglePage = lazy(() => import("../../pages/singlePage/SinglePage"));

function App() {
  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/coffee' element={<CoffePage />} />
              <Route path='/goods' element={<GoodsPage />} />
              <Route path='/:id' element={<SinglePage />} />
              <Route path={"*"} element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
