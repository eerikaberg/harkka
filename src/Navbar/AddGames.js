import "../components/App.css";
import { useRef } from "react";

const AddGame = (props) => {
  const nameRef = useRef("");
  const devRef = useRef("");
  const platRef = useRef("");
  const relRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const game = {
      name: nameRef.current.value,
      dev: devRef.current.value,
      plat: platRef.current.value,
      rel: relRef.current.value,
      desc: descRef.current.value,
      img: imgRef.current.value,
    };

    props.onAddGame(game);

    nameRef.current.value = "";
    devRef.current.value = "";
    platRef.current.value = "";
    relRef.current.value = "";
    descRef.current.value = "";
    imgRef.current.value = "";
  };

  return (
    <div className="body">
      <main className="layout ">
        <h1>Add Games</h1>
        <hr />

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="text">Game name:</label>
            <textarea rows="1" name="name" id="texta1" ref={nameRef}></textarea>
          </div>
          <div>
            <label htmlFor="text">Developer(s):</label>
            <textarea rows="1" name="dev" id="texta1" ref={devRef}></textarea>
          </div>
          <div>
            <label htmlFor="text">Platform(s):</label>
            <textarea rows="1" name="plat" id="texta1" ref={platRef}></textarea>
          </div>
          <div>
            <label htmlFor="text">Release Date:</label>
            <textarea rows="1" name="rel" id="texta1" ref={relRef}></textarea>
          </div>
          <div>
            <label htmlFor="text">Description about game:</label>
            <textarea rows="1" name="desc" id="texta2" ref={descRef}></textarea>
          </div>
          <div>
            <label htmlFor="text">Image (link):</label>
            <textarea rows="1" name="img" id="texta3" ref={imgRef}></textarea>
          </div>

          <button>Add Game</button>
        </form>
      </main>
    </div>
  );
};

export default AddGame;
