import PropTypes from "prop-types";

function Button({ name, css }) {
  const mainCss =
    css +
    " text-gray-800 rounded-md bg-gradient-to-br from-sky-300 via-green-300 to-sky-300";

  return <button className={mainCss}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};

export default Button;
