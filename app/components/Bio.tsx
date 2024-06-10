import React from "react";

function Bio() {
  return (
    <div>
      <p className="mb-2">
        I am a first year Ph.D student in the Maining College of Information and
        Computer Sciences, University of Massachusetts Amherst. I'm advised by
        VP Nguyen and Yilun Xu on quantum computing.
      </p>

      <p className="mb-2">
        Prior to joining UMass Amherst, I worked with{" "}
        <a href="https://haithanhp.github.io" className="font-bold underline">
          Hai Phan
        </a>{" "}
        on transformers for face idendication and{" "}
        <a href="https://cs.gmu.edu/~bohan/" className="font-bold underline">
          Bo Han
        </a>{" "}
        on neural human avatar rendering for holographic telepresence.
      </p>

      <p className="mb-2">
        Apart from doing research, I also enjoy building scalable systems and in
        my part time, I work as a founding engineer who builds and develops{" "}
        <a href="https://abbies.live" className="font-bold underline">
          abbies.live
        </a>{" "}
        , a platform for sharing local events or where to go.
      </p>
    </div>
  );
}

export default Bio;
