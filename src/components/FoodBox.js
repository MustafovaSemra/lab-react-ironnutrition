import React from 'react';

export default function FoodBox({ foods }) {
  const ShowFood = () => {
    return foods.map((eachFood) => {
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

  return <div>{ShowFood()}</div>;
}
