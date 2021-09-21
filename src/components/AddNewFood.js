import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AddNewFood() {
  const [addFood, setAddFood] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [allFood, setAllFood] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`https://ironrest.herokuapp.com/IronNutition`);
    setAllFood(res.data);
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'image') {
      setImage(e.target.value);
    } else if (e.target.name === 'calories') {
      setCalories(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
    };

    let res = await axios.post(
      'https://ironrest.herokuapp.com/IronNutrition',
      newFood
    );

    let res2 = await axios.get(`https://ironrest.herokuapp.com/IronNutrition`);
    setAllFood(res2.data);
  };

  const showFood = () => {
    return allFood.map((eachFood) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={eachFood.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{eachFood.name}</strong> <br />
                  <small>{eachFood.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={() => setAddFood(true)} className="button is-info">
        Add New Food
      </button>
      {addFood ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input onChange={handleChange} type="text" name="name" />
            <br />
            <label>Image:</label>
            <input onChange={handleChange} type="text" name="image" />
            <br />
            <label>Calories:</label>
            <input onChange={handleChange} type="number" name="calories" />
            <br />
            <button type="submit">Add Food</button>
          </form>
        </div>
      ) : null}
      <div>{showFood()}</div>
    </div>
  );
}
