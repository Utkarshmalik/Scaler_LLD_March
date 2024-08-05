import { useEffect, useState } from "react";
import { getShowViaId } from "../../calls/shows";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Row, message } from "antd";
import moment from "moment";
import "./style.css";
import { bookShow, makePayment } from "../../calls/booking";
import StripeCheckout from 'react-stripe-checkout';

const BookShowPage = ()=>{

    const [show, setShow]  = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const params = useParams();


    const onToken = async (token)=>{

        const amount = selectedSeats.length * show.ticketPrice;
        
        const response = await makePayment({token, amount});

        if(response.success){
            message.success(response.message);
            performBooking(response.data);
        }
    }

    const performBooking= async (transactionId)=>{

            try{

            const payload = {
                show:show._id,
                seats:selectedSeats,
                transactionId:transactionId
            }

            const response = await bookShow(payload);


            if(response.success){
                message.success(`Booking created Successfully with id: ${response.data._id}`);

                setInterval(()=>{
                    window.location.href="/";
                },2000)
            }



        }catch(err){

        }

    }


 

    const getSeats = ()=>{

        let columns = 12;
        let totalSeats = 120;

        let rows = totalSeats / columns;  //10


        let allRows = [];

        for(let i=0;i<rows;i++){
            allRows.push(i);
        }

        let allColumns = [];

        for(let i=0;i<columns;i++){
            allColumns.push(i);
        }


        function handleSeatSelect(seatNumber){

            if(show.bookedSeats.includes(seatNumber)){
                return;
            }

            if(selectedSeats.includes(seatNumber)){
                const updatedSelectedSeats = selectedSeats.filter((seat)=>seat!=seatNumber);
                setSelectedSeats(updatedSelectedSeats);
                return;
            }

            setSelectedSeats([...selectedSeats, seatNumber]);


        }

        return <div className="d-flex flex-column align-items-center">




            <div>

                {
                    allRows.map((row)=>{
                        return <div>
                        {allColumns.map((col)=>{

                         let seatNumber  = row * columns + col +1;

                         let seatClass ="seat-btn";

                         if(show.bookedSeats.includes(seatNumber)){
                            seatClass+= " booked";
                         }

                         if(selectedSeats.includes(seatNumber)){
                            seatClass+=" selected";
                         }

                         //calculation for first iteration 

                         //row = 0 , col=0  : 0 * 12 + 0 + 1  = 1

                         //row =2  , col = 5,  2*12 +  5 + 1= 30

                            return <button onClick={()=>handleSeatSelect(seatNumber)}
                              className={seatClass} > {seatNumber} </button>
                        })
                        }
                        <br/> 
                        </div>
                    })
                }

            </div>


            <div className="cardBottomPrice">

                <div className="flex-1">

                    Selected Seats : <span> {selectedSeats.join(", ")} </span>
                </div>

                <div>

                    Total Price : {selectedSeats.length * show.ticketPrice}
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


                        {

                            selectedSeats.length > 0 && 

                            <StripeCheckout 
                            stripeKey="pk_test_51Pk5XWKp25HZoc30bcTmozGCabcS6KEKI7isIVopkB8TmzislgHqHIY3fzvxstSTY6bSN6LhQeW3z7oYpkc242Sd008g8PAKBI"
                            token={onToken}
                            />

                        }



                    </Card>



                    </Col>

                  </Row>
                </div>
        }

    </div>



}

export default BookShowPage;