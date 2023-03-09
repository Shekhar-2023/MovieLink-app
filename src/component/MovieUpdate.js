import React, { Component } from 'react';

class MovieUpdate extends Component {
    constructor(){
        super()
        this.state={
            id:null,
            name:null,
            type:null,
            link:null
        }
    }
//  Working on update list 
// previous data value not coming in input field

    // componentDidMount(){
    //     fetch("http://localhost:3001/movie/"+this.props.id).then((response)=>{
    //         response.json().then((result)=>{
            
    //             this.setState({
    //                 id:result.id,
    //                 name:result.name,
    //                 type:result.type,
    //                 link:result.link

    //             })
                
    //         })
    //     })
    // }
    // update(){
    //     fetch('http://localhost:3001/movie/'+this.state.id,{
    //         method:'PUT',
    //         body:JSON.stringify(this.state),
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     }).then((result)=>{
    //         result.json().then((response)=>{
    //             // console.log(response)
    //                 alert('Movies has benn updated')
    //         })
    //     })
        
    // }
    render() {
        
        return (
            <div>
                <h3>Movie Update </h3>
                <h4>This feature is not working... sorry for your inconveniens</h4>
                <div>
                    <input onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder='id'
                    value={this.state.id} className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder='Moviename'
                    value={this.state.name} className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ type: event.target.value }) }} placeholder='Type'
                    value={this.state.type} className='input'></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ link: event.target.value }) }} placeholder='Link'
                    value={this.state.link} className='input'></input>
                    <br /><br />
                    <button onClick={()=>{this.update()}} className='input'>Update Movie</button>

                </div>
            </div>
        );
    }
}

export default MovieUpdate;