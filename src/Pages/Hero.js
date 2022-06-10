import React from 'react';

const Hero = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage: "url(https://i.ibb.co/vHxkMbD/img1.jpg)"}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold"><span className='text-primary'>Hi! I am</span> Avirup Mondol.</h1>
                        <p class="mb-5">I am a junior frontend developer.</p>
                        <button class="btn btn-primary mx-5"><a target='_blank' href="https://drive.google.com/file/d/1AMHXakUncCrdskwROirH3MaVmRl22Lf3/view">Resume</a></button>
                        <button class="btn btn-primary"><a target='_blank' href="https://drive.google.com/file/d/1AMHXakUncCrdskwROirH3MaVmRl22Lf3/view">Hire Me</a></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;