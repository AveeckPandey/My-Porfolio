import React from 'react';
// In a real project, you would import DotLottieReact from the npm package:
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ComingSoon = () => {
    return (
<section id='commingsoon'>        <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-gray">
           <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Coming{" "}            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
              Soon
            </span>
            </h2>
            <p className="text-xl mb-8 max-w-lg text-center">
                We're working hard to bring you something amazing.
                Stay tuned for exciting updates!
            </p>
            <DotLottieReact
                src="https://lottie.host/09ba81df-8914-4417-acaa-1a129b60f9b6/PVSwZIeTNB.lottie"
                loop
                autoplay
                style={{ width: '350px', height: '350px' }} // Increased size slightly
                className="my-8" // Added some margin
            />
            <p className="mt-8 text-lg ">
                Follow us for more information.
            </p>
            {/* You could add social media icons/links here */}
        </div></section>
    );
};

export default ComingSoon;
