import React, {Component} from 'react';
import { withRouter } from "react-router";

/* 
    handle post new answers to a question
*/
class PostAnswer extends Component {
    static defaultProps = {
        username:''
    }
    constructor () {
        super()
        this.state = {
            content:''
        }
        this.handlePost = this.handlePost.bind(this)
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handlePost () {
        if(!localStorage.userdata){
            this.props.history.push('/login')
        } else {if(this.props.onPost) {
                const username = JSON.parse(localStorage.userdata).username
                const content = this.state.content
                this.props.onPost({username,content})
            }
            this.setState({content:''})}
    }

    render() {
        return (
            <div className="w3-col m7">
                <div className="w3-container w3-padding w3-card w3-white w3-round w3-margin"><br />
                        <div className='comment-field-input'>
                            <textarea 
                                value={this.state.content}
                                onChange={this.handleContentChange.bind(this)} 
                            />
                        </div>
                        <button type="button" className="w3-button w3-theme w3-margin-bottom"
                            onClick={this.handlePost.bind(this)}> 
                            Post
                        </button>
                </div>  
            </div>
        )
    }

}

export default withRouter(PostAnswer)