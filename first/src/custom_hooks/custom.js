import { useFetch } from "./useFetch";

const url = "https://api.github.com";
const Ex = () => {
  const { loading, items } = useFetch(url);
  console.log(items);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Ex;
