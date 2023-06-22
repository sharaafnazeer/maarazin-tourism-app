import Map from "./Map";
import Link from "next/link";

const SidebarRight2 = ({hotelData}) => {
    return (

        <div className="ml-50 lg:ml-0">
            <div className="px-30 py-30 border-light rounded-4">
                <div className="mb-15">
                    <Map/>
                </div>
                {/* End map */}

                {/*<div className="row y-gap-10">*/}
                {/*  <div className="col-12">*/}
                {/*    <div className="d-flex items-center">*/}
                {/*      <i className="icon-award text-20 text-blue-1" />*/}
                {/*      <div className="text-14 fw-500 ml-10">*/}
                {/*        Exceptional location - Inside city center*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="col-12">*/}
                {/*    <div className="d-flex items-center">*/}
                {/*      <i className="icon-pedestrian text-20 text-blue-1" />*/}
                {/*      <div className="text-14 fw-500 ml-10">Exceptional for walking</div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* End .row */}

                <div className="border-top-light mt-15 mb-15"/>
                <div className="text-15 fw-500">Popular landmarks</div>
                {
                    [...hotelData?.nearBy]?.splice(0, 2).map((near, index) => (
                        <div className="d-flex justify-between pt-10" key={`near-${index}`}>
                            <div className="text-14">{near.name}</div>
                            <div className="text-14 text-light-1">{near.distance}</div>
                        </div>
                    ))
                }
                <button className="d-block text-14 fw-500 underline text-blue-1 mt-10">
                    <Link href={"#hotel-nearby"}>Show More</Link>
                </button>
            </div>
        </div>
    );
};

export default SidebarRight2;
