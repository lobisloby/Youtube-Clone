import './PlayVideo.css'
import * as assets from '../../assets/assets'
import { useFetch } from '../../hooks/useFetch'
import { formatViews } from '../../utils/format'
import moment from 'moment'

const API_KEY = import.meta.env.VITE_API_KEY


const PlayVideo = ({ categoryId, videoId }) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
  const { data: videoData } = useFetch(url, [videoId])

  const channelId = videoData?.items?.[0]?.snippet?.channelId

  const channelData_url = channelId
    ? `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    : null

  const { data: channelData } = useFetch(channelData_url, [channelId])

  const commentData_url = videoId
    ? `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=5&videoId=${videoId}&key=${API_KEY}`
    : null

  const { data: commentData } = useFetch(commentData_url, [videoId])
  return (
    <div className="play-video">
      <iframe
        width="1175"
        height="661"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{videoData?.items?.[0]?.snippet?.title}</h3>
      <div className="play-video-info">
        <p>{`${formatViews(
          videoData?.items?.[0]?.statistics?.viewCount
        )} Views •  ${moment(
          videoData?.items?.[0]?.snippet?.publishedAt
        ).fromNow()}`}</p>
        <div>
          <span>
            <img src={assets.like} alt="" />
            {formatViews(videoData?.items?.[0]?.statistics?.likeCount)}
          </span>
          <span>
            <img src={assets.dislike} alt="" />6
          </span>
          <span>
            <img src={assets.share} alt="" />
            Share
          </span>
          <span>
            <img src={assets.save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData?.items?.[0]?.snippet?.thumbnails?.default?.url}
          alt=""
        />
        <div>
          <p> {videoData?.items?.[0]?.snippet?.channelTitle} </p>
          <span>
            {formatViews(channelData?.items?.[0]?.statistics?.subscriberCount)}{' '}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {(videoData?.items?.[0]?.snippet?.description ?? '').slice(0, 250)}
        </p>
        <hr />
        <h4>{`${formatViews(
          videoData?.items?.[0]?.statistics?.commentCount ?? 0
        )} Comments`}</h4>
        {/* ✅ Fixed: Map through all comments dynamically */}
        {commentData?.items?.map((comment, index) => {
          const commentSnippet = comment?.snippet?.topLevelComment?.snippet
          return (
            <div className="comment" key={index}>
              <img
                src={
                  commentSnippet?.authorProfileImageUrl || assets.defaultUser
                }
                alt=""
                onError={(e) => {
                  e.target.src = assets.defaultUser // fallback if image fails
                }}
                referrerPolicy="no-referrer" // ✅ Important for YouTube images!
              />
              <div>
                <h3>
                  {commentSnippet?.authorDisplayName}
                  <span>{moment(commentSnippet?.publishedAt).fromNow()}</span>
                </h3>
                <p>{commentSnippet?.textDisplay}</p>
                <div className="comment-action">
                  <img src={assets.like} alt="" />
                  <span>{formatViews(commentSnippet?.likeCount)}</span>
                  <img src={assets.dislike} alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PlayVideo
