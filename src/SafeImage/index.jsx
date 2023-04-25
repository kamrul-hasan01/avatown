import React from "react";

const SafeImage = ({ src, alt, customStyle }) => {
  let path = "/Avatar/" + src;
  return <img src={path} alt={alt} className={customStyle} />;
};

export default SafeImage;
