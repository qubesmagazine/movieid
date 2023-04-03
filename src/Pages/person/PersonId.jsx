import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import Spinner from "../../Utils/Spinner";
import { BASE_URL, API_KEY } from "../../API/config";
import {
  Imagebox,
  Mediacard,
  PagelayoutId,
  ScrollButtons,
} from "../../components";
import useScroll from "../../Hooks/useScroll";

export default function PersonId() {
  const { person_id } = useParams();
  const [dataId, setDataId] = useState(null);
  const [error, setError] = useState(null);
  const [showPicModal, setShowPicModal] = useState(false);
  const [index, setIndex] = useState(1);
  const { scrollRef, scroll } = useScroll();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/person/${person_id}?api_key=${API_KEY}&append_to_response=images,movie_credits`
        );
        setDataId(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, [person_id]);

  useEffect(() => {
    if (showPicModal) {
      document.body.style.overglow = "hidden";
    } else {
      document.body.style.overglow = "unset";
    }
  }, [showPicModal]);

  useEffect(() => {
    document.title = dataId?.name;
  }, [dataId?.name]);

  if (!dataId) return <Spinner />;

  const {
    name,
    profile_path,
    biography,
    gender,
    birthday,
    place_of_birth,
    images: { profiles },
    movie_credits: { cast },
  } = dataId;

  return (
    <PagelayoutId
      src={`https://image.tmdb.org/t/p/original/${profile_path}`}
      error={error}
    >
      <div className="d-md-flex gap-4">
        <div className="text-center text-md-start mb-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            className="rounded-2 media_poster"
            alt={name}
            title={name}
          />
        </div>
        <div className="text-white">
          <h1 className="fs-4">{name}</h1>
          <h1 className="fs-5">Biography</h1>
          {biography.split("\n\n").map((paragraph, index) => (
            <p key={index}>
              {paragraph
                .split("\n")
                .reduce((total, line) => [total, <br />, line])}
            </p>
          ))}
          <h1 className="fs-5">Personal info</h1>
          <div className="d-flex flex-wrap gap-2">
            <div>
              <p className="text-secondary mb-0 fw-bold">Gender</p>
              <p>{gender === 1 ? "Female" : "Male"}</p>
            </div>
            <div>
              <p className="text-secondary mb-0 fw-bold">Birthday</p>
              <p>{birthday}</p>
            </div>
            <div>
              <p className="text-secondary mb-0 fw-bold">Place of birth</p>
              <p>{place_of_birth}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-white fs-5 mt-3 mb-3">Images</h1>
        <div style={{ position: "relative" }}>
          <div
            className="d-flex scrollbody"
            style={{ overflowX: "scroll", overflowY: 'hidden', width: "100%" }}
            ref={scrollRef}
          >
            {profiles.map((im, index) => (
              <div key={index} className="me-3">
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${im.file_path}`}
                  className="rounded-3"
                  loading="lazy"
                  style={{ width: "180px", height: "200px" }}
                  onClick={() =>{
                    setShowPicModal(true)
                    setIndex(index)
                  }}
                />
              </div>
            ))}
          </div>
          {profiles.length > 8 && <ScrollButtons scroll={scroll}/>}
          {showPicModal && (
          <Imagebox setShowPicModal={setShowPicModal} 
          index={index}
          setIndex={setIndex}
          profiles={profiles}
          />
        )
        }
        </div>
      </div>
      <div className="mt-4">
      <h1 className="text-white fs-5 mt-3 mb-3">Cast</h1>
          {cast.length > 0 ? (
            <Row className="gy-2">
              {cast.map((movie) => (
                <Col xs={6} md={3} xl={2} key={movie.id}>
                  <Mediacard {...movie}/>
                </Col>
              ))}
            </Row>
          ) : (
            <h1 className="text-secondary fs-6 mt-3 mb-3">No movie credit for {name} at the moment</h1>
          )}
      </div>
    </PagelayoutId>
  );
}
