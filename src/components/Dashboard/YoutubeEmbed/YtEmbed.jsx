import React from 'react';

const YtEmbed = ({videoId}) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '50.25%', height: 50 }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '95%',
          height: '100%',
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default YtEmbed;
