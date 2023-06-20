import { useState } from "react";
import { useEffect } from "react";

const Nearby = ({
  hotelId,
  selectedNearBy,
  nearBy,
  setNearBy
}) => {

  const [tempNearBy, setTempNearBy] = useState({
    name: "",
    content: "",
    distance: "",
  });

  const onChange = (id, value) => {
    const newNearBy = { ...tempNearBy, [id]: value };
    setTempNearBy(newNearBy);
  };

  useEffect(() => {
    if ((selectedNearBy && hotelId)) {
      setTempNearBy({
        name: selectedNearBy.name || "",
        content: selectedNearBy.content || "",
        distance: selectedNearBy.distance || "",
      });
    }
  }, [selectedNearBy, hotelId, tempNearBy, setTempNearBy]);

  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Distance</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {/* {data.map((val, index)=>( */}
            <tr>
              <td className="col-4">
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    id="name"
                    onChange={(evt) =>
                      onChange(evt.target.id, evt.target.value)
                    }
                    defaultValue={(selectedNearBy && hotelId) ? tempNearBy.name: ''}
                  />
                  <label className="lh-1 text-16 text-light-1">
                    Nearby Name
                  </label>
                </div>
              </td>
             
              <td className="col-6">
                <div className="form-input ">
                  <textarea
                    required
                    rows={5}
                    id="content"
                    className=""
                    onChange={(evt) =>
                      onChange(evt.target.id, evt.target.value)
                    }
                    defaultValue={(selectedNearBy && hotelId) ? tempNearBy.content: ''}
                  />
                  <label className="lh-1 text-16 text-light-1 ">Content</label>
                </div>
              </td>
              <td className="col-3">
                <div className="form-input ">
                  <input
                    type="text"
                    required
                    id="distance"
                    onChange={(evt) =>
                      onChange(evt.target.id, evt.target.value)
                    }
                    defaultValue={(selectedNearBy && hotelId) ?  tempNearBy.distance: ''}
                  />
                  <label className="lh-1 text-16 text-light-1">
                    Distance
                  </label>
                </div>
              </td>
              <td className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                  <i className="icon-trash-2 text-16 text-light-1 " />
                </button>
              </td>
            </tr>
             {/* ))} */}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-end mb-40 mt-20">
        <button className="button -md -blue-1 bg-blue-1-05 text-blue-1"
        onClick={() => {
          setNearBy([...nearBy, tempNearBy]);
          setTempNearBy({
            name: "",
            content: "",
            distance: "",
          })
        }}
        >
          Add Nearby
        </button>
      </div>
    </>
  );
};

export default Nearby;
