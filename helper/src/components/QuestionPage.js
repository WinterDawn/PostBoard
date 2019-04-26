import React, {Component} from 'react';
import PostAnswer from './PostAnswer';
import AnswerList from './AnswerList';

/*
  create webpage for question 
  handle post answers
*/
class QuestionPage extends Component {
  constructor () {
    super()
    this.state = {
      answers:[]
    }
  }

  /*
    get answers data from database
  */
  componentWillMount(){

    let list  = localStorage.getItem('questionlist')
    this.state.list = JSON.parse(list)
    const question = this.state.list.find(x=>x.id==this.props.id)
    this.setState({question: question})
    if(question.answers!=null){
      this.setState({answers:JSON.parse(question.answers)})
    }
  }  

  handlePostAnswer(answer) {
    this.state.answers.push(answer)
    const ans = JSON.stringify(this.state.answers)
    console.log(this.state)
    fetch(`http://localhost:4000/user/answer?answer=${ans}&id=${this.state.question.id}`)
      .catch(err => console.error(err))

    this.setState({
        answers: this.state.answers
    })
    console.log(this.state.answers)
  }

  render() {
    console.log(this.state.answers)
    return (
        <div className="questionPage">
            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <h4>{this.state.question.content}</h4>
              <p>{this.state.question.username}</p>
            </div>
            <PostAnswer onPost={this.handlePostAnswer.bind(this)}/>
            <AnswerList answers={this.state.answers}/>
        </div>
    )
  } 
}

export default QuestionPage;
