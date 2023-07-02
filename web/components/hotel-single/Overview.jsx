const Overview = ({ hotelData }) => {
  return (
    <>
      <h3 className="text-22 fw-500 pt-40 border-top-light">Overview</h3>
      <p className="text-dark-1 text-15 mt-20">{hotelData?.description}</p>
      <a
        href="#"
        className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Show More
      </a>

      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the first
          item's accordion body.
        </div>
      </div>
    </>
  );
};

export default Overview;
