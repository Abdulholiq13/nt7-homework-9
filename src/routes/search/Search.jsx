import { useSearchParams } from "react-router-dom";
import { useSearchRequestQuery } from "../../redux/api/searchApi";
import Products from "../../components/products/Products";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { data, isFetching } = useSearchRequestQuery({
    q: searchParams.get("q"),
  });

  return (
    <div>
      {isFetching ? (
        <p>loadig...</p>
      ) : data.payload.length === 0 ? (
        <p className="text-center text-[30px] from-neutral-600 font-[700] mt-[100px]">No Results!</p>
      ) : (
        <Products data={data.payload} />
      )}
    </div>
  );
};

export default Search;
