import React from "react";

function Bio() {
  return (
    <div>
      <p className="mb-2">
        I am a first-year Ph.D student at the Maining College of Information and
        Computer Sciences, University of Massachusetts Amherst, advised by Dr.
        Phuc Nguyen. My current research interest at UMass Amherst lies in the
        intersection of quantum computing and machine learning.
      </p>

      <p className="mb-2">
        Prior to joining UMass Amherst, I got my bachelor degree from Vietnam
        National University, Hanoi. I also had greate time collaborating with
        with Dr. Hai Phan and my incredibly nice and talented folks from
        Sillicon Valley to work on face idendication. In addition, I also worked
        with Prof. Bo Han&rsquo;s group at George Mason University on neural
        human rendering for real-time holographics communication (the
        Metaverse). You can check my{" "}
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
