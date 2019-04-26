import React, {Component} from 'react';
import QuestionCard from './QuestionCard'


/*
    create a list of questions using QuestionCard component
*/
class QuestionList extends Component {
    static defaultProps = {
        questions:[]
    }
    render () {
        console.log(this.props.questions)
        return (
            <div className="w3-col m7">
            {
                this.props.questions.map((question) => {
                    return <QuestionCard key={question.id} question={question} />;
                })
            }  
            </div>
        )
    }
}

export default QuestionList