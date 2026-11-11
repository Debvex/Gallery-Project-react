import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [index,setIndex] = useState(1);


  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.error("Failed to fetch images:", error));
  }, [index]);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="flex flex-wrap gap-4">
        {images.map((elem) => (
          <Card key={elem.id} elem={elem}/>
        ))}
      </div>
      <div className={"content-center flex justify-center gap-4"}>
          <button
              disabled={index === 1}
              style={{opacity: index === 1 ? 0.5 : 1, cursor: index === 1 ? 'not-allowed' : 'pointer'}}
              className={"bg-white text-sm active:scale-95 text-black rounded-xl px-4 py-2 font-semibold"}
              onClick={() => setIndex(index - 1)}
          >Prev</button>
          <h4 className={'text-white text-xl content-center'}>Page {index}</h4>
          <button
              disabled={index === 20}
              style={{opacity: index === 20 ? 0.5 : 1, cursor: index === 20 ? 'not-allowed' : 'pointer'}}
              className={"bg-white text-sm active:scale-95 text-black rounded-xl px-4 py-2 font-semibold"}
              onClick={() => setIndex(index + 1)}
          >Next</button>
      </div>
    </div>
  );
};

export default App;