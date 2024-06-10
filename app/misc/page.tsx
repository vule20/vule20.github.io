import React from "react";

function page() {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-red-500">Gym</h1>
        <h1 className="text-gray-900 text-xl pr-32">
          I&rsquo;m a big fan of gym. Here&apos;s are some gym exercises I love.
          When I was in Vietnam, I usually work out at California Fitness, a
          primier gym center in Vietnam.
        </h1>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-red-500">Food</h1>
        <h1 className="text-gray-900 text-xl pr-32">
          Some of the food I usually comsume to keep myself fit!
        </h1>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl text-red-500">Travel</h1>
          <h1 className="text-gray-900 text-xl pr-32">
            Some sites in Vietnam, Singapore, Japan, USA I&apos;ve been to.
          </h1>
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Drink"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
