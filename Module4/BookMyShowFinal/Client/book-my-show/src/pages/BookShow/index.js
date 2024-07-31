import { useEffect, useState } from "react";
import { getShowViaId } from "../../calls/shows";
import { useParams } from "react-router-dom";
import { Card, Col, Row, message } from "antd";
import moment from "moment";


const BookShowPage = ()=>{

    const [show, setShow]  = useState(null);

    const params = useParams();


    const getSeats = ()=>{

        let columns = 12;
        let totalSeats = 120;

        let rows = totalSeats / columns;  //10

        const allRows  = Array.from((Array(rows).keys()));
        const allColumns = Array.from((Array(columns).keys()));
        console.log(allRows.length);


        return <div className="d-flex flex-column align-items-center">


            <div className="">
                <p> Screen this side, you will be watching in this direction</p>
            </div>


            <div>

                {
                    allRows.map((row)=>{
                        return <div>
                        {allColumns.map((col)=>{
                            return <span> S </span>
                        })
                        }
                        <br/> 
                        </div>
                    })
                }

            </div>


            <div>

                <div>

                    Selected Seats : 1, 5
                </div>

                <div>

                    Total Price : 200
                </div>

            </div>


        </div>


    }



    const getData = async ()=>{

        try{
            const response = await getShowViaId(params.id);
            console.log(response);

            if(response.success){
                setShow(response.data);
            }else{
                message.error("Unable to fetch show details");
            }

        }catch(err){

        }

    }



    useEffect(()=>{

        getData();

    },[])


    return <div>

        {
            show && <div>
                  <Row>

                    <Col span={24}>
                    

                    <Card
                    title={

                        <div>

                            <h1> {show.movie.title} </h1>

                            <p> Theatre : {show.theatre.name}, {show.theatre.address} </p>

                        </div>

                    }

                    extra = {

                        <div className="py-3">
                            <h3> 
                             <span> Show Name  :  </span> {show.name}    
                            </h3>

                               <h3> 
                             <span> Date and Time :  </span> 

                             {moment(show.date).format("MMM Do YYYY")} {" "}
                             {show.time}
                            </h3>

                               <h3> 
                             <span> Ticket Price  :  </span> {show.ticketPrice}    
                            </h3>


                               <h3> 
                             <span> Total Seats  :  </span> {show.totalSeats}
                             <span> | Available Seats :  </span> {show.totalSeats - 
                             show.bookedSeats.length}

                            </h3>

                        </div>


                    }
                    >



                        {getSeats()}


                    </Card>



                    </Col>

                  </Row>
                </div>
        }

    </div>



}

export default BookShowPage;