import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleAddTask, showAddTask }) => {
  return (
    <header className="header">
      <h1 style={styles.heading}>{title}</h1>
      <Button
        onClick={toggleAddTask}
        color={showAddTask ? "grey" : "green"}
        text={showAddTask ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = {
  heading: {
    color: "darkorange",
    fontSize: 26,
  },
};

export default Header;
