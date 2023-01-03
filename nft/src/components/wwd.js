import style from "../static/css/wwd.module.css";

const Wwd = () => {
  return (
    <div className={style.wwd}>
      <div className={style.redBox}></div>
      <div className={style.blueTriangle}></div>
      <h1>
        {" "}
        What We <span className={style.titleSpan}> Can Do </span>
      </h1>
      <h3> Built For NFT Creators </h3>

      <div className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.shape}> 1 </div>
          <p className={style.headingParagraph}> Easy NFT Generation </p>
          <p>
            {" "}
            No Coding Required. Create Your Layers, Import Your Assets, Click
            Generate And You are Done!
          </p>
        </div>
        <div className={style.innerContainer}>
          <div className={style.shape}> 2</div>
          <p className={style.headingParagraph}> Export Files </p>
          <p>
            {" "}
            Import Images, Gifs And Videos And We Will Generate Your Collection
            In The Format You Decide.
          </p>
        </div>
        <div className={style.innerContainer}>
          <div className={style.shape}> 3 </div>
          <p className={style.headingParagraph}> Rarity Levels </p>
          <p> Configure The Rarity Of Each Layer And Each Trait</p>
        </div>
        <div className={style.innerContainer}>
          <div className={style.shape}>4 </div>
          <p className={style.headingParagraph}> Attribute Rarity Setting </p>
          <p>
            {" "}
            Similarly To Layer Rarity, You Can Configure Certain Attributes To
            Be More Rare Than Others.
          </p>
        </div>
        <div className={`${style.innerContainer} ${style.downFlex}`}>
          <div className={style.shape}> 5</div>
          <p className={style.headingParagraph}>
            {" "}
            Create More Than One Character{" "}
          </p>
          <p> We Offer Multiple-Character Support In One Collection.</p>
        </div>
        <div className={style.innerContainer}>
          <div className={style.shape}> 6 </div>
          <p className={style.headingParagraph}> Never Lose Your Work </p>

          <p>
            {" "}
            We Have An Auto-Save Feature. So Your Project Will Not Be Lost.
          </p>
        </div>
        <div className={style.innerContainer}>
          <div className={style.shape}> 7 </div>
          <p className={style.headingParagraph}> Stellar Customer Service </p>
          <p> We Offer A Live Chat Function Whenever You Need Support.</p>
        </div>
      </div>
    </div>
  );
};

export default Wwd;
