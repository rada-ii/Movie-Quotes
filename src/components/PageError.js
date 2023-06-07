import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

const PageError = () => {
  return (
    <div className="content">
      <h2>
        There is a problem with the network or fetching data. Please try again!{" "}
        <FontAwesomeIcon icon={faSadTear} className="icon" />
      </h2>
    </div>
  );
};

export default PageError;
