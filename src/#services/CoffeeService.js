import { useHttp } from "../hooks/http.hook";

const useCoffeeService = () => {
  const { request } = useHttp();

  const _apiBase = "http://localhost:3001/coffee/";

  const getCoffeeItemById = async (id) => {
    const res = await request(`${_apiBase}${id}`);
    return _transformCoffeeItem(res);
  };

  const _transformCoffeeItem = (item) => {
    return {
      id: item.id,
      name: item.name,
      origin: item.origin,
      description: item.description,
      price: item.price,
      full_img: item.full_img,
    };
  };

  return { getCoffeeItemById };
};

export default useCoffeeService;
