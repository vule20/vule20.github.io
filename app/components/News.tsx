import React from "react";

function News() {
  return (
    <div className="mb-5 mt-16">
      <h1 className="font-bold text-2xl text-red-500">News</h1>
      <ul>
        <li>
          [Oct 2023] Our paper “Shortcut Partitions in Minor-Free Graphs:
          Steiner Point Removal, Distance Oracles, Tree Covers, and More” got
          accepted to SODA24
        </li>
        <li>
          [July 2023] Our paper “Shortcut Partitions in Minor-Free Graphs:
          Steiner Point Removal, Distance Oracles, Tree Covers, and More” was
          uploaded to Arxiv.
        </li>
        <li>
          [July 2023] Our paper “Covering Planar Metrics (and Beyond): O(1)
          Trees Suffice” is accepted to FOCS 2023. Thank every co-author for
          your hard work!
        </li>
        <li>
          [July 2023] Our paper “Optimal Fault-Tolerant Spanners in Euclidean
          and Doubling Metrics: Breaking the Ω ( log n ) Lightness Barrier” is
          accepted to FOCS 2023. Thank Hung Le and Shay Solomon for your great
          mentorship.
        </li>
      </ul>
    </div>
  );
}

export default News;
