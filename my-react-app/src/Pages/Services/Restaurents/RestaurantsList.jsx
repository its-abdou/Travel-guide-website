import React, { useState, useEffect } from "react";
import Map from "../../Components/Map";
import Lists from "../../Components/Lists";
import useFetch from "../../Components/useFetch";
import Pagination from "../../Components/Pagination";
import FilterAside from "../../Components/FilterAside"; // Import the new filter component
import "../../../assets/css/ListsPage.css";

const RestaurantsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [selectedStars, setSelectedStars] = useState([]);

  const {
    error,
    isPending,
    data: restaurants,
  } = useFetch("http://localhost:3001/restaurants");

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when filters change
  }, [selectedStars]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let filteredRestaurants = restaurants || [];
  if (selectedStars.length > 0) {
    filteredRestaurants = filteredRestaurants.filter((restaurant) =>
      selectedStars.includes(Math.floor(restaurant.rating))
    );
  }

  const currentPosts = filteredRestaurants.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container1">
      <div className="wrapper1">
        <div className="list-container1">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {restaurants && (
            <Lists
              items={currentPosts}
              title="Discover the best places to eat"
              subtitle="24+ Options"
              itemType="cuisine"
            />
          )}
        </div>
        <aside>
          <Map url={"https://tinyurl.com/6upr8ejy"} list_name={"Restaurants"} />
          <FilterAside
            selectedStars={selectedStars}
            setSelectedStars={setSelectedStars}
          />
        </aside>
      </div>
      {filteredRestaurants.length > 0 && (
        <Pagination
          totalPosts={filteredRestaurants.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default RestaurantsList;
