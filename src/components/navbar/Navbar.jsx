import React, { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
import './navbar.css';


function Navbar() {

  const[active, setActive] = useState(false);
  const[open, setOpen] = useState(false);

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
        <div className={active ? "navbar_active" : "navbar"}>
            <div className='container'>
              <div className='logo'>
                {/* <Link to='/'> */}
                  <span className='text'>fiverr</span>
                {/* </Link> */}
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
                            <span>Gigs</span>
                            <span>Add New Gig</span>
                          </>
                        )
                      }
                      <span>Orders</span>
                      <span>Messages</span>
                      <span>Logout</span>
                    </div>}
                  </div>
                )}
              </div>
            </div>
            {active && 
              <>
                <hr />
                <div className='menu'>
                  <span>test</span>
                  <span>test2</span>
                </div>
              </>
            }
        </div>
    </>
  )
}

export default Navbar