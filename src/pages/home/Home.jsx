import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.css';
import React from 'react';

function Home() {
  return (
    <>
        <div className='home'>
            <Featured />
            <TrustedBy />
        
        </div>
    </>
  )
}

export default Home;