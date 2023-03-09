import React, { Component } from 'react';

// This component is used to Add-Movie 

class MovieCreate extends Component {
    constructor() {
        super()
        this.state = {
            id: null,
            name: null,
            type: null,
            link: null
        }
    }
    //  fetching json file and adding movie
    add() {
        fetch('http://localhost:3001/movie', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            result.json().then((response) => {
                // console.log(response)
                alert('Movies has benn added')
                this.setState({
                    id:  '',
                    name: "",
                    type: "",
                    link: ""
                })
            })
        })


    }
    render() {
        return (
            <div className='mc'>
                {/* Here movie item field are here to add */}
                <h3>Add-Movie</h3>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder='id' className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder='Moviename' className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ type: event.target.value }) }} placeholder='Type' className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ link: event.target.value }) }} placeholder='Link' className='input'></input>
                    <br /><br />
                    <button onClick={() => { this.add() }} className='input'>Add Movie</button>

                </div>
            </div>
        );
    }
}

export default MovieCreate;