import { useCallback, useState } from "react";




const ItemsPage  = ()=>{

    console.log("Items Page");

    const [items, setItems] = useState(["Item 1","Item 2","Item 3"]);


    const removeItem = useCallback( (itemToRemove)=>{
        const updatedItems = items.filter((item)=> item !==itemToRemove);
        setItems(updatedItems);
    },[]);

    return <div>

        {
            items.map((item)=>{

                return <div>
                    {item}
                    <button onClick={()=> removeItem(item)} > Remove </button>
                    </div>
            })
        }

    </div>

}

export default ItemsPage;