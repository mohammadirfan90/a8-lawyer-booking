import React from "react";

const Banner = () => {
  return (
    <div
      className="hero py-6 md:py-0 md:min-h-[90vh] container mx-auto rounded rounded-4xl"
      style={{
        backgroundImage: "url(../assets/banner-img-1.png)",
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="mb-5 hidden md:block">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
