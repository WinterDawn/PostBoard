import React, {Component} from 'react'

/*
    create profile page
*/
class Profile extends Component {
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount(){
        console.log("localStorage.userdata")
        console.log(localStorage.userdata)
        const token = JSON.parse(localStorage.userdata)
        this.setState({
            first_name: token.firstname,
            last_name: token.lastname,
            email: token.username
        })
    }

    render() {
        return (
            <div className="container">
                <div className='jumbotron mt-5'>
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Profile