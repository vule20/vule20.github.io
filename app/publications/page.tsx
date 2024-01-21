import React from "react";

function page() {
  return (
    <div>
      <div>
        <h1 className="text-red-500 font-bold text-2xl">Publications</h1>
        <h1 className="mb-5 mt-5">
          For the most up to date papers, please check my google scholar page
        </h1>
      </div>

      <div className="flex hover: #881c1c mb-5 mt-5">
        <div className="flex badge badge-accent">WACV2023</div>
        <div className="mr-20 pr-28 pl-24 " id="wacv2023">
          <div className="hover: #881c1c hover:bg-gray-900 focus:text-blue-800 focus:bg-gray-100 transition-color font-bold text-gray-800 text-xl">
            Fast and Interpretable Face Identification for Out-Of-Distribution
            Data Using Vision Transformers.
          </div>
          <div className="text-gray-950">
            Phan, Hai, Cindy Le, <a className="font-bold">Vu Le</a>, Yihui He,
            and Anh Totti Nguyen.
          </div>
          <div className="italic">
            In Proceedings of the IEEE/CVF winter conference on applications of
            computer vision, 2023.
          </div>
        </div>
      </div>
      {/* publication 2 */}
      <div className="flex hover: #881c1c mb-5 mt-5">
        <div className="flex badge badge-accent">WACV2023</div>
        <div className="mr-20 pr-28 pl-24 " id="wacv2023">
          <div className="hover: #881c1c hover:bg-gray-900 focus:text-blue-800 focus:bg-gray-100 transition-color font-bold text-gray-800 text-xl">
            Fast and Interpretable Face Identification for Out-Of-Distribution
            Data Using Vision Transformers.
          </div>
          <div className="text-gray-950">
            Phan, Hai, Cindy Le, <a className="font-bold">Vu Le</a>, Yihui He,
            and Anh Totti Nguyen.
          </div>
          <div className="italic">
            In Proceedings of the IEEE/CVF winter conference on applications of
            computer vision, 2023.
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
