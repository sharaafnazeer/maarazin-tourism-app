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
        <div className="col-lg-12" key={item.id}>
          <div className="accordion__item rounded-8 ">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 col-12">
                <div
                  className="accordion__button d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.collapseTarget}`}
                >
                  <div className="button text-dark-1 ">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Bath Room</th>
                        <th>Most Popular</th>
                        <th>Have Extra Fee</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                  </div>
                  <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mt-10">
                    <i className="icon-plus" />
                    <i className="icon-minus" />
                  </div>
                </div>
                {/* End accordion button */}

                <div
                  className="accordion-collapse collapse"
                  id={item.collapseTarget}
                  data-bs-parent="#Faq1"
                >
                  <tbody>
                    <tr>
                      <td>
                        <div className="col-12">
                          <div className="d-flex items-center form-checkbox">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 lh-11 ml-10">Label</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="col-12">
                          <div className="d-flex items-center form-checkbox">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="col-12">
                          <div className="d-flex items-center form-checkbox">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="Amount USD ($)"
                          className="border-light rounded-4 lh-2 p-2 w-34px"
                        />
                      </td>
                    </tr>
                  </tbody>
                </div>
                {/* End accordion conent */}
              </table>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
