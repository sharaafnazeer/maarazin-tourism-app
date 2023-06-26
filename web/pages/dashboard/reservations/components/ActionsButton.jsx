const ActionsButton = ({
  onDetailClick,
  onConfirmClick,
  onRejectClick,
  record,
}) => {
  return (
    <div className="dropdown ">
      <i
        className="bi bi-three-dots-vertical"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>

      <ul className="dropdown-menu bg-blue-1-05 text-blue-1 text-center">
        <li>
          <a
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="dropdown-item"
            href="#"
            onClick={() => onDetailClick(record._id)}
          >
            Details
          </a>
        </li>
        {(record && record.status) === 0 && (
              <>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => onConfirmClick(record._id)}
                  >
                    Confirm
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => onRejectClick(record._id)}
                  >
                    Reject
                  </a>
                </li>
              </>
            )}
      </ul>
    </div>
  );
};

export default ActionsButton;
