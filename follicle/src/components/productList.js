import React from "react";
import style from "../static/css/productStyle.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={style.container}>
      <div className={style.sexBox}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div
                style={{ display: product.display }}
                className={style.innerContainer}
              >
                <img src={product.img} alt="product" />
                <h3 className={style.productName}>{product.name}</h3>
                <h4>Producer: {product.manufacturer}</h4>
                <h4>Price: {product.price}</h4>
                <br></br>
                {[...Array(5)].map((e, i) => {
                  const name = `star${product.stars - i}`;

                  return (
                    <svg
                      key={i}
                      className={`${style[name]}`}
                      id={`${style[name]}`}
                      width="20"
                      height="20"
                      viewBox="0 0 5.2916665 5.2916668"
                      version="1.1"
                    >
                      <defs id="defs2" />
                      <g id="layer1">
                        <path
                          id="path215"
                          d="m 2.2601071,2.2087202 2.29099,6.1268785 6.5349629,0.2855519 -5.119053,4.0721704 1.7478385,6.30336 -5.4547387,-3.610139 -5.4547391,3.610138 1.7478389,-6.303359 -5.1190527,-4.0721709 6.53496259,-0.2855514 z"
                          transform="matrix(0.27308207,0,0,0.27300537,2.0239127,-0.23492002)"
                        />
                      </g>
                    </svg>
                  );
                })}
                &#160;&#160;{`(${product.total_ratings})`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
