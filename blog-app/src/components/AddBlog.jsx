import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const backendURL = "https://av-blog-app-be.vercel.app";

function AddBlog() {
    const { user } = useContext(AuthContext);

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [preview, setpreview] = useState("");
    const [date, setdate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        settitle("");
        setdescription("");
        setpreview("");

        try {
            const response = await axios.post(`${backendURL}/${user._id}/AddBlog`, {
                title,
                description,
                preview,
                date,
            });

            console.log("Blog Submitted Successfully!!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error saving the blog", error);
        }
    };

    return (
        <>
            <div className="ml-[20vw] w-full min-h-screen p-24 text-[#b8b4b0]">
                <h1 className="font-[Montserrat] text-2xl text-white uppercase">
                    Add Blog
                </h1>
                <hr className="mt-4 border-2 rounded" />
                <div className="mt-10">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <label
                                htmlFor="Title"
                                className="absolute text-lg top-0 left-0 -mt-3 ml-4 bg-[#231e1d] text-white font-[Montserrat] ]"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="Title"
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                                className="w-full px-4 py-4 border rounded-md focus:outline-none focus:border-blue-400 bg-transparent font-[Alegreya] placeholder:opacity-20 placeholder:text-white "
                                required
                                placeholder="Title for the blog"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="Description"
                                className="absolute text-lg bg-[#231e1d] top-0 left-0 -mt-3 ml-4 text-white font-[Montserrat] font-extralight "
                            >
                                Description
                            </label>
                            <textarea
                                name="Description"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                className="w-full min-h-[20vh] px-2 py-4  border rounded-md focus:outline-none focus:border-blue-400 bg-transparent font-[Alegreya] placeholder:opacity-20 placeholder:text-white "
                                required
                                placeholder="Content for the blog"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="Preview"
                                className="absolute text-lg bg-[#231e1d] top-0 left-0 -mt-3 ml-4 text-white font-[Montserrat] font-extralight"
                            >
                                Preview
                            </label>
                            <textarea
                                name="Preview"
                                value={preview}
                                onChange={(e) => setpreview(e.target.value)}
                                className="w-full min-h-[20vh] px-2 py-4  border rounded-md focus:outline-none focus:border-blue-400 bg-transparent font-[Alegreya] placeholder:opacity-20 placeholder:text-white "
                                required
                                placeholder="Only upto 100 words"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddBlog;
