import React from "react";
import PropTypes from "prop-types";
const Product = ({ image, name }) => {
  const url = image && image.url;
  return (
    <article>
      <h4> {name} </h4>
      <h4> {name} </h4>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

Product.defaultProps = {
  name: "default name",
  image: "niggers",
};

//rafcp  ptar
export default Product;
