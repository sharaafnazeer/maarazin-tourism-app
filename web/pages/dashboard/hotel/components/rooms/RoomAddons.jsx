const RoomAddons = () => {
  const Addons = [
    {
      id: 1,
      label: "Breakfast ",
    },
    {
      id: 2,
      label: "Half board",
    },
    {
      id: 3,
      label: "Changing bedclothes",
    },
    {
      id: 4,
      label: "Car rental",
    },
    {
      id: 5,
      label: "Guides/Translators",
    },
    {
      id: 6,
      label: "Taxi pick-up service",
    },
  ];

  return (
    <div className="col">
      {Addons.map((addon) => (
        <div className="row">
          <div className="col-lg-4 mb-30" key={addon.id}>
            <div className="row y-gap-20">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input type="checkbox" name="name" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{addon.label}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <input
              type="number"
              className="text-blue-1 pl-10 border-light rounded-4 text-16"
              placeholder="Amount"
            />
          </div>
        </div>
      ))}
      {/* End Addons*/}
    </div>
  );
};

export default RoomAddons;
