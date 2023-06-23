import Image from "next/image";

const PropertyHighlights = ({highlights = []}) => {

    return (
        <div className="row y-gap-20 pt-30">
            {highlights.map((item) => (
                <div className="col-lg-3 col-md-4 col-6" key={item._id}>
                    <div className="text-center">
                        <i className={`${item.imageUrl} text-24 text-blue-1`}/>
                        <Image src={`/img/facilities/${item.imageUrl}`} width={30} height={25} alt={item.name}/>
                        <div className="text-15 lh-1 mt-10">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PropertyHighlights;
