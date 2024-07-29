import { Col, Row, message } from "antd";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../calls/movies";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState(null);

  const navigate  = useNavigate();

  const getData = async ()=>{

    try{
      const response =  await getAllMovies();
      if(response.success){
        setMovies(response.data);
      }else{
        message.error(response.message);
      }
    }catch(err){
    }
  }

  useEffect(()=>{
    getData();
  },[]);


  return (
    <div>

      <Row className="justify-content-center w-100" > 

        {
          movies && 

          movies.map
          ((movie)=>{
            return <Col
            className="mb-5 mx-3 py-3"
            span={{
              xs:24,
              sm:24,
              md:12,
              lg:10
            }}
            >
            

            <div className="text-center">

              <img
              onClick={()=>{
                navigate(`/movie/${movie._id}`)
              }}
              src={movie.poster}
              alt="movie poster"
              width={200} 
              style={{borderRadius:"8px"}}           
              />

              <h3>
                {movie.title}
              </h3>

            </div>

            </Col>
        })
      }

      </Row>

    </div>
  )
}


export default Home;