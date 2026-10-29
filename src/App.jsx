import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);

  async function handleButtonClick() {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 hover:scale-95 text-white font-bold py-2 px-4 rounded mb-6 cursor-pointer transition-transform"
        onClick={handleButtonClick}
      >
        Click me
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((elem) => (
          <div key={elem.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={elem.download_url}
              alt={elem.author}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="p-2 text-sm text-gray-300 text-center font-medium">
              {elem.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;