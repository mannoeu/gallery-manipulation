import React from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = React.useState([
    {
      id: 1,
      image_url:
        "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      image_url:
        "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      image_url:
        "https://images.unsplash.com/photo-1611095971113-9f7542655338?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      image_url:
        "https://images.unsplash.com/photo-1579043369972-1ea56b0dc57c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      image_url:
        "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      image_url:
        "https://images.unsplash.com/photo-1612534859320-79465795d8dc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      image_url:
        "https://images.unsplash.com/photo-1612530706072-0f84bd78734d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      image_url:
        "https://images.unsplash.com/photo-1612529378924-5d9afa8fe407?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      image_url:
        "https://images.unsplash.com/photo-1612525724777-24dc577c386a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      image_url:
        "https://images.unsplash.com/photo-1612537550127-24232ea565aa?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      image_url:
        "https://images.unsplash.com/photo-1612293905838-667dea27cc79?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const [selectFirst, setSelectFirst] = React.useState(null);
  const [selectSecond, setSelectSecond] = React.useState(null);

  const inputRef = React.useRef();

  function handleSelectPhoto(index) {
    if (index === selectFirst) {
      return setSelectFirst(null);
    }
    if (index === selectSecond) {
      return setSelectSecond(null);
    }
    /* ----- */
    if (selectFirst === null) {
      setSelectFirst(index);
    } else if (selectSecond === null) {
      setSelectSecond(index);
    }
  }

  const handleDeletePhoto = React.useCallback(
    (i) => {
      const filtered = photos.filter((photo, index) => index !== i);
      setSelectFirst(null);
      setSelectSecond(null);

      setPhotos(filtered);
    },
    [photos]
  );

  React.useEffect(() => {
    if (photos.length && selectFirst !== null && selectSecond !== null) {
      const item1 = photos[selectFirst];
      const item2 = photos[selectSecond];

      var array = photos;

      array[selectFirst] = item2;
      array[selectSecond] = item1;

      setSelectSecond(null);
      setSelectFirst(null);

      /* erased mark */
    }
  }, [photos, selectFirst, selectSecond]);

  const handleSubmit = () => {
    if (!inputRef.current.value.trim()) {
      return alert("Fill in a valid link");
    }
    const newItem = {
      id: photos.length + 1,
      image_url: inputRef.current.value.trim(),
    };

    setPhotos((photos) => [...photos, newItem]);

    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>
        Welcome!
        <span>Organize your gallery</span>
      </h1>
      <div className="form-group">
        <input ref={inputRef} type="text" placeholder="Link to your image..." />
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <main className="grid-photos">
        {photos?.map((item, index) => (
          <div
            className={`item-photo ${
              index === selectFirst || index === selectSecond
                ? "selected"
                : "unselected"
            }`}
            key={index}
          >
            <div className="control">
              <button
                className="delete"
                onClick={() => handleDeletePhoto(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <img
              onClick={() => handleSelectPhoto(index)}
              src={item.image_url}
              alt="Thumbnail"
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
