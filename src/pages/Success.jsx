import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
    const [countdown, setCountDown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const timeOutId = setInterval(() => {
            setCountDown(preCount => {
                if (preCount === 1) {
                    clearInterval(timeOutId)
                    navigate('/')
                } else {
                    return preCount - 1;
                }
            })
        }, 1000);
        return () => clearInterval(timeOutId);
    }, [navigate])
    return (
        <>
            <section className='notFound'>
                <div className="container">
                    <img src="sandwich.png" alt="success" />
                    <h1>Redirecting to home in {countdown} seconds</h1>
                    <Link to={"/"}>Back to home<HiOutlineArrowNarrowRight /></Link>
                </div>
            </section >
        </>
    )
}

export default Success