import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../Utils/Constant";
import useFetchData from "../Hooks/useFetchData";
import Spinner from "../Utils/Spinner";

export default function Sidebar({ setShowMenu }) {
  const { error, genres } = useFetchData("genre/movie/list");
  if (!genres) return <Spinner />;

  return (
    <div className="d-flex flex-column gap-2 px-lg-2 mt-lg-5 py-4 w-100">
      <h1 className="text-secondary fs-6 mt-2 mb-1 mb-lg-2 px-2">Discover</h1>
      {categories.map((category, index) => (
        <NavLink
          to={`/${category.href}`}
          key={index}
          className={({ isActive }) =>
            isActive ? "text-warning" : "text-white"
          }
          onClick={() => setShowMenu(false)}
        >
          <div className="d-flex gap-2 align-items-center py-1 menu">
            <div style={{ fontSize: "1.3rem" }}>{category.icon}</div>
            <span title={category.name}>{category.name}</span>
          </div>
        </NavLink>
      ))}
      <hr className="text-white " />
      <h1 className="text-secondary fs-6 mt-1 mt-lg-2 mb-1 px-2">
        Movie Genre
      </h1>
      {error && <p className="text-white mt-2 fs-5">{error.message}</p>}
      {genres.map((genre) => (
        <div key={genre.id} className="mb-0">
          <NavLink
            to={`/movies/genres/${genre.id}`}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-white"
            }
            onClick={( ) => setShowMenu(false)}
          >
            <p className="mb-0 small menu">{genre.name}</p>
          </NavLink>
        </div>
      ))}
      <p className="small text-white px-2"> Copyright TMDB 2023</p>
         
    </div>
  );
}
