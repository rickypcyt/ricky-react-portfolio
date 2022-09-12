import React, { useState } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const UploadAndDisplayImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    setSelectedFiles([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <div class="container">
          <figure class="image-container">
            <img className="image" src={photo} alt="" key={photo} />
          </figure>
        </div>
      );
    });
  };

  return (
    <main>
      <nav className="cabeceranavi">
        <ol>
          <div className="oli">Home</div>
          <CustomLink to="/"></CustomLink>
          <nav className="oli" onClick={() => handleImageChange(null)}>
            Clear
          </nav>
          <label for="upload-button">
            <nav>
              <input
                type="file"
                id="upload-button"
                multiple="multiple"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div class="oli"> Submit + </div>
            </nav>
          </label>
        </ol>
      </nav>
      {selectedFiles && (
        <div className="paddingimxd">
          <div class="image-container">{renderPhotos(selectedFiles)}</div>
        </div>
      )}
    </main>
  );
};

export default UploadAndDisplayImage;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
