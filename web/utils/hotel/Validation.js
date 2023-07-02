export const Validation =(hotelData)=>{
    const errors ={}

    if(hotelData.name === ""){
        errors.name = "Hotel Name is Required..!";
    }
    // description: "",
    // rating: "",
    // hotelGroupId: "",
    // popularFacilities: [],
    // existingBannerImages: [],
    // existingFeatureImages: [],
    return errors;
}