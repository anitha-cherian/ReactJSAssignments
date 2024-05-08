
// define AlbumList functional component to fetch the data from the JSONPlaceholder API and display the list of Albums. The API endpoint is https://jsonplaceholder.typicode.com/albums. The component should have the following features:
import { useEffect, useState } from "react";
// The component should have a state variable posts to store the list of posts fetched from the API.
// we will javascript fetch API to fetch the data from the API endpoint.
 
function AlbumList() {
 const [albums, setAlbums] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums",
    )
        .then((response) =>
            {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch data");
            }
    )
    .then((data) => {
        console.log(data);
        setAlbums(data)
        setIsLoading(false);
    })
    .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError("Failed to fetch data");
    })
}, []);

return (
    <div>
        <h1>Albums</h1>

        {/* if loading show loading message else show album list */}

            {isLoading ? <h1>Loading...</h1> :  <ul>
            {albums.map((album) => (
                <li key={album.id}>{album.title}</li>
            ))}
        </ul>}
         
    </div>
);
}

export default AlbumList;