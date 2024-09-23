import Products from "../../components/products/Products";
import { useGetCarsByQueryQuery } from "../../redux/api/carsApi";

const Home = () => {
  const { data, isFetching } = useGetCarsByQueryQuery();
  return <div className="container mx-auto">{isFetching ? <p>Loading...</p> : <Products data={data.payload} />}</div>;
};

export default Home;
