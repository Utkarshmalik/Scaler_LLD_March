import { Button, Form, Input, message } from "antd";
import { ResetPassword } from "../../calls/users";


const ResetPage=()=>{


    const onFinish = async (values)=>{
        
        try{

            const response = await ResetPassword(values);

            if(response.data.status==="success"){
                message.success(response.data.message);
                window.location.href="/login"
            }else{
                message.error(response.data.message)
            }

        }catch(err){

        }

    }

 return (
        <>
            <header className="App-header">
                <main className="main-area mw-500 text-center px-3">
                    <section className="left-section">
                        <h1>Reset Password</h1>
                    </section>
                    <section className="right-section">
                        <Form layout="vertical" onFinish={onFinish}>

                            <Form.Item
                                label="OTP"
                                htmlFor="otp"
                                name="otp"
                                className="d-block"
                                rules={[{ required: true, message: "OTP is required" }]}
                            >
                                <Input
                                    id="otp"
                                    type="number"
                                    placeholder="Enter your otp"
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
                                    RESET PASSWORD
                                </Button>
                            </Form.Item>
                        </Form>

                    </section>
                </main>
            </header>
        </>
    )
}


export default ResetPage;