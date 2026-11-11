import React, {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [index,setIndex] = useState(1);


  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.error("Failed to fetch images:", error));
  }, [index]);

  return (
    <div className="bg-black text-white min-h-screen p-4">


      <div className="flex flex-wrap gap-4">
        {images.map((elem) => (
          <div key={elem.id} className="rounded-lg overflow-hidden shadow-lg">
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
      <div className={"content-center flex justify-center gap-4"}>
          <button className={"bg-white text-sm cursor-pointer active:scale-95 text-black rounded-xl px-4 py-2 font-semibold"}
          onClick={() => {
              if(index > 1){
                  setIndex(index - 1);
              }else{
                  console.log("Cannot go back further");
              }
          }}>Prev</button>
          <button className={"bg-white text-sm cursor-pointer active:scale-95 text-black rounded-xl px-4 py-2 font-semibold"}
          onClick={() => {
              setIndex(index + 1);}
          }>Next</button>
      </div>
    </div>
  );
};

export default App;