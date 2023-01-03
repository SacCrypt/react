import style from "../static/css/land.module.css";
import image0 from "../static/images/00";
import image1 from "../static/images/01";
import image2 from "../static/images/02";

const Land = () => {
  return (
    <div className={style.mainland}>
      <h1 className={style.header1}>
        {" "}
        Generate NFTs <span className={style.without}> WITHOUT </span> Code
      </h1>
      <h4 className={style.header3}>
        {" "}
        Our NFT Generator is being used by NFT creators and artists globally,
        the best way to generate your collections easily.
      </h4>
      <button className={style.landButton}> GET STARTED NOW </button>
      <div className={style.flex}>
        <div className={style.innerflex}>
          No. Of NFT Images Generated <br></br>
          <span className={style.number}> 3,000,000 +</span>
        </div>
        <div>
          {" "}
          NFT Collections Created <br></br>
          <span className={style.number}> 250,000 + </span>
        </div>
        <div>
          Smart Contracts Deployed <br></br>
          <span className={style.number}> 8,000 + </span>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img className={style.image0} src={image0} alt="llama" />
        <img className={style.image1} src={image1} alt="cute" />
        <img className={style.image2} src={image2} alt="cute2" />
      </div>
    </div>
  );
};

export default Land;
