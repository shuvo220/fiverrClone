import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navbar.css';


function Navbar() {

  const[active, setActive] = useState(false);
  const[open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive=()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return()=>{
      window.removeEventListener('scroll', isActive);
    }
  }, []);

  const currentUser={
    id:1,
    username:"shuvo",
    isSeller:true
  }

  return (
    <>
        <div className={active || pathname !== '/' ? "navbar_active" : "navbar"}>
            <div className='container'>
              <div className='logo'>
                <Link to='/'>
                  <span className='text'>fiverr</span>
                </Link>
                  <span className='dot'>.</span>
              </div>
              <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button className='join'>Join</button>}
                {currentUser && (
                  <div className='user' onClick={()=>setOpen(!open)}>
                    <img className='pro' src='https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg' alt='' />
                    <span>{currentUser?.username}</span>
                    {open && <div className='options'>
                      {
                        currentUser?.isSeller &&(
                          <>
                            <Link to='/mygigs'>Gigs</Link>
                            <Link to='/add'>Add New Gig</Link>
                          </>
                        )
                      }
                      <Link to='/orders'>Orders</Link>
                      <Link to='/messages'>Messages</Link>
                      <Link>Logout</Link>
                    </div>}
                  </div>
                )}
              </div>
            </div>
            {(active || pathname !== '/') && 
              <>
                <hr />
                <div className='menu'>
                  <Link className='link' to='/'>Graphic & Design</Link>
                  <Link className='link' to='/'>Video & Animation</Link>
                  <Link className='link' to='/'>Writing & Translation</Link>
                  <Link className='link' to='/'>AI Service</Link>
                  <Link className='link' to='/'>Digital Merketing</Link>
                  <Link className='link' to='/'>Music & Audio</Link>
                  <Link className='link' to='/'>Programming & Tech</Link>
                  <Link className='link' to='/'>Business</Link>
                  <Link className='link' to='/'>Lifestyle</Link>
                </div>
              </>
            }
        </div>
    </>
  )
}

export default Navbar