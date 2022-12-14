function Image({ image }) {
  return (
    <>
      {image === "wave" && (
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 90 1440 120"
        >
          <path
            fill="#E7E08B"
            d="M0,96L120,122.7C240,149,480,203,720,208C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      )}
    </>
  );
}

export default Image;
