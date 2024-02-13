import React from "react";

function Bio() {
  return (
    <div>
      <p className="mb-2">
        I am a first year CS Ph.D student in the Maining College of Information
        and Computer Sciences, University of Massachusetts Amherst, working
        quantum computing and machine learning with Prof. Phuc Nguyen and Prof.
        Don Towsley.
      </p>

      <p className="mb-2">
        Prior to joining UMass Amherst, I worked with with Dr. Hai Phan on
        transformers for face idendication and Prof. Bo Han, a rockstar in
        networked systems, on neural human avatar rendering for real-time
        holographics telepresence.
      </p>

      <p className="mb-2">
        Apart my role as a Ph.D student, I'm also as a co-founder and software
        developer <a className="italic">SomeStartup in San Francisco</a>, where
        my folks and I build <a className="italic">SomePlatform.live</a>, a
        platform for finding best local events in a given location using
        recommendation systems and multimodal AI.
      </p>

      <p className="mb-2 text-red-500 font-bold">
        I&rsquo;m actively looking for collaboration in quantum machine
        learning! Please contact me if you&rsquo;re interested.
      </p>
    </div>
  );
}

export default Bio;
