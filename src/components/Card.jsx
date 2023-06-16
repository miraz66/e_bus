import PropTypes from "prop-types";

function Card({ image, name, paragraph, css, imageCss, hCss, pCss }) {
  return (
    <>
      {" "}
      <div className={css}>
        <div className={imageCss}>{image}</div>
        <div className="">
          <h1 className={hCss}>{name}</h1>
          <p className={pCss}>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,

  imageCss: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  hCss: PropTypes.string.isRequired,
  pCss: PropTypes.string.isRequired,
};

export default Card;
