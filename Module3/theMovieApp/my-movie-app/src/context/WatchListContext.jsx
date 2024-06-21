import React, { useEffect, useState } from "react";


export const WatchListContext = React.createContext();


function WatchListContextWrapper({children}){

    const [watchList, setWatchList] = useState([]);

    useEffect(()=>{
       var watchListData = JSON.parse(localStorage.getItem("watchList"));
            if(watchListData===null){
                watchListData=[];
            }
            setWatchList(watchListData);
    },[])


         const addToWatchList = (movieObj)=>{
        const updatedWatchList = [...watchList, movieObj];
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      }

      const removeFromWatchList = (movieObj)=>{

        const updatedWatchList = watchList.filter((movie)=>{
            return movie.id != movieObj.id;
        })
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      }

    return <WatchListContext.Provider value={{watchList, setWatchList, addToWatchList, removeFromWatchList }}>
        {children}
    </WatchListContext.Provider>

}

export default WatchListContextWrapper;
