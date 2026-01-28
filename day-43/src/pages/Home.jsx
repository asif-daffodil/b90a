import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { useState } from "react";

const Home = () => {
    let [num, setNum] = useState(0);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <Pricing />
            <div className="flex justify-center items-center gap-3">
                <button className="border rounded w-8 aspect-square cursor-pointer hover:bg-indigo-600 hover:text-white" onClick={() => setNum(num + 1)}>+</button>
                <div>{num}</div>
                <button className="border rounded w-8 aspect-square cursor-pointer hover:bg-indigo-600 hover:text-white" onClick={() => setNum(num - 1)}>-</button>
            </div>
        </div>
    );
};

export default Home;