import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import BlogList from "../components/BlogList";
import About from "../components/About";
import axios from "axios";
import gsap from "gsap";
import Auth from "../components/Auth";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

const backendURL = "http://localhost:5000";

function Home() {
    const [Data, setData] = useState([{}]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        /*gsap.from(".Content", {
            opacity: 0,
            y: 100,
            duration: 0.5,
            delay: 0.5,
            ease: "power1",
        });*/
        async function fetchBlogs() {
            const response = await axios.get(`${backendURL}/blogs`);
            setData(response.data);
        }
        fetchBlogs();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-[#231e1d] text-[#b8b4b0]  w-full flex flex-col font-[Alegreya]">
                <Title title="Av Blogs" />
                <div className="Content w-full flex justify-around p-20">
                    <BlogList BlogsData={Data} />
                    <div className="Content flex flex-col py-10 px-16 -mr-16 w-[35%]">
                        <About />
                        {user ? (
                            <div className="flex gap-4 mt-10">
                                <div className="border-2 border-white rounded-md w-fit p-4">
                                    <Link to={"/Profile"}>Profile</Link>
                                </div>
                                <div className="border-2 border-white rounded-md w-fit p-4">
                                    <Link to="/Editor/ViewAll">Manage Blogs</Link>
                                </div>
                            </div>
                        ) : (
                            <Auth />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
