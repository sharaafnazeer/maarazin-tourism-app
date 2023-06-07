const Nearby = () => {
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
          <tr>
            <td className="col-4">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Nearby Name  
                </label>
              </div>
            </td>
            <td className="col-6">
              <div className="form-input ">
                <textarea required rows={5} defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">Content</label>
              </div>
            </td>
            <td className="col-2">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Distance (Km)
                </label>
              </div>
            </td>
            <td className="col-auto">
              <button className="flex-center bg-light-2 rounded-4 size-35">
                <i className="icon-trash-2 text-16 text-light-1" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="d-flex justify-end">
      <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20 mb-40">
        Add Nearby
      </button>
    </div>
  </>
  )
}

export default Nearby