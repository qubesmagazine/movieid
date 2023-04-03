import React from "react";
import useFetchData from "../Hooks/useFetchData";
import { useEffect } from "react";
import { PageLayout } from "../components";
import Spinner from "../Utils/Spinner";
import { Row, Col } from "react-bootstrap";
import { Mediacard } from "../components";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";

// const Mediacard = lazy(() => import('../components/MediaCard'))

export default function Home() {
  const { error, data, setPage, newData } = useFetchData("trending/movie/week");

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);
  console.log(data);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 5000);
  }

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <PageLayout heading="Trending Movies" error={error}>
      <Row className="gy-2">
        {[...newData, ...data].map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <Mediacard {...movie} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner />}
    </PageLayout>
  );
}
