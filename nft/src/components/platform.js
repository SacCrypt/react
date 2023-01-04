import style from "../static/css/platform.module.css";
import image1 from "../static/images/03";
import image2 from "../static/images/04";
import image3 from "../static/images/05";
import image4 from "../static/images/06";

const Platform = () => {
  return (
    <div className={style.outerContainer}>
      <div className={style.best}>we are the best</div>
      <h1> In the History </h1>
      <p>Create your own GIF, MP4, and PNG NFTs with no coding knowledge.</p>
      <button> get started now </button>
      <img className={style.first} src={image1} alt="monke" />
      <img className={style.second} src={image2} alt="cryingFox" />
      <img className={style.third} src={image3} alt="coolLion" />
      <img className={style.fourth} src={image4} alt="zombie" />
    </div>
  );
};

export default Platform;
