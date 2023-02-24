import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

// Write your code here

class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  onClickLikeUpdate = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
    this.setState()
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, comment, commentsList} = this.state

    const initialBackgroundColorClassName = `avatar ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        postTime: new Date(),
        initialClassName: initialBackgroundColorClassName,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
        postTime: '',
        isLiked: false,
      }))
    } else {
      alert('Enter Name and Comment')
    }
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentsLength = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="comment-input-container">
          <div className="input-container">
            <p className="desc">Say something about 4.0 Technologies</p>
            <form className="comment-form" onSubmit={this.onSubmitForm}>
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                type="comment"
                className="comment"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <div>
                <button className="button" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="comments-container">
          <p className="comments-count">
            <span className="count">{commentsLength}</span> Comments
          </p>
          <ul className="display-comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                onClickLikeUpdate={this.onClickLikeUpdate}
                onDeleteComment={this.onDeleteComment}
                initialsBackground={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
