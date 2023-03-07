import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState, useEffect } from 'react'
import { Col, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import bg from '../../../../assets/img/login-background.png';

import axios from '../../../../api/axios';
import useAuth from '../../../../hooks/useAuth';

const LOGIN_URL = '/login'

const Login = () => {
    const { setAuth } = useAuth()

    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        setErrMsg('')
    }, [email, password])



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': "application/json" },
                    // withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))

            const accessToken = response?.data?.accessToken;
            setAuth({ email, password, accessToken });
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (err?.response) {
                if (err.response.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
            } else {
                setErrMsg('No Server Response');
            }
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
                        <p ref={errRef} className={errMsg ? "errmsg text-center text-danger fs-5 mt-3" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="d-flex h-100 flex-column align-items-center justify-content-center">
                            <h3 className="logo-text">FLOWMETER</h3>
                            <form onSubmit={handleLogin}>
                                <div className="form-input-group mt-0">
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl value={email} ref={userRef} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email...' type='email' />
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