import React, { Suspense, lazy, useState } from 'react';

const VideoComponent = lazy(()=> import("../components/video"));


const AboutPage = () => {

    const [loadVideo, setLoadVideo]  = useState(false);

    const onLoadVideo=()=>{
        setLoadVideo(true);
    }

  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
      <button onClick={onLoadVideo}> Load Video </button>

      {
        loadVideo &&
      <Suspense fallback={<div> Loading..</div>}>
        <VideoComponent/>
      </Suspense>
      }
    </div>
  );
};

export default AboutPage;
