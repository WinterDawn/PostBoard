import React, {Component} from 'react';
import AnswerCard from './AnswerCard'


/*
    create a list of answers using AnswerCard component
*/
class AnswerList extends Component {
    static defaultProps = {
        answers:[]
    }
    render () {
        console.log(this.props.answers)
        return (
            <div className="w3-col m7">
            {
                this.props.answers.map((answer) => {
                    return <AnswerCard key={answer.id} answer={answer} />;
                })
            }  
            </div>
        )
    }
}

export default AnswerList