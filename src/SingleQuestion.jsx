import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "animate.css/source/sliding_entrances/slideInDown.css";
import "animate.css/source/sliding_exits/slideOutUp.css";
import "animate.css/source/_base.css";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const nodeRef = useRef(null);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {/* {showInfo && <p>{info}</p>} */}
      <div className="animation-wrapper">
        <CSSTransition
          unmountOnExit
          in={showInfo}
          timeout={500}
          classNames={{
            enter: "slideInDown",
            enterActive: "animated",
            exit: "slideOutUp",
            exitActive: "animated",
          }}
          nodeRef={nodeRef}
        >
          <p ref={nodeRef}>{info}</p>
        </CSSTransition>
      </div>
    </article>
  );
};
export default SingleQuestion;
