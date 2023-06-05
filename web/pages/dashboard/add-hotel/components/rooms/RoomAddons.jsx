const RoomAddons = () => {

  const Addons=[
    {
      id:1,
      label:"Breakfast ($100)",
    },{
      id:2,
      label:"Dinner ($50)",
    },{
      id:3,
      label:"Extra Bed ($150)",
    },{
      id:4,
      label:"Extra ($250)",
    }
  ]




  return (
    <div className="col">
      <div className="row x-gap-100 y-gap-15">

        {Addons.map((addon) =>(
        <div className="col-lg-3 col-sm-6" key={addon.id}>
          <div className="row y-gap-15">
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
        ))}
        {/* End Addons*/}
      </div>
    </div>
  );
};

export default RoomAddons;
