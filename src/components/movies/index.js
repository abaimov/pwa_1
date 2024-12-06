import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(movies);
    useEffect(() => {
        setLoading(true);

        axios.get(`https://jsonplaceholder.typicode.com/users`, {})
            .then((response) => {
                setLoading(false);
                setMovies(response?.data);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }, [])

    return (
        <div className="flex flex-wrap -mb-4 gap-2 mt-16">
            {!loading && movies?.length ? movies.map((movie, index) => <div key={movie.id}>{movie.name}</div>) :
                <h2>Loading...</h2>}
        </div>
    )
}

export default Movies
