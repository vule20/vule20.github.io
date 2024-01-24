import React from "react";

function Bio() {
  return (
    <div>
      <p className="mb-2">
        I am a first-year Ph.D student at the Maining College of Information and
        Computer Sciences, University of Massachusetts Amherst, working on
        quantum computing and machine learning with Dr. Phuc Nguyen.
      </p>

      <p className="mb-2">
        Prior to joining UMass Amherst, I worked with with Dr. Hai Phan and our
        incredibly nice and talented folks from Sillicon Valley on face
        idendication. In addition, I also collaborated with Prof. Bo Han&rsquo;s
        group at George Mason University to work on neural human rendering for
        real-time holographics communication (the Metaverse). You can check my{" "}
        <a className="text-red-500 font-bold" href="/publications">
          publication page
        </a>{" "}
        for more details
      </p>

      <p className="mb-2">
        Apart my role as a Ph.D student, I also hold appointment as a co-founder
        and software developer at MarkovAI, a startup in San Francisco, where my
        folks and I build ***.live, a social platform for finding best local
        events in a given location using recommendation systems and multimodal
        AI.
      </p>

      <p className="mb-2 text-red-500 font-bold">
        I&rsquo;m actively looking for collaboration in quantum machine
        learning! Please contact me if you&rsquo;re interested.
      </p>
    </div>
  );
}

export default Bio;
