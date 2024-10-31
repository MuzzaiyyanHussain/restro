import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function Notfound() {
    return (
        <section className='notFound'><div className="container">

            <img src="/notfound.svg" alt="notFound" />
            <h1>Looks like you're LOST</h1>
            <p>We can't seem to find the page you're looking for</p>
            <Link to={"/"}>Back to home <span><HiOutlineArrowNarrowRight /></span></Link>
        </div></section>
    )
}

export default Notfound