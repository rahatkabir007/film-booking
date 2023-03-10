import React from 'react';
import "./Movies.css";

const Movies = (props) => {
    const { name, genre, image, year, actor, rating, price } = props.movie;
    return (

        <div className="col-md-4 gy-4">
            <div class="card h-100 ">
                <div class="row gx-3 d-flex align-items-center ">
                    <div class="col-md-5 mx-auto ">
                        <img src={image} class="img-fluid rounded-start h-75 " alt="..."></img>
                    </div>
                    <div class="col-md-7">
                        <div className="movie-info " >
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Genre: {genre}</p>
                            <p class="card-text">Cast: {actor}</p>
                            <p class="card-text">Release Year: {year}</p>
                            <p class="card-text">IMDB Rating:{rating} </p>
                            <p class="card-text">Price: {price}$</p>
                            <button onClick={() => props.handleDetails(props.movie)} className="btn btn-warning"> <span> <i class="fas fa-shopping-cart"></i></span> Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Movies;