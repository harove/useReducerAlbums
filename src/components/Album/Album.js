import './Album.css'
export const Album = (({album})=>{
  return (
    <li className='outer-li'>
      <ul>
        <li className='inner-horizontal-li'>
          {album.id}
        </li>
        <li className='inner-horizontal-li'>
          {album.title}
        </li>
      </ul>
    </li>
  )
})