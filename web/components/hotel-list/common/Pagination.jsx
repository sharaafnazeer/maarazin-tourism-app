import {useState} from "react";
import queryParamsBuilderOnObject from "../../../utils/queryParmsBuilderOnObject";
import {useRouter} from "next/router";

const Pagination = ({hotelsData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const [totalPages, setTotalPages] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        const query = {
            ...router.query, page: pageNumber,
        }
        router.push(router.pathname + '?' + queryParamsBuilderOnObject(query));
    };

    const renderPage = (pageNumber, isActive = false) => {
        const className = `size-40 flex-center rounded-full cursor-pointer ${isActive ? "bg-dark-1 text-white" : ""}`;
        return (<div key={pageNumber} className="col-auto">
            <div className={className} onClick={() => handlePageClick(pageNumber)}>
                {pageNumber}
            </div>
        </div>);
    };

    const renderPages = () => {
        const tPages = hotelsData?.totalCount / 12; // Change this to the actual total number of pages
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        const pages = pageNumbers.map((pageNumber) => renderPage(pageNumber, pageNumber === currentPage));
        if (totalPages !== tPages) {
            setTotalPages(tPages);
        }
        return pages;
    };

    if (!hotelsData?.records?.length) {
        return <></>
    }

    return (
        <div className="border-top-light mt-30 pt-30">
            <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
                <div className="col-auto md:order-1">
                    <button className="button -blue-1 size-40 rounded-full border-light">
                        <i className="icon-chevron-left text-12"/>
                    </button>
                </div>

                <div className="col-md-auto md:order-3">
                    <div className="row x-gap-20 y-gap-20 items-center md:d-none">
                        hotelsData && (renderPages())
                        {
                            totalPages > 5 && (
                                <>
                                    <div className="col-auto">
                                        <div className="size-40 flex-center rounded-full">...</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="size-40 flex-center rounded-full">{totalPages}</div>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
                        {
                            hotelsData && (renderPages())
                        }
                    </div>

                    {/*<div className="text-center mt-30 md:mt-10">*/}
                    {/*    <div className="text-14 text-light-1">*/}
                    {/*        1 – 20 of 300+ properties found*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className="col-auto md:order-2">
                    <button className="button -blue-1 size-40 rounded-full border-light">
                        <i className="icon-chevron-right text-12"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
