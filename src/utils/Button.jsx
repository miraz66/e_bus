import PropTypes from "prop-types";

function Button({ name, css }) {
  const mainCss =
    css +
    " text-gray-800 bg-gradient-to-br rounded-md from-sky-300 via-green-300 to-sky-300";

  return <div className={mainCss}>{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};

export default Button;
