import React from "react";
import img from "./2.jpeg";
import "./styles.css";

const About = () => {
  let ref1 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  let ref2 = React.useRef();

  function scrollTo(ref: any) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="about">
      <div className="about-wrapper">
        <img className="about-img" src={img} />
        <article className="about-text">
          <h3 className="about-title" onClick={() => scrollTo(ref1)}>
            MY WHY
          </h3>
          <p className="about-text-p">
            “It is not the critic who counts: not the man who points out how the
            strong man stumbles or where the doer of deeds could have done
            better. The credit belongs to the man who is actually in the arena,
            whose face is marred by dust and sweat and blood, who strives
            valiantly, who errs and comes up short again and again, because
            there is no effort without error or shortcoming, but who knows the
            great enthusiasms, the great devotions, who spends himself in a
            worthy cause; who, at the best, knows, in the end, the triumph of
            high achievement, and who, at the worst, if he fails, at least he
            fails while daring greatly, so that his place shall never be with
            those cold and timid souls who knew neither victory nor defeat.”
            —Theodore Roosevelt Speech at the Sorbonne, Paris, April 23, 1910
          </p>
          <p className="about-text-p2" ref={ref1}>
            This is me daring greatly.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
