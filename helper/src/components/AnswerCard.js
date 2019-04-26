import React, {Component} from 'react';

/*
    create card component for answer
*/
class AnswerCard extends Component {
    render() {
        console.log(this.props.answer)
        return (
            <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                {/* <span className="w3-right w3-opacity">{this.props.answer.price} $</span> */}
                <h4>{this.props.answer.username}</h4>
                <p>{this.props.answer.content}</p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">Upvote</button> 
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">Downvote</button> 
            </div>
        )
    }
}

export default AnswerCard;