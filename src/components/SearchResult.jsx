import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "../Utils/Spinner";
import { API_KEY, BASE_URL } from "../API/config";

const SearchResult = ({ searchQuery, setResultBox }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
 const fetchData = async () => {
     try {
        const response = await axios.get(
          `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${searchQuery}`
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData()
  },2000)
  return () => clearTimeout(delayDebounceFn)
  }, [searchQuery]);

  
  if (!data) return <Spinner />;

  const filteredResults = data?.filter((content) => {
    if (content.media_type == "tv") {
      // eslint-disable-next-line array-callback-return
      return;
    } else {
      return content.title || content.namr;
    }
  });

  return (
    <div
      className="position-absolute top-25 mt-2 text-white py-2 bg-dark searchResult"
      style={{ height: "350px", overflowY: "scroll" }}
    >
      {error && <p className="mt-4 fs-5">{error.message}</p>}
      {filteredResults.length > 0 ? (
        <>
          {filteredResults.map((result) => (
            <Link
              to={result.title ? `/movie/${result.id}` : `/person/${result.id}`}
              onClick={() => setResultBox(false)}
              key={result.id}
            >
              <div className="d-flex align-items-center gap-3 px-3 py-2 mb-0 hover-me">
                <Image
                  src={
                    result.title
                      ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                      : `https://image.tmdb.org/t/p/original/${result.profile_path}`
                  }
                  className="img-fluid rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <p className="text-white fw-bold mb-0 small">
                     {result.title ? result.title : result.name}</p>
                     <p className="text-white fw-bold mb-0 small">
                     {result.title && result.release_date.slice(0, 4)}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <p className="px-4">No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
