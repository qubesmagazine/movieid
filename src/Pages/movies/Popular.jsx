import React from 'react'
import { PageLayout } from '../../components'
import useFetchData from '../../Hooks/useFetchData'
import Spinner from '../../Utils/Spinner'
import Mediacard from '../../components/MediaCard'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'


export default function Popular() {

    const {error, data, newData, setPage} = useFetchData('movie/popular')
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsFetching(false);
    }, 3000);
  }


    if(!data) return <Spinner/>
  return (
          <PageLayout error={error} heading='Popular'>
        <Row className='gy-2'>
            {[...newData, ...data].map((movie) => (
              <Col key={movie.id} xs={6} md={3} xl={2}>
                <Mediacard {...movie} />
                </Col>
            ))}
        </Row>
        {isFetching && <Spinner />}
          </PageLayout>
  )
}