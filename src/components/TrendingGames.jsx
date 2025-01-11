import { GameCard } from "../constants/constants";

const TrendingGames = () => {
  return (
    <div className="container max-w-7xl mx-auto" id="games">
      {/* Header Section */}
      <div className="my-2 mx-3 flex items-center justify-between px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Trending Games</h1>
        <button className="bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-6 rounded-md">
          View All
        </button>
      </div>
      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {GameCard.map((game, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative height-auto flex flex-col justify-between"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{game.name}</h2>
              <p className="text-gray-400">{game.Description}</p>
            </div>
            <div className="p-4">
            <button className="bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-6 rounded-md mt-4 absolute bottom-0 z-20 py-2 px-2">
                Play Now
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
