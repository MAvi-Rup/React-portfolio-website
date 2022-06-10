import React from 'react';
import { BsGithub } from "react-icons/bs";

const Projects = () => {
    return (
        <div className='py-9 md:px-8'>
            <h1 className='text-4xl text-center font-bold text-primary py-7'>Projects</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <div class="card bg-base-100  bg-neutral shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/4mBBrsd/img2.jpg" alt="project-1" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Ceramic Tiles (MERN Product Manufacturer Website)</h2>
                        <p className='text-white'><span className='font-bold'>Key Features:</span> <br />User and Admin separate dashboard authorization, JWT token, CRUD opearation. </p>
                        <button class="btn btn-link text-accent">More Details</button>
                        <div class="card-actions">
                            <button class="btn btn-primary"><a href="https://product-manufacture-auth.web.app/" target="_blank">Live Link</a></button>
                            <button class="btn btn-accent text-4xl"><a href="https://github.com/MAvi-Rup/MERN-Fullstack-Manufacuture-Website-" target="_blank"><BsGithub /></a></button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100  bg-neutral shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/q0zSyfR/img3.jpg" alt="project-2" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Moments Photography (Firebase Authentication Project)</h2>
                        <p className='text-white'><span className='font-bold'>Key Features:</span> <br />MongoDB backend with express, CRUD operation, JWT token, user authentication.</p>
                        <button class="btn btn-link text-accent">More Details</button>
                        <div class="card-actions">
                            <button class="btn btn-primary"><a href="https://warhouse-management-system.web.app/" target="_blank">Live Link</a></button>
                            <button class="btn btn-accent text-4xl"><a href="https://github.com/MAvi-Rup/MERN-Warehouse-Management-Website-Client" target="_blank"><BsGithub /></a></button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100  bg-neutral shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/W0H3mwT/img4.jpg" alt="project-3" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Moments Photography (Firebase Authentication Project)</h2>
                        <p className='text-white'><span className='font-bold'>Key Features:</span> <br />Firebase login and register, Individual product load and CRUD operation.</p>
                        <button class="btn btn-link text-accent">More Details</button>
                        <div class="card-actions">
                            <button class="btn btn-primary"><a href="https://moments-photography-8829a.web.app/" target="_blank">Live Link</a></button>
                            <button class="btn btn-accent text-4xl"><a href="https://github.com/MAvi-Rup/Moments-Photography-firebase-Authentication-" target="_blank"><BsGithub /></a></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;