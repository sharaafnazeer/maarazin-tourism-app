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

const ContentTabContent = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const hotelId = router.query.id;

    const selectedHotel = useSelector(state => state.hotel.selectedHotel);


    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getRoomMostP_Facilities());
    }, []);

    const [activeRating, setActiveRating] = useState(0);
    const [hotelImages, setHotelImages] = useState([]);
    const [featuredImages, setFeaturedImages] = useState([]);
    const [hotelData, setHotelData] = useState({
        name: "",
        content: "",
        rating: "",
        hotelGroupId: "",
        popularFacilities: [],
        existingBannerImages: [],
        existingFeatureImages: [],
    });

    const onSave = () => {
        let formData = new FormData();

        formData.append("name", hotelData.name);
        formData.append("description", hotelData.description);
        formData.append("hotelGroupId", hotelData.hotelGroupId);
        formData.append("rating", activeRating);
        hotelImages.forEach((image, index) => {
            formData.append("bannerImages", image);
        })
        featuredImages.forEach((image, index) => {
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
                hotelId
            }

            dispatch(updateOneHotel(data))
                .unwrap()
                .then((res) => {
                    setFeaturedImages([]);
                    setHotelImages([]);
                    router.push(`/dashboard/hotel/update-hotel/${res.record._id}`);
                })
                .catch((err) => {
                    console.log(err);
                });

        } else {
            dispatch(saveHotel(formData))
                .unwrap()
                .then((res) => {
                    setFeaturedImages([]);
                    setHotelImages([]);
                    router.push(`/dashboard/hotel/update-hotel/${res.record._id}`);
                })
                .catch((err) => {
                    console.log(err);
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
