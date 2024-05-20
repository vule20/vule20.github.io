import React from "react";

function News() {
  return (
    <div className="mb-5 mt-16">
      <h1 className="font-bold text-2xl text-red-500">News</h1>
      <ul>
        {/* <li>
          [Jan 2024] Our paper on Realtime holographic telepresence got accepted
          for publication at Mobisys 2024. I'll be travelling to Japan this
          June!
        </li> */}
        <li>[March 2024] I start working at UMass Amherst for my PhD!</li>
        <li>
          [Jan-March 2024] I got multiple offers for my PhD application in
          computer science from US universities!
        </li>
        <li>
          [Oct 2023] Our paper on face identification got accepted for
          publication at IEEE WACV 2023!
        </li>
      </ul>
    </div>
  );
}

export default News;
