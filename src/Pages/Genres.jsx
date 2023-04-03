import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import { API_KEY, BASE_URL } from "../API/config";
import axios from "axios";
import Spinner from "../Utils/Spinner";
import { PageLayout, Mediacard } from "../components";
import { Row, Col } from "react-bootstrap";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";

export default function Genres() {
  const { id } = useParams();
  const [genreList, setGenreList] = useState([])
  const [newGenreList, setNewGenreList] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { genres } = useFetchData("genre/movie/list");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 5000);
  }

  // eslint-disable-next-line eqeqeq
  const filterGenreTitle = genres.filter((genre) => genre.id == id);

  useEffect(() => {
    async function fetchData() {
  
      try {
        const response = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_video=false&page=${page}&with_genres=${id}`
        );
        const movieList = response.data.results;
        setGenreList(movieList);
        setNewGenreList([...newGenreList, ...genreList]);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, page]);


  useEffect(() => {
window.scrollTo({top: '0'})

  }, [id])

  if (!genreList) return <Spinner />;

  return (
    <PageLayout
      error={error}
      heading={`${filterGenreTitle.map((title) => title.name)} Movies`}
    >
      <Row className="gy-2">
        {[...newGenreList, ...genreList].map((movie,index) => (
          <Col xs={6} md={3} xl={2} key={index}>
            <Mediacard {...movie} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner />}
    </PageLayout>
  );
}
