import PropTypes from "prop-types";

function Card({
  images,
  icon,
  name,
  paragraph,
  css,
  imagesCss,
  iconCss,
  hCss,
  pCss,
  imgDevCss,
}) {
  return (
    <>
      <div className={css} data-aos="fade-up" data-aos-duration="2000">
        <div className={iconCss}>{icon}</div>

        <div className={imgDevCss}>
          <img className={imagesCss} src={images} alt="" />
        </div>
        <div className="">
          <h1 className={hCss}>{name}</h1>
          <p className={pCss}>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  images: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,

  imagesCss: PropTypes.string.isRequired,
  imgDevCss: PropTypes.string.isRequired,
  iconCss: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  hCss: PropTypes.string.isRequired,
  pCss: PropTypes.string.isRequired,
};

export default Card;
