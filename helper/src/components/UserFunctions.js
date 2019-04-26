import axios from 'axios'
/*
    functions to new user register and existed user login
*/

export const register = newUser => {
    return axios
    .post('http://localhost:4000/user/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Reistered")
    })
}

export const login = user => {
    return axios
    .post('http://localhost:4000/user/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userdata', JSON.stringify(res.data))
        return res.data
    })
}