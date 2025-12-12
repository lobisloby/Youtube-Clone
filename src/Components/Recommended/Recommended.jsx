import './Recommended.css'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { formatViews } from '../../utils/format'
import moment from 'moment'

const API_KEY = import.meta.env.VITE_API_KEY

const Recommended = ({ categoryId }) => {
  const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

  // ✅ Fixed: Added categoryId to dependency array
  const { data } = useFetch(videoList_url, [categoryId])

  return (
    <div className="recommended">
      {data?.items?.map((item) => {
        return (
          <Link
            key={item.id}
            // ✅ Fixed: Added leading slash
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
          >
            {/* ✅ Fixed: Changed <a> to <div> */}
            <div className="small-thumbnail">
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>
                {formatViews(item.statistics.viewCount)} Views •&nbsp;
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Recommended
