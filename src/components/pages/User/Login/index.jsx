import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Col, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import bg from '../../../../assets/img/login-background.png';

const Login = ({ setIsSetAuthenticated }) => {
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.vncrobotics.com/login", { email, password });
            localStorage.setItem("accessToken", response.data.accessToken);
            console.log(response)
            navigate('/');
            setIsSetAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='login-screen'>
            <div className="login-body">
                <Row className='h-100 g-0'>
                    <Col lg='6' className='h-100'>
                        <div className="login-bg">
                            <img src={bg} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' className='h-100'>
                        <div className="d-flex h-100 flex-column align-items-center justify-content-center">
                            <h3 className="logo-text">FLOWMETER</h3>
                            <form onSubmit={handleLogin}>
                                <div className="form-input-group mt-0">
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email...' type='email' />
                                </div>

                                <div className="form-input-group">
                                    <FormLabel>Password:</FormLabel>
                                    <InputGroup>
                                        <FormControl value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password...' type={!toggle ? 'password' : 'text'} />
                                        <InputGroup.Text onClick={() => { setToggle(!toggle) }}>
                                            <FontAwesomeIcon icon={!toggle ? faEyeSlash : faEye} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <p className="text-end text-sm">Forgot Password?</p>
                                </div>

                                <button type='submit' className="btn btn-submit">LOGIN</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Login