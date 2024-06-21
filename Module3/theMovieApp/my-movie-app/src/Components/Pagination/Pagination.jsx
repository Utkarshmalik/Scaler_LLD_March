import { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";


function Pagination({pageNumber, previousPageFn, nextPageFn}){

    const watchListContextValue = useContext(WatchListContext);
    console.log(watchListContextValue);

    return <div className=" text-white flex justify-center h-[50px] bg-gray-400 w-full mt-8 items-center">

        <div onClick={previousPageFn} className="px-8"> <i className="fa-solid fa-arrow-left">Prev </i> </div>
        <div> {pageNumber} </div>
        <div onClick={nextPageFn}  className="px-8"> <i className="fa-solid fa-arrow-right">Next </i> </div>


    </div>

}

export default Pagination;