import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsfetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return 
    callback()
  }, [callback, isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight
    )
      return setIsfetching(true);
  }
  return [isFetching, setIsfetching];
};

export default useInfiniteScroll;
