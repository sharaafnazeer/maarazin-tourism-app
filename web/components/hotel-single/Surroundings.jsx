const Surroundings = () => {
  const surroundingsContent = [
    {
      id: 1,
      title: "What's nearby",
      icon: "icon-nearby",
      list: [
        { name: "Royal Pump Room Museum", distance: "0.1" },
        { name: "Harrogate Turkish Baths", distance: "0.1" },
        { name: "Royal Hall Theatre", distance: "0.1" },
        { name: "Harrogate Theatre", distance: "0.1" },
        { name: "Harrogate Library", distance: "0.1" },
        { name: "The Valley Gardens", distance: "0.1" },
        { name: "Harrogate District Hospital", distance: "0.1" },
      ],
    },
  ];

  return (
    <>
      {surroundingsContent.map((nearby) => (
        <div className="col-12" key={nearby.id}>
          <div className="mb-40 md:mb-30">
            <div className="d-flex items-center mb-20">
              <i className="icon-nearby text-20 mr-10"></i>
              <div className="text-16 fw-500">{nearby.title}</div>
            </div>
            <div className="row y-gap-0 x-gap-40">
              {nearby?.list?.map((data, index) => (
                <div className="col-lg-4 col-md-6 " key={index}>
                  <div className="row items-center justify-between border-top-light x-gap-0 p-2">
                    <div className="col-auto">
                      <div className="text-15">{data.name}</div>
                    </div>
                    <div className="col-auto ">
                      <div className="text-15 text-right">
                        {data.distance} km
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Surroundings;

