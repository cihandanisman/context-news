import React, { useState, useEffect } from "react";
import CardNews from "./CardNews";

const News = () => {
  const [news, setNews] = useState([]);

  const getData = async () => {
    var url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f8957fc6673494ca93b331081f49e73";

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed!!!");
      } else {
        const data = await res.json();
        console.log(data);
        setNews((prevNews) => [...prevNews, ...data.articles]);

        
        
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center card-container">
      {news.map((item,i) =>
       (item.title !== "[Removed]" && item.urlToImage !== null && item.author !== null &&
        <CardNews key={i} item={item} />
      ))}
    </div>
    

  );
};

export default News;
