import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const DataComponent = ({ data }) => {
  return (
    <div>
      {data.works.map((value) => {
        return (
          <div>
            <h2>{value.cover_id}</h2>
            <h3> {value.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

const Subjects = () => {
  let { subject } = useParams();
  const fetchData = async () => {
    const url = `http://openlibrary.org/subjects/${subject}.json`;
    const response = await axios({
      method: "get",
      url: url,
    });
    return response;
  };
  const { isLoading, data, isError, error } = useQuery(`${subject}`, fetchData);
  return <div>{data ? <DataComponent data={data} /> : ""}</div>;
};

export default Subjects;
