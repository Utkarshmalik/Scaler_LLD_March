import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useState } from 'react';

function Login(props){

  console.log("Rendering Login Component");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const onPasswordChange=(e)=>{
    setPassword(e.target.value);
  }



    function onLoginClick(e){
        e.preventDefault();
        props.onLogin();
    }

    function onFormSubmit(){

       //validations 


    }

    return <div className='login'>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={onEmailChange} value={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={onPasswordChange} value={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={onLoginClick} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
}

export default Login;