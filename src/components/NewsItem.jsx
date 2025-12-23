import React from "react";

const NewsItem = (props) => {
    
    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div className="my-3">
        <div className="card shadow-sm h-100">
          <img
            src={
              !imageUrl
                ? "https://images.axios.com/VwJ4dNyrrL8L9Ozb4xVcFU558ng=/0x0:8192x4608/1366x768/2025/06/12/1749768228577.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {title}... 
              <span className="badge rounded-pill bg-danger ms-2" style={{ fontSize: '0.7rem' }}>
                New
              </span>
            </h5>
            
            <p className="card-text">{description}...</p>
            
            <p className="card-text mt-auto">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            
            <a 
              rel="noreferrer" 
              href={newsUrl} 
              target="_blank" 
              className="btn btn-sm btn-dark mt-2 w-100"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;