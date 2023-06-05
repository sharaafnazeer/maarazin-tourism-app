const RoomFacilities = () => {
  const Facilities = [
    {
      id: 1,
      label: "Non-smoking rooms",
    },
    {
      id: 2,
      label: "Parking Area",
    },
    {
      id: 3,
      label: "Free WiFi",
    },
    {
      id: 4,
      label: "Kitchen",
    },
    {
      id: 5,
      label: "Gym",
    },
    {
      id: 6,
      label: "Spa",
    },
    {
      id: 7,
      label: "Restaurant",
    },
  ];

  return (
    <div className="col">
      <div className="row x-gap-100 y-gap-15">
        {Facilities.map((Facility) => (
          <div className="col-lg-3 col-sm-6" key={Facility.id}>
            <div className="row y-gap-15">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input type="checkbox" name="name" />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{Facility.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End .col-12 */}

       
      </div>
    </div>
  );
};

export default RoomFacilities;
