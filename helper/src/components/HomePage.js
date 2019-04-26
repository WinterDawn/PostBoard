import React, {Component} from 'react';

import PostQuestion from './PostQuestion'
import QuestionList from './QuestionList';

/*
  create website home page
  handle post questions
*/
class HomePage extends Component {
  constructor () {
    super()
    this.state = {
      questions: []
    }
  }

  /*
    get questions data from database
  */
  componentWillMount(){
    let list  = localStorage.getItem('questionlist')
    list = JSON.parse(list)
    const qlist = list.map((item)=>{return {id:item.id, username:item.username, content:item.content, answerList:item.answers} })
    this.setState({questions: qlist})
  }

  handlePostQuestion(question) {
    this.state.questions.push(question)
    localStorage.setItem('questionlist',JSON.stringify(this.state.questions))
    fetch(`http://localhost:4000/user/ask?question=${question.content}&name=${question.username}`)
      .catch(err => console.error(err))
    this.setState({
      questions: this.state.questions
    })
  }

  render() {
    return (
        <div className="homepage">
            <PostQuestion onPost={this.handlePostQuestion.bind(this)}/>
            <QuestionList questions={this.state.questions}/>
        </div>
    )
  } 
}

export default HomePage;
