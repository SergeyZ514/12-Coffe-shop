import "./coffeePageContent.scss";
import girl from "../../resources/img/girl.jpg";

function CoffeePageContent() {
  return (
    <section className='coffee-content'>
      <div className='coffee-content__row'>
        <div className='coffee-content__item'>
          <img src={girl} alt='Girl with cup of coffe' />
        </div>
        <div className='coffee-content__item'>
          <h2 className='secondary-title'>About our beans</h2>
          <div className='coffee-content__logo beans-logo'>
            <svg
              width='30'
              height='29'
              viewBox='0 0 30 29'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.38842 26.5504C4.03446 24.1621 4.95551 20.4168 7.7569 17.6151C10.9384 14.4341 15.3369 13.6759 17.5827 15.9214C17.585 15.9242 17.5878 15.9274 17.5912 15.9304C17.1418 17.2383 15.7102 20.0203 11.42 21.5245C7.48939 22.9031 5.9735 25.0955 5.38842 26.5504ZM16.2604 19.5906C15.2344 20.6175 13.776 21.6253 11.7102 22.3503C7.51763 23.8203 6.3463 26.2275 6.01941 27.3931C6.03524 27.4089 6.04803 27.4255 6.06289 27.4401C8.3084 29.6857 12.7075 28.9273 15.8882 25.7464C18.7187 22.9159 19.6292 19.1225 18.2142 16.7383C17.8736 17.5324 17.2812 18.5697 16.2604 19.5906ZM7.58462 9.2452C12.1138 9.6421 14.564 7.69641 15.5119 6.69018C15.5103 6.68618 15.5091 6.68167 15.5079 6.67805C14.387 3.70713 10.0663 2.58599 5.85742 4.17405C2.15073 5.57274 -0.231943 8.60592 0.017895 11.3398C1.15056 10.2555 3.43511 8.88223 7.58462 9.2452ZM9.91687 14.9334C13.6624 13.5205 16.0541 10.4387 15.7471 7.6831C15.1096 8.26655 14.1423 8.96808 12.7917 9.47781C11.4339 9.99005 9.68965 10.3081 7.50891 10.1171C3.08339 9.72905 1.02376 11.4401 0.245256 12.3682C0.253168 12.3888 0.258713 12.4091 0.265885 12.4285C1.38702 15.4002 5.70784 16.5218 9.91687 14.9334ZM23.0248 8.73791C25.7422 5.09207 25.3734 1.9848 25.015 0.649692C25.0109 0.649248 25.0068 0.647695 25.003 0.646808C21.8859 0.0399204 18.6621 3.12782 17.8023 7.54313C17.0451 11.4328 18.3749 15.0528 20.8322 16.2767C20.5046 14.7432 20.5365 12.0782 23.0248 8.73791ZM25.9836 0.971325C26.1453 1.82058 26.2341 3.0121 25.9582 4.42862C25.6811 5.85356 25.0348 7.50468 23.7271 9.26028C21.0722 12.8223 21.446 15.4731 21.8269 16.623C21.8486 16.6275 21.869 16.6331 21.8891 16.6375C25.0065 17.2444 28.2299 14.157 29.0896 9.74125C29.8552 5.81186 28.4892 2.15715 25.9836 0.971325Z'
                fill='black'
              />
            </svg>
          </div>
          <p className='coffee-content__text'>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className='coffee-content__text'>
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoffeePageContent;
