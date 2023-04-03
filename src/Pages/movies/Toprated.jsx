import React from 'react'
import Spinner from '../../Utils/Spinner'
import { PageLayout } from '../../components'
import {Mediacard} from '../../components'
import useFetchData from '../../Hooks/useFetchData'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'

export default function Toprated() {
const { error, data, setPage, newData} = useFetchData('movie/top_rated')
const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);

function fetchMore() {
  setTimeout(() => {
    setPage((prev) => prev + 1);
    setIsFetching(false);
  }, 3000);
}


if(!data) return <Spinner/>



  return (
   <PageLayout heading='Top Rated' error={error}>
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