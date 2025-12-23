// import React, { useEffect, useState } from "react"
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     props.setProgress(10);
//     // Note: We use props.apiKey which is passed from App.jsx (import.meta.env.VITE_NEWS_API)
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);

//     setArticles(parsedData.articles || []);
//     setTotalResults(parsedData.totalResults || 0);
//     setLoading(false);
//     props.setProgress(100);
//   };

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - NowPress`;
//     updateNews();
//     // eslint-disable-next-line
//   }, []);

//   const fetchMoreData = async () => {
//     const nextPage = page + 1;
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    
//     // Set page after calculating the URL to avoid sync issues
//     setPage(nextPage);
//     let data = await fetch(url);
//     let parsedData = await data.json();
    
//     setArticles(articles.concat(parsedData.articles || []));
//     setTotalResults(parsedData.totalResults || 0);
//   };

//   return (
//     <>
//       <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
//         NowPress - Top {capitalizeFirstLetter(props.category)} Headlines
//       </h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 45) : ""}
//                     description={element.description ? element.description.slice(0, 88) : ""}
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </>
//   );
// }

// News.defaultProps = {
//   country: "us",
//   pageSize: 8,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   setProgress: PropTypes.func,
//   apiKey: PropTypes.string,
// };

// export default News;



// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     props.setProgress(10);
    
//     const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`;

//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);

    
//     setArticles(parsedData.articles || []);
//     setTotalResults(parsedData.totalArticles || 0);
//     setLoading(false);
//     props.setProgress(100);
//   };

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - NowPress`;
//     updateNews();
   
//   }, []);

//   const fetchMoreData = async () => {
  
//     const nextPage = page + 1;
//     const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`;
    
//     setPage(nextPage);
//     let data = await fetch(url);
//     let parsedData = await data.json();
    
//     setArticles(articles.concat(parsedData.articles || []));
//     setTotalResults(parsedData.totalArticles || 0);
//   };

//   return (
//     <>
//       <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
//         NowPress - Top {capitalizeFirstLetter(props.category)} Headlines
//       </h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={false} 
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 45) : ""}
//                     description={element.description ? element.description.slice(0, 88) : ""}
//                     imageUrl={element.image} 
//                     newsUrl={element.url}
//                     author={element.source ? element.source.name : "Unknown"}
//                     date={element.publishedAt}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </>
//   );
// };

// News.defaultProps = {
//   country: "us",
//   pageSize: 8,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   setProgress: PropTypes.func,
//   apiKey: PropTypes.string,
// };

// export default News;






import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null); // Important: NewsData uses tokens, not numbers

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    // NewsData.io Latest Endpoint
    const url = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&category=${props.category}&language=en&country=${props.country}`;

    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(70);

      // NewsData uses .results instead of .articles
      setArticles(parsedData.results || []);
      setNextPage(parsedData.nextPage); // Save the token for the next fetch
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NowPress`;
    updateNews();
    // eslint-disable-next-line
  }, [props.category]);

  const fetchMoreData = async () => {
    if (!nextPage) return; // If there is no next page token, stop fetching
    
    // For pagination, we add &page= followed by the token
    const url = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&category=${props.category}&language=en&country=${props.country}&page=${nextPage}`;
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      
      setArticles(articles.concat(parsedData.results || []));
      setNextPage(parsedData.nextPage); // Update the token for the follow-up fetch
    } catch (error) {
      console.error("Infinite Scroll Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        NowPress - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={nextPage !== null} 
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={element.article_id || index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : "No Title"}
                    description={element.description ? element.description.slice(0, 88) : "No Description"}
                    imageUrl={element.image_url} // NewsData uses image_url
                    newsUrl={element.link} // NewsData uses link
                    author={element.source_id || "Unknown"}
                    date={element.pubDate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

// Note: NewsData uses "top" as the default category instead of "general"
News.defaultProps = {
  country: "us",
  category: "top", 
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func,
  apiKey: PropTypes.string,
};

export default News;