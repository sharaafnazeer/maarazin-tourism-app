const PropertyHighlights2 = ({highlights = []}) => {
  // const highlightsContent = [
  //   {
  //     id: 1,
  //     icon: "icon-city",
  //     text: `In London City Centre`,
  //   },
  //   {
  //     id: 2,
  //     icon: "icon-airplane",
  //     text: `Airport transfer`,
  //   },
  //   {
  //     id: 3,
  //     icon: "icon-bell-ring",
  //     text: `Front desk [24-hour]`,
  //   },
  //   {
  //     id: 4,
  //     icon: "icon-tv",
  //     text: `Premium TV channels`,
  //   }, {
  //     id: 5,
  //     icon: "icon-bell-ring",
  //     text: `Front desk [24-hour]`,
  //   },
  //   {
  //     id: 6,
  //     icon: "icon-tv",
  //     text: `Premium TV channels`,
  //   },
  // ];

  return (
    <div className="row y-gap-20 pt-30">
      {highlights.map((item) => (
        <div className="col-lg-3 col-md-4 col-6" key={item._id}>
          <div className="text-center">
            <i className={`${item.imageUrl} text-24 text-blue-1`} />
            <div className="text-15 lh-1 mt-10">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
