import React from "react";
import { Link } from 'react-router-dom'
import "./index.css";

export function Home() {
    return (
        <>
            <div className="container-lg">
                <nav className="border flex justify-center p-2">
                    <Link className="text-2xl mx-10" to="/">Home</Link>
                    <Link className="text-2xl mx-10" to="/about">About</Link>
                    <Link className="text-2xl mx-10" to="/events">Events</Link>
                    <Link className="text-2xl mx-10" to="/contact">Contact</Link>
                </nav>
                <div className="bg-[url('https://www.swbr.com/wp-content/uploads/2019/12/ME-Engineering-Office-Renovation_3.jpg')] bg-cover h-screen w-screen py-20">
                    <div className="bg-[#22201eb0] w-[60%] rounded-r-full w-1/2 p-10">
                        <div className="m-20">
                            <h1 className="text-white mx-10 my-1">This Awesome Slogan is</h1>
                            <h1 className="text-white text-3xl font-bold mx-10 my-2">TEMPORARY</h1>
                            <p className="text-white mx-10 mt-2">Contents are for display purposes only. This space is</p>
                            <p className="text-white mx-10">reserved for more details about the company. Additional</p>
                            <p className="text-white mx-10">business details will be uploaded on this website soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <>
            <div className="container-lg">
                <nav className="border flex justify-center p-2">
                    <Link className="text-2xl mx-10" to="/">Home</Link>
                    <Link className="text-2xl mx-10" to="/about">About</Link>
                    <Link className="text-2xl mx-10" to="/events">Events</Link>
                    <Link className="text-2xl mx-10" to="/contact">Contact</Link>
                </nav>
                <div className="h-screen flex justify-center p-20">
                    <div className="w-[40%] h-[60%] bg-green-300 hover:scale-110 hover:shadow-2xl rounded-lg px-16 py-10 text-center m-10">
                        <h1 className="text-3xl font-bold">MISSION</h1>
                        <p className="uppercase my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa molestiae tenetur perspiciatis nemo, nulla odio reprehenderit iusto expedita neque vitae dolorum, enim excepturi non reiciendis voluptatum culpa cum numquam vero!</p>
                    </div>
                    <div className="w-[40%] h-[60%] bg-blue-300 hover:scale-110 hover:shadow-2xl rounded-lg px-16 py-10 text-center m-10 ">
                        <h1 className="text-3xl font-bold">VISION</h1>
                        <p className="uppercase my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel molestiae tenetur. Iusto vel quasi mollitia sapiente iure possimus neque accusantium reiciendis nobis deserunt ex, quibusdam repellendus animi eius cum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Events() {
    return (
        <>
            <div className="container-lg">
                <nav className="border flex justify-center p-2">
                    <Link className="text-2xl mx-10" to="/">Home</Link>
                    <Link className="text-2xl mx-10" to="/about">About</Link>
                    <Link className="text-2xl mx-10" to="/events">Events</Link>
                    <Link className="text-2xl mx-10" to="/contact">Contact</Link>
                </nav>
                <div className="flex flex-wrap justify-center p-20">
                <div className=" flex-wrap w-[60%] shadow-2xl rounded-lg px-16 py-10 text-center">
                        <h1 className="text-3xl font-bold">Company Events</h1>
                    </div>
                    <div className="flex-wrap bg-[url('https://www.trainerbubble.com/wp-content/uploads/2015/09/Team-Building-Training_web.jpg')] bg-cover w-[50%] h-[60%] bg-green-300 shadow-2xl rounded-lg px-16 py-10 text-center m-10">
                        <div className="bg-gray-800/40 text-white">
                            <h1>May 04 2022</h1>
                        <h1 className="text-3xl font-bold">Team Building</h1>
                        <p className="uppercase my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa molestiae tenetur perspiciatis nemo, nulla odio reprehenderit iusto expedita neque vitae dolorum, enim excepturi non reiciendis voluptatum culpa cum numquam vero!</p>
                        </div>
                    </div>
                    <div className="flex-wrap bg-[url('https://www.mousesavers.com/wp-content/uploads/Margaritaville-RO-pool-large.jpg')] bg-cover  w-[50%] h-[60%] bg-blue-300 shadow-2xl rounded-lg px-16 py-10 text-center m-10 ">
                        <div className="bg-gray-800/40 text-white">
                        <h1 className="text-3xl font-bold">Outing</h1>
                        <h1>April 30 2022</h1>
                        <p className="uppercase my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam vel molestiae tenetur. Iusto vel quasi mollitia sapiente iure possimus neque accusantium reiciendis nobis deserunt ex, quibusdam repellendus animi eius cum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Contact() {
    return (
        <>
            <div className="container-lg">
                <nav className="border flex justify-center p-2">
                    <Link className="text-2xl mx-10" to="/">Home</Link>
                    <Link className="text-2xl mx-10" to="/about">About</Link>
                    <Link className="text-2xl mx-10" to="/events">Events</Link>
                    <Link className="text-2xl mx-10" to="/contact">Contact</Link>
                </nav>
                <div className="h-screen flex justify-center">
                    <div className="w-1/2 bg-sky-400 shadow-xl flex flex-col rounded-lg p-10 m-20">
                        <input className="mx-10 my-5 p-3" type="text" placeholder="Name"/>
                        <input className="mx-10 mb-5 p-3" type="text" placeholder="Email"/>
                        <textarea className="mx-10 mb-5 p-3" placeholder="Message" cols="30" rows="10"></textarea>
                        <button className="border mx-auto w-1/2 hover:bg-sky-700 hover:text-white p-3">Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Page404 = () => {
    return (
        <h1>Page not Found.</h1>
    );
}
