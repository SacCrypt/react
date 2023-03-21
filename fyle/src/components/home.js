import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Radio from "./radio";
import { Link } from "react-router-dom";
import styles from "../static/css/home.module.css";
import { DotLoader } from "react-spinners";

const Home = ({ useQuery }) => {
  const [type, setType] = useState(true);
  const [val, setVal] = useState("");
  const [next, setNext] = useState(1);
  const [search, setSearch] = useState(false);
  const refContainer = useRef(null);
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });
  const fetchData = async () => {
    let url = "https://openlibrary.org/search.json";
    let parameters = {
      limit: 10,
      page: next,
    };
    if (type) {
      delete parameters.author;
      parameters.title = val;
    } else {
      delete parameters.title;
      parameters.author = val;
    }

    const response = await axios.get(url, {
      params: parameters,
    });
    setSearch(true);
    return response;
  };

  const {
    isLoading,
    data,
    isError,
    error,
    refetch,
    isFetching,
    isFetched,
    isRefetching,
  } = useQuery(["Books", next], fetchData, {
    enabled: search,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (refContainer.current) {
      refContainer.current.scrollIntoView();
    }
  }, [isFetched, isRefetching]);

  const handleSearch = (boolean) => {
    if (boolean) {
      setNext(next + 1);
    } else if (next > 1) {
      setNext(next - 1);
    }
  };

  const popular = [
    "JavaScript",
    "Harry Potter",
    "Indian History",
    "Crypto Currency",
    "Criminal law",
  ];

  const override = {
    borderColor: "red",
    marginTop: "2em",
  };
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.logoFlex}>
          <h2> Fyle API </h2>
          <svg width="2em" height="2em" viewBox="0 0 300 300">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Desktop-HD"
                transform="translate(-281.000000, -1765.000000)"
                fillRule="nonzero"
              >
                <g id="Group-13" transform="translate(281.000000, 1765.000000)">
                  <path
                    d="M126.136596,0 L15.6524947,0 C7.00786056,0 0,7.00786056 0,15.6524947 L0,286.347506 C0,294.99214 7.00786056,302.000001 15.6524947,302.000001 L286.347505,302.000001 C294.99214,302.000001 302,294.99214 302,286.347506 L302,15.6524947 C302,7.00786056 294.99214,0 286.347505,0 L243.938215,0 L146.907542,0 L146.907542,6.32172182 C146.907542,7.86999911 146.907542,192.036805 146.907543,194.101175 L146.907542,196.165545 C146.39145,205.971303 143.294895,213.712691 137.359831,219.647755 C125.747749,231.259836 105.62014,232.808114 88.0729949,232.808114 C64.3327392,232.808114 32.3350028,229.711558 26.9160314,204.164979 L26.1418926,197.713822 C25.8838464,196.423591 25.8838464,192.810944 25.8838467,183.521278 C25.8838463,174.747705 25.8838463,162.361485 25.8838465,149.459172 L25.8838466,146.87871 L25.8838463,49.8533162 C25.8838468,43.6602055 27.9482164,38.4992807 32.3350032,34.1124939 C36.7217895,29.7257075 41.8827148,27.6613374 48.075825,27.6613374 L106.136233,27.9193837 L108.200603,28.4354763 L108.200604,45.982622 L108.200603,48.0469919 L106.136233,48.0469924 L103.039678,48.0469919 L95.2982901,48.0469923 L49.8821484,48.0469924 C48.333871,48.0469923 47.5597323,48.8211309 47.5597322,49.853316 C47.5597325,52.9498709 47.5597321,54.4981488 47.5597321,54.4981488 L47.5597321,93.7211803 L89.363226,93.7211801 L91.4275964,93.7211801 L91.4275964,95.7855505 L91.4275964,111.784419 L91.4275964,113.848788 L89.3632265,113.848789 L47.5597325,113.848788 L47.5597324,157.20056 L47.5597321,160.297115 L47.5597324,196.423591 C48.0758249,210.874182 69.4936646,213.712691 87.5569023,213.712691 C95.5563367,213.454645 112.587389,213.454644 120.328777,205.713256 C122.393147,203.648886 124.329087,199.778192 126.136596,194.101175 L126.136596,11.7016417 L126.136596,-4.99600361e-16 Z"
                    id="Logo_square"
                    fill="#FF2E63"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h3>
          The growing source for all the API empowered by the community to
          ensure you will get the most recent data of Books.
        </h3>
        <input
          style={val ? { textIndent: "15%" } : { textIndent: "2%" }}
          placeholder="Search 100M+ Books"
          className={styles.searchField}
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setNext(1);
              refetch();
            }
          }}
        />

        <Radio type={type} setType={setType} />
        <DotLoader
          loading={isLoading || isFetching}
          size={50}
          color={"#FF2E63"}
          cssOverride={override}
        />
      </div>
      <h1 className={styles.title}> Popular Subjects </h1>
      <div className={styles.subjectList}>
        {popular.map((value) => {
          return (
            <div className={styles.individualSubjects}>
              <Link to={`/Subjects/${value}`}> {value} </Link>
            </div>
          );
        })}
      </div>
      {data && data.data.numFound ? (
        <div
          ref={refContainer}
          id="tableContainer"
          className={styles.tableContainer}
        >
          <table className={styles.table}>
            <tbody>
              <tr>
                <th> Title and Sub Title </th>
                <th> Author </th>
                <th> Latest Publish year</th>
                <th> First Publish year</th>
              </tr>

              {data.data.docs.map((inner) => {
                return (
                  <tr>
                    <td>
                      {inner.title
                        ? inner.title.length < 50
                          ? inner.title
                          : inner.title.slice(0, 50) + "..."
                        : "NA"}
                      {inner.subtitle
                        ? inner.subtitle.length < 50
                          ? inner.subtitle
                          : inner.subtitle.slice(0, 50) + "..."
                        : ""}
                    </td>
                    <td> {inner.author_name ? inner.author_name[0] : "NA"}</td>
                    <td> {Math.max.apply(null, inner.publish_year)}</td>
                    <td> {Math.min.apply(null, inner.publish_year)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.traverseHolder}>
            <button
              className={styles.traverse}
              onClick={() => {
                handleSearch(false);
                refetch();
              }}
            >
              Previous
            </button>
            <button
              className={styles.traverse}
              onClick={() => {
                handleSearch(true);
                refetch();
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
