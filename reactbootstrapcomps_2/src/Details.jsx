

const Details = () => {
  const openOffcanvas = (id) => {
    const offcanvas = document.getElementById(id);
    if (offcanvas) {
      const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }
  };

  return (
    <div>
      {/* Companyinfo Offcanvas */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openOffcanvas('companyInfoOffcanvas')}
      >
        Open Company Info
      </button>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="companyInfoOffcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Company Info</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Company information goes here...</p>
        </div>
      </div>

      {/* Termsandconditions Offcanvas */}
      <button
        type="button"
        className="btn btn-secondary ms-3"
        onClick={() => openOffcanvas('termsConditionsOffcanvas')}
      >
        Open Terms and Conditions
      </button>
      <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="termsConditionsOffcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Terms and Conditions</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Terms and conditions go here...</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
