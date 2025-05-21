import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import secondAnimation from "../assets/revew.json"

const SuccessStories = () => {
    return (
        <div className="w-72 mx-auto text-center">
            <h1 className="text-2xl font-bold">Reviw</h1>
            <div className="flex ">
                <Lottie animationData={animationData} loop={true} />
                <Lottie animationData={secondAnimation} loop={true} />
            </div>
        </div>
    );
};

export default SuccessStories;
