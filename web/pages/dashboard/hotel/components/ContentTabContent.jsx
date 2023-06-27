import HotelContent from "./content/HotelContent";
import FeaturedUploader from "./content/FeaturedUploader";
import HotelImageUploader from "./content/HotelImageUploader";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllCategories,
    getRoomMostP_Facilities,
    saveHotel,
    updateOneHotel,
} from "../../../../slices/hotelSlice";
import {useRouter} from "next/router";
import RoomMostP_Facilities from "./rooms/RoomMostP_Facilities";
import { Validation } from "../../../../utils/hotel/Validation";
import {failureNofication, successNofication} from "../../../../data/notification";
import {useSession} from "next-auth/react";

const ContentTabContent = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const hotelId = router.query.id;

    const selectedHotel = useSelector(state => state.hotel.selectedHotel);
    const session = useSession();


    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getRoomMostP_Facilities());
    }, []);

    const [activeRating, setActiveRating] = useState(0);
    const [hotelImages, setHotelImages] = useState([]);
    const [featuredImages, setFeaturedImages] = useState([]);
    const [hotelData, setHotelData] = useState({
        name: "",
        description: "",
        rating: "",
        hotelGroupId: "",
        popularFacilities: [],
        existingBannerImages: [],
        existingFeatureImages: [],
    });

    // const [errors, setErrors] = useState({})
    // const handleValidation =(event)=>{
    //     event.preventDefault();
    //     setErrors(Validation(hotelData));
    // }
    const onSave = () => {

        // handleValidation();
        let formData = new FormData();

        formData.append("name", hotelData.name);
        formData.append("description", hotelData.description);
        formData.append("hotelGroupId", hotelData.hotelGroupId);
        formData.append("rating", activeRating);
        hotelImages.forEach((image) => {
            formData.append("bannerImages", image);
        })
        featuredImages.forEach((image) => {
            formData.append("featuredImages", image);
        })
        formData.append(
            "popularFacilities",
            JSON.stringify(hotelData.popularFacilities)
        );

        if (hotelId) {
            // Update
            formData.append("existingBannerImages", JSON.stringify(hotelData.existingBannerImages));
            formData.append("existingFeatureImages", JSON.stringify(hotelData.existingFeatureImages));

            const data = {
                formData,
                hotelId,
                token: session?.data?.user?.accessToken
            }

            dispatch(updateOneHotel(data))
                .unwrap()
                .then((res) => {
                    setFeaturedImages([]);
                    setHotelImages([]);
                    successNofication(res.message);
                    router.push(`/dashboard/hotel/update-hotel/${res.record._id}`);
                })
                .catch((err) => {
                    failureNofication(err.message);
                });

        } else {
            const data = {
                formData,
                token: session?.data?.user?.accessToken
            }
            dispatch(saveHotel(data))
                .unwrap()
                .then((res) => {
                    setFeaturedImages([]);
                    setHotelImages([]);
                    successNofication(res.message);
                    router.push(`/dashboard/hotel/update-hotel/${res.record._id}`);
                })
                .catch((err) => {
                    failureNofication(err.message);
                });
        }
    };

    useEffect(() => {
        if (selectedHotel) {
            setActiveRating(selectedHotel.rating);

            setHotelData(
                {
                    hotelId: selectedHotel._id,
                    name: selectedHotel.name,
                    description: selectedHotel.description,
                    rating: selectedHotel.rating,
                    hotelGroupId: selectedHotel.hotelGroup,
                    popularFacilities: selectedHotel.popularFacilities,
                    existingBannerImages: selectedHotel.bannerImages,
                    existingFeatureImages: selectedHotel.featuredImages,
                }
            )
        }
    }, [selectedHotel]);

    return (
        <>
            <div className="col-xl-10">
                <div className="text-18 fw-500 mb-10">Hotel Content</div>
                <HotelContent
                    hotelData={hotelData}
                    setHotelData={setHotelData}
                    activeRating={activeRating}
                    setActiveRating={setActiveRating}
                    hotelId={hotelId}
                    selectedHotel={selectedHotel}
                />
                {/* End HotelContent */}

                <div className="mt-30">
                    <div className="fw-500">Hotel Image</div>
                    <HotelImageUploader
                        hotelImages={hotelImages}
                        setHotelImages={setHotelImages}
                        hotelData={hotelData}
                        setHotelData={setHotelData}
                    />
                </div>
                {/* End HotelImageUploader */}

                <div className="mt-30">
                    <div className="fw-500">Featured Image</div>
                    <FeaturedUploader
                        featuredImages={featuredImages}
                        setFeaturedImages={setFeaturedImages}
                        hotelData={hotelData}
                        setHotelData={setHotelData}
                    />
                </div>
                {/* End FeaturedUploader */}

                <div className="mt-30">
                    <div className="fw-500">Most Popular Facilities</div>
                    <RoomMostP_Facilities
                        hotelData={hotelData}
                        setHotelData={setHotelData}
                        hotelId={hotelId}
                        selectedHotel={selectedHotel}

                    />
                </div>

                <div className="d-inline-block pt-30">
                    <button
                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                        onClick={() => onSave()}
                    >
                        Save Changes <div className="icon-arrow-top-right ml-15"/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContentTabContent;
