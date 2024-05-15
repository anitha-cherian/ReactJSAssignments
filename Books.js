// create books component by fetching data from graphql server at localhost:5000/graphql
// // query the books data from the server and display it in the table
// //{
//     books {
//         id
//         title
//         author
//       }
//     }
 
import { useState } from "react";
import styles from "./Books.module.css";
function Books(){
    const [books,setBooks] = useState([]);
    const [error,setError] = useState(null);
 
    fetch('http://localhost:4000/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            {
                books {
                    id
                    title
                    author
                }
            }
            `
        })
    })
 
 
    .then(response => response.json())
 
    .then(data => {
        console.log(data);
        setBooks(data.data.books);
    })
 
    .catch(error => {
        console.log(error);
        setError(error);
    })
 
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
 
 
}
 
export default Books;