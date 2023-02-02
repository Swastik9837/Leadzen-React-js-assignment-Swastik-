import React, { useState, useEffect } from "react";
import Follower from "./Follower.js";
import { useFetch } from "./useFetch";
import "bootstrap/dist/css/bootstrap.min.css";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <>
      <main>
        <div className="section-title">
          <h1>{loading ? "loading..." : "assignment"}</h1>
          <div className="underline"></div>
        </div>
        <section >
          <div>
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={prevPage}>
                <AiOutlineLeft />
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handlePage(index)}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="prev-btn" onClick={nextPage}>
                <AiOutlineRight />
              </button>
            </div>
            
          )}
          
        </section>
      </main>
     
    </>
  );
}

export default App;
