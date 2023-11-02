import React from 'react'
import './featured.css';

function Featured() {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <div className='sea'>
                            <img src='./img/search.png' alt='search icon' />
                            <input type='text' placeholder='try building mobile app' />
                        </div>
                        <button className='searchbtn'>Search</button>
                    </div>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className='right'>
                <img src='./img/man.png' alt='man' />
            </div>
        </div>
    </div>
  )
}

export default Featured