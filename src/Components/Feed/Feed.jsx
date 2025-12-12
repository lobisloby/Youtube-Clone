import './Feed.css'
import { Link } from 'react-router-dom'
import { formatViews } from '../../utils/format'
import moment from 'moment'
import { useFetch } from '../../hooks/useFetch'
const API_KEY = import.meta.env.VITE_API_KEY
const Feed = ({ category }) => {
  const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

  const { data } = useFetch(videoList_url, [category])

  return (
    <div className="feed">
      {data?.items?.map((item) => {
        return (
          <Link
            key={item.id}
            to={`video/${category}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {formatViews(item.statistics.viewCount)} Views •&nbsp;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed
