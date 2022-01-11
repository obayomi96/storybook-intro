import PropTypes from "prop-types"

function Box({ children, spacing = 2, direction = "row", wrap = false }) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  }
  return <div style={style}>{children}</div>
}

Box.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
}

export default Box
