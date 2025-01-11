import video1 from '../assets/4010184-uhd_4096_2160_25fps.mp4';
import video2 from '../assets/7914851-hd_1920_1080_30fps.mp4';
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id='home'>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Unleash Your Gaming Potential at <span className="bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent">GamesVerse!</span>
        </h1>
        <p className="mt-10 text-center text-lg text-gray-400 max-w-4xl">Play, Learn, and Connect with Gamers Worldwide. The Adventure Starts Here.</p>
        <div className="flex justify-center my-2">
            <a href="#" className="bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 text-white py-2 px-6 rounded-md">Get Started</a>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 text-white py-2 px-6 ml-2 rounded-md">Join Now</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video className="rounded-lg w-1/2 border border-gray-600 shadow-gray-600 mx-2 my-4" src={video1} type="video/mp4" muted autoPlay loop></video>
            <video className="rounded-lg w-1/2 border border-gray-600 shadow-gray-600 mx-2 my-4" src={video2} type="video/mp4" muted autoPlay loop></video>
        </div>
    </div>
  )
}

export default Hero