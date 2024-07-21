import React from "react";
import { Button, Form, Input , message } from "antd";
import { Link } from "react-router-dom"
import { RegisterUser } from "../../calls/users";


function Register() {

    const onFinish = async (values)=>{

        const response  = await RegisterUser(values);
        
        if(response.status == "201"){
            message.success("You are registered successfully! Login to Continue");
        }else{
            message.error(response.data.message);
        }
        console.log(response.status);   
    }

 
 return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>

          <section className="right-section">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                 
                ></Input>
              </Form.Item>


              <Form.Item
                label="UserId"
                htmlFor="userId"
                name="userId"
                className="d-block"
                
                rules={[{ required: true, message: "UserId is required" }]}
              >
                <Input
                  id="userId"
                  type="text"
                  placeholder="Enter your UserId"
                 
                ></Input>
              </Form.Item>

              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your Email"
                  
                ></Input>
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                 
                ></Input>
              </Form.Item>

              <Form.Item className="d-block">
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Already a user? <Link to="/login">Login now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;