import React from 'react';

const LoadingBar = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
            <div style={{ height: '0.313rem', backgroundColor: 'royalblue', width: '100%', animation: 'loading 1s linear infinite' }}></div>
            <style>{`
                @keyframes loading {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default LoadingBar;
