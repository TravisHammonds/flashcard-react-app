import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";

function EditScreen() {
  const [deckToEdit, setDeckToEdit] = useState({});
  const { deckId } = useParams();
  const initialFormData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await readDeck(deckId);
        setDeckToEdit(response);
      } catch (err) {
        console.error(err);
      }
    }
    getDeck();
  }, [deckId]);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setDeckToEdit({ ...formData });
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb w-75">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">{deckToEdit.name}</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Edit</a>
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      <form className="w-75" onSubmit={submitHandler}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            className="form-control"
            name="name"
            id="name"
            placeholder={`${deckToEdit.name}`}
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            placeholder={`${deckToEdit.description}`}
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <Link to={`/decks/${deckId}`}>
          <button className="btn btn-secondary m-1">Cancel</button>
        </Link>
        <button type="submit" className="btn btn-primary m-1">
          Submit
        </button>
      </form>
    </>
  );
}

export default EditScreen;
