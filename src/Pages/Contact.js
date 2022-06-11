import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_e6v2y0y', 'template_l2muyhh', form.current, 'IpoeNfMVvxMb42Fv0')
        .then((result) => {
            toast(result.text);
            e.target.reset()
        }, (error) => {
            toast.error(error.text);
            e.target.reset()
        });
    };
   
    return (
        <div id='contacts' className='py-9 md:px-8'>
            <h1 className='text-xl text-center font-bold text-accent'>Get in Touch</h1>
            <h1 className='text-4xl text-center font-bold text-primary pb-7'>Contact Me</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <div class="card bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title my-5">My Contact Info</h2>
                            <p className='text-2xl my-2'><span className='font-semibold'>Email:</span> avirupmondal19@gmail.com</p>
                            <p className='text-2xl my-2'><span className='font-semibold'>Contact No:</span> +8801758870867</p>
                            <p className='text-2xl my-2'><span className='font-semibold'>Permanent Address:</span> 123/2/1, Middle paikpara, Boubazar Mor.</p>
                            <p className='py-6'>You can contact me by this any way or you can directly send me a message by using this form. Thank You.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={sendEmail} ref={form} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text"  placeholder="Your Name" name='user_name' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email"   placeholder="Your email" name='user_email'  class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" name='message' placeholder="password" class="textarea textarea-primary w-full textarea-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" class="btn btn-primary" value="Send Message" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;