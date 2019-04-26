import React, {Component} from 'react';
import { Link,  withRouter} from 'react-router-dom';

/*
    create card component for questions
*/
class QuestionCard extends Component {
        
    render() {
        console.log(this.props.question)
        const quesid = this.props.question.id
        return (
            <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <h4>{this.props.question.username}</h4>
                <p>{this.props.question.content}</p>
                <Link to={localStorage.userdata?{pathname:`/question/${quesid}`}:{pathname:`/login`}}><button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">Answer</button> </Link>
            </div>
        )
    }
}

export default withRouter(QuestionCard);