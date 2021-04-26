import {useState, useEffect} from 'react'
import './App.css';
import { Album } from './components/Album/Album';

function App() {
  const [albums, setAlbums] = useState([])


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6')
    .then(response=>
      response.json()
    )
    .then((json)=>{
      const withHighlighted=json.map(album=>({...album,highlighted:false}))
      setAlbums(withHighlighted)
    })
  })

  
  return (
    <div className="App">
      <ul>
        {albums.map(album=>
          <Album key={album.id} album = {album} />
        )}
      </ul>
    </div>

  );
}

export default App;
