import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { LoginUser } from "../../calls/users";

const Login = () => {

  const onFinish = async (values)=>{
    const response  = await LoginUser(values);

    if(response.data.success==true){
      console.log(response);
      message.success("Login Successful");
      localStorage.setItem("token",response.data.token);
      window.location.href="/";

    }else{
      message.error(response.data.message);
    }
  }

  return (
    <div>

      <header className="App-header">

        <main className="main-area mw-500 text-center px-3">
        <section className="left-section">
          <h1>Login to BookMyShow</h1>
        </section>

        <section className="right-section">
          <Form onFinish={onFinish} layout="vertical">
    
            <Form.Item
                label="email"
                htmlFor="email"
                name="email"
                className="d-block"
                
                rules={[{ required: true, message: "EmailId is required" }]}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your EmailId "
                 
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              New User? <Link to="/register">Register Here</Link>
            </p>
            <p>
              Forget Password ? <Link to="/forget">click here </Link>
            </p>
          </div>
        </section>
      </main>

      </header>

    </div>
  )
}
export default Login;