const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "What do I need to hire a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "How old do I have to be to rent a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "Can I book a hire car for someone else?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "How do I find the cheapest car hire deal?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "What should I look for when I'm choosing a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              {/* <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div> */}
               <div className="col-lg-12  mt-10">
                <div className="row x-gap-100 y-gap-15">
                  <div className="col-lg-4 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center form-checkbox">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                    {/* End accordion conent */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center form-checkbox">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                    {/* End accordion conent */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center form-checkbox">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                    {/* End accordion conent */}
                  </div>{" "}
                  <div className="col-lg-4 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center form-checkbox">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                    {/* End accordion conent */}
                  </div>
                </div>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
