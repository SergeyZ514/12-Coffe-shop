import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Page404.scss";
import coffee404 from "../../resources/img/404.webp";

function Page404() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name='description' content='Page no found' />
          <title>Page no found</title>
        </Helmet>
      </HelmetProvider>

      <div className='not-found__header'>
        <h1 className='main-title'>Page not found</h1>
      </div>
      <div className='not-found'>
        <div className='not-found__row'>
          <p>Time for error 404</p>
          <img src={coffee404} alt='Coffee not found' />
        </div>
        <Link className='not-found__link' to={"/"}>
          Back to main page
        </Link>
      </div>
    </>
  );
}

export default Page404;
