import { useState, useEffect } from "react";
import { BASE_URL } from "../API/config";
import { API_KEY } from "../API/config";
import axios from "axios";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/${url}?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        const movieList = response.data.results;
        setGenres(response.data.genres);
        setData(movieList);
        setNewData([...newData, ...data]);
      } catch (err) {
        console.log(err);
        setError(err);
      } 
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, page]);

  return { data, error, genres, setPage, newData };
}
