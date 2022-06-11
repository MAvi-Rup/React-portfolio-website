import { DiNodejs } from "react-icons/di";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3,SiReact,SiExpress,SiJavascript } from "react-icons/si";
import React from 'react';

const About = () => {
    return (
        <div className='py-9 md:px-8'>
            <h1 className='text-4xl text-center font-bold text-primary py-7'>My Skill</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                <div>
                    <div class="card bg-base-100 shadow-xl  bg-neutral">

                        <div class="card-body items-center text-center">
                            <div class="avatar">
                                <div class="w-44 rounded-full">
                                    <img src="https://i.ibb.co/b50HbTv/IMG-20220610-005137.jpg" />
                                </div>
                            </div>
                            <h2 class="card-title text-white">I am professional in</h2>
                            <div className='py-7'>
                                <div className='flex flex-wrap'>
                                <ImHtmlFive className="h-11 mx-3 text-5xl text-white"/>
                                <SiCss3 className="h-11 mx-3 text-5xl text-white"/>
                                <SiJavascript className="h-11 mx-3 text-5xl text-white"/>
                                <SiReact className="h-11 mx-3 text-5xl text-white"/>
                                <SiExpress className="h-11 mx-3 text-5xl text-white"/>
                                <DiNodejs className="h-11 mx-3 text-5xl text-white"/>


                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="card bg-base-100 shadow-xl  bg-neutral">

                        <div class="card-body">
                            <div className="py-6">
                            <h2 class="card-title text-white">Frontend Development</h2>
                            <progress class="progress progress-accent w-100" value="85" max="100"></progress>
                            </div>
                            <div className="py-6">
                            <h2 class="card-title text-white">Backend Development</h2>
                            <progress class="progress progress-accent w-100" value="75" max="100"></progress>
                            </div>
                            <div className="py-6">
                            <h2 class="card-title text-white">Fullstack Development</h2>
                            <progress class="progress progress-accent w-100" value="70" max="100"></progress>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;