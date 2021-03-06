import React from "react";
import "./HomeArchive.css";

const HomeArchive = ({title, id, thumbnailUrl}) => (
  <div className="archive">
    <div className="archive_tag">
      <span>archive</span>
    </div>
    <div className="archive_content">
          <div className="archive_content_header">
            title: {title} <br></br>
			date: {id}
          </div>
		  <div className="archive_content_image image_fill"
		  		style={{
			    backgroundImage: `url(${thumbnailUrl})`
		  }}></div>
      </div>
    </div>
);

export default HomeArchive;
