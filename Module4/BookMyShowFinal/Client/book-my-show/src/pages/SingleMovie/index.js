import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../calls/movies";
import { Button, Col, Input, Row, message } from "antd";
import moment from "moment";
import { getAllTheatesByMovie } from "../../calls/shows";



const SingleMoviePage = ()=>{

    const params = useParams();
    const navigate = useNavigate();

    const [movie, setMovie]  = useState(null);
    const [theatres, setTheatres] = useState(null);
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))


    const handleDate  =(e)=>{
        setDate(e.target.value);
          navigate(`/movie/${movie._id}?date=${
                  moment(e.target.value).format("YYYY-MM-DD")
                }`)
    }

    const getData = async ()=>{

        try{
        const response = await getMovieById(params.id);

        if(response.success){
            setMovie(response.data);
            console.log(response);
        }else{
            message.error(response.message);
        }
      }
      catch(err){
        message.error(err.message);
      }

    }

    const getAllTheatres = async ()=>{
        try{
            console.log("making API call");
            const response = await getAllTheatesByMovie(params.id,date);
            setTheatres(response.data);
            console.log(response);

            if(response.success){

            }else{
                message.error(response.data.message)
            }
            
        }catch(err){
            
        }
    }

    useEffect(()=>{
        getData();
    },[]);


      useEffect(()=>{
        getAllTheatres();
    },[date]);


    console.log(params);

    return <>
    <div className="inner-container">
        {
        movie && (

            <div className="d-flex">

                <div className="me-0" >
                    <img src={movie.poster} width={200} />
                </div>

                <div>
                    <h1 className="mt-0"> {movie.title} </h1>

                    <p className="movie-data">
                        Language : <span> {movie.language} </span>
                    </p>

                     <p className="movie-data">
                        Genre : <span> {movie.genre} </span>
                    </p>


                     <p className="movie-data">
                        Release Date : <span> {moment(movie.releaseDate).format("MMM Do YY") } </span>
                    </p>


                     <p className="movie-data">
                        Duration: <span> {movie.duration} </span>
                    </p>

                    <hr/>

                    <div>
                        <label> Choose the date : </label>
                        <Input 
                        type="date"
                        placeholder="default"
                        value={date}
                        onChange={handleDate}
                        />
                    </div>    

                </div>    
            </div>
        )}

        <h2 className="mt-3 pt-3"> Theatres </h2>

        {
            theatres && theatres.length ===0 && (
                <div className="pt-3">
                    <h2 className="blue-clr">
                        Currently, no theatres available for this movie
                    </h2>
                </div>    
            )
        }

        {

            theatres && theatres.length > 0 && (

                <div>

                    {

                        theatres.map((show)=>{

                            return (

                                <div>

                                    <Row>

                                        <Col lg={{span:5}} >
                                        <h3> {show.theatre.name} </h3>
                                        <p> {show.theatre.address} </p>
                                        </Col>


                                        <Col lg={{span:19}}>

                                        <Button
                                        onClick={()=>navigate(`/book-show/${show._id}`)}
                                        className="p-5 m-5">
                                        
                                           <h5> {show.time} </h5>

                                        </Button>

                                        </Col>
                                    </Row>

                                </div>

                            )
                        

                        })
                    }




                </div>



            )

        }




    </div>
    

    </>

}

export default SingleMoviePage;