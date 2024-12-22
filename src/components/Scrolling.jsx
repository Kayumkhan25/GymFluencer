import React from 'react';

const Scrolling = () => {
  return (
    <section className="centered">
      <div className="blinking italic flex flex-col gap-4 text-4xl uppercase">
        <div className="RightToLeft flex">
          <p className="py-1 leading-normal">
            Transformation / Motivation / Progress / Fitness / Workout
          </p>
        </div>
        <div className="text-purple-500 opacity-70">
          <p className="py-1 leading-normal">
            Fitness / Workout / Progress / Motivation / Transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scrolling;
