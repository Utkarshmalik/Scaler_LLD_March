
import React, { useMemo, useState } from 'react';

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr)=>{

    console.log("doing the sum of array");

    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return sum;
}

const largeArray = generateLargeArray();

const SumPage = () => {

    console.log("inside sum page");


    
    const [count, setCount] = useState(0);
    const sum = useMemo(()=> sumArray(largeArray),[largeArray]);

    // const sum =  sumArray(largeArray);


    const onIncrement  =()=>{
        setCount(count+1);
    }

  return (
    <div>

        <h1> Sum :{sum}  </h1>

        <button onClick={()=>onIncrement()}> Increment </button>

        <p> Count : {count} </p>


    </div>
  );
};

export default SumPage;