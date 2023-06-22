export const buildPriceIncludes = (addon = [], payAtHotel = true, payNothing = true, freeCancel = true) => {
    const results = [];
    addon.forEach((add, index) => {
        results.push(
            <div className="d-flex items-center text-green-2" key={`addon-${index}`}>
                <i className="icon-check text-12 mr-10"/>
                <div className="text-15">{add.name}</div>
            </div>
        )
    })
    if (payAtHotel) {
        results.push(
            <div className="d-flex items-center text-green-2" key={`addon-pay`}>
                <i className="icon-check text-12 mr-10"/>
                <div className="text-15">Pay at the hotel</div>
            </div>
        )
    }
    if (payNothing) {
        results.push(
            <div className="d-flex items-center text-green-2" key={`addon-arrival`}>
                <i className="icon-check text-12 mr-10"/>
                <div className="text-15">
                    Pay nothing until arrival
                </div>
            </div>
        )
    }
    if (freeCancel) {
        results.push(
            <div className="d-flex items-center text-green-2" key={`addon-cancel`}>
                <i className="icon-check text-12 mr-10"/>
                <div className="text-15">
                    Free cancellation before arrival
                </div>
            </div>
        )
    }
    return results;
}