import React from 'react';

const Education = () => {
    return (
        <div id='education' className='py-9 md:px-8'>
            <h1 className='text-4xl text-center font-bold text-primary py-7'>About Me</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <div class="card bg-base-100 shadow-xl items-center px-10 pt-10 ">
                        <div class="avatar">
                            <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  items-center text-center">
                                <img src="https://i.ibb.co/s9BY8zC/IMG-20220611-163954.jpg" />
                            </div>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">
                                <span>I am </span>Frontend Developer.
                            </h2>
                            <p>I have completed my BSc from Independent University Bangladesh in CSE November, 2021 and decided to start my career as a Junior Frontend Developer. From then I am working hard fot it. Now I have skills in HTML, CSS, JavaScript, Bootstrap, ReactJS, Node JS, Express, MongoDB, Tailwind, Firebase etc. Tools that I work with VS Code, GitHub, Firebase, Figma, Chrome Dev Tools, Netlify, Heroku etc.</p>
                            <p>Now, I belive that I make myself prepare for the frontend developer. I have now working experience with modern technologies like ReactJs, Express, Tailwind CSS, Bootstrap, React custom hooks and MERN development.</p>
                            <div class="card-actions justify-center">
                                <div class="badge badge-outline">ReactJS</div>
                                <div class="badge badge-outline">MERN</div>
                                <div class="badge badge-outline">JavaScript ES6</div>

                                <div class="badge badge-outline">Tailwind CSS</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://i.ibb.co/XF7fbDH/img5.jpg" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Independent University Bangladesh</h2>
                            <p><span className='text-xl font-semibold'>BSc:</span> Computer Science and Engineering</p>
                            <p className='pb-7'>2017-2021</p>
                            <div class="card-actions">
                                <button class="btn btn-primary"><a href="http://www.iub.edu.bd/" target="_blank" rel="noopener noreferrer">Visit</a></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Education;