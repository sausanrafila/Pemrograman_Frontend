import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  const { title, date, poster, type } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
             
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
            </div>
            <div>
              <Button size='sm'>Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
