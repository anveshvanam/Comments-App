// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onClickLikeUpdate, onDeleteComment} = props
  const {
    name,
    comment,
    isLiked,
    id,
    postTime,
    initialClassName,
  } = commentDetails

  const onClickLike = () => {
    onClickLikeUpdate(id)
  }
  const onClickDelete = () => {
    onDeleteComment(id)
  }
  const timeSincePost = formatDistanceToNow(postTime)

  return (
    <li className="comment-item">
      <div className="name-container">
        <p className={initialClassName}>{name.slice(0, 1).toUpperCase()}</p>
        <p className="name-item">{name}</p>
        <p className="time">{timeSincePost}</p>
      </div>
      <p className="comment-content">{comment}</p>
      <div className="like-delete-container">
        <img
          src={
            isLiked
              ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
          }
          className="like-image"
          alt="like"
        />
        <button className="like" type="button" onClick={onClickLike}>
          Like
        </button>
        <button
          className="delete"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
