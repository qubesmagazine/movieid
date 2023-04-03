import React from 'react'
import { PageLayout, Personcard } from '../../components'
import useFetchData from '../../Hooks/useFetchData'
import Spinner from '../../Utils/Spinner'
import { Row, Col } from 'react-bootstrap'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'

export default function Person() {
    const {error, data, setPage, newData} = useFetchData('person/popular')


    const[isFetching, setIsFetching] = useInfiniteScroll(fetchMore)


function fetchMore () {
setTimeout(() => {
setPage((prev) => prev + 1)
setIsFetching(false)

}, 5000)}


    if(!data) return <Spinner/>

  return (
    <PageLayout heading='Trending People' error={error}>
    <Row className='gy-2'>
        {[...newData, ...data].map((person) => (
          <Col key={person.id} xs={6} md={3} xl={2}>
            <Personcard {...person} />
            </Col>
        ))}
    </Row>
    {isFetching && <Spinner />}
      </PageLayout>
  )
}