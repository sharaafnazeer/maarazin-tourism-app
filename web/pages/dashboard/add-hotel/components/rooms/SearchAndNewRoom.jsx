const SearchAndNewRoom = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
      };

  return (
    <div className="row y-gap-20 d-flex justify-end items-end ">
     
      <div className="col-auto">
        <form
          onClick={handleSubmit}
          className="w-230 single-field relative d-flex items-center"
        >
          <input
            className="pl-50 bg-blue border border-color-blue text-blue-1 h-50 rounded-8"
            type="text"
            placeholder="Search"
            required
          />
          <button type="submit" className="absolute d-flex items-center h-full">
            <i className="icon-search text-20 px-15 text-blue-1" />
          </button>
        </form>
      </div>
      {/* End Search Button */}

      <div className="col-auto">
        <button className="button -md h-50 -dark-1 bg-blue-1 text-white">
          Add a new room
        </button>
      </div>
      {/* End Add New Room */}
    </div>
  );
};

export default SearchAndNewRoom;
