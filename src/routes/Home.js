import React from 'react';
// import PropTypes from "prop-types";
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class  Home extends React.Component {
  state = {
    isLoading: true,
    movies : []
  };

  getMovies = async() => {
    const {
      data: {
        data: { movies }
      }
    } = await  axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // console.log(movies.data.data.movies)
    // console.log(movies)
    this.setState({ movies, isLoading: false})
  }
    //movies배열에 영화 list넣은 후 loading 완료 -> wer'e ready
    //this.setState({ movies : movies})  setState의 movies : axios의 movies
  
  /*async*/ 
  componentDidMount() {
    this.getMovies()
    // const movies = await  axios.get("https://yts.mx/api/v2/list_movies.json")
  }
  
  render(){  //react는 자동적으로 render실행
    const {isLoading, movies} = this.state
    // const {isLoading} = this.state
    // <div>{ isLoading ? "Loading..." : this.movies.state.state.movies }</div>
    return (
      <section className="container">
      { isLoading ? (
      <div className="loader"><span className="loader__text">Loading...</span> </div> 
      ) : (
      <div className="movies">
        {movies.map(movie =>(
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
        ))}
      </div>
      )}
  </section>)
  }
}

export default Home;
