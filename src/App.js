import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const clientId = "zE8Q8ZqNjUjnIuUtZ2fODg9_qoPgHPv33ppYfsojSbg";
  const [result, setResult] = useState([]);

  useEffect(() => {
    handleSubmit();
  }, [])



  const handleChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = () => {

    if (image === '') {
      var imageToSearch = "nature"
    }
    else {
      imageToSearch = image
    }


    const url = "https://api.unsplash.com/search/photos?per_page=999&query=" + imageToSearch + "&client_id=" + clientId;
    // const url = "https://unsplash.com/collections/1163637/furniture" + imageToSearch + "&client_id=" + clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };


  return (
  <div className="app">
    <div className="heading">
      <h1>Gallery Template #1</h1>
    </div>

    <div className="input">
      <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
        </div>  <button onClick={handleSubmit} type="submit">Search</button><div className="result">
          {result.map((image) => (
            <>
              <div className="card">
                <img src={image.urls.thumb} alt={image.urls} />
                <p className="username">Photo by {image.user.name}</p>
                <p className="like">👍 {image.likes}</p>
              </div>
            </>
          ))}
        </div>
  </div>
  );
}

export default App;
