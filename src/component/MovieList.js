import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


//   Created Movielist component for list the movie 

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }

    // After fetching data,, adding data into list component 
    componentDidMount() {
        this.getdata()

    }

    //  Here fetching data from json server 

    getdata() {
        fetch("http://localhost:3001/movie").then((respone) => {
            respone.json().then((result) => {
                // console.log(result)
                this.setState({ list: result })
            })
        })
    } 

    //  Here deleting movie from list by clicking on delete icon
    delete(id) {
        fetch('http://localhost:3001/movie/' + id, {
            method: 'DELETE',
        }).then((result) => {
            result.json().then((response) => {
                
                this.getdata()    // after deleting data from list refreshing the list
                alert("movie has been deleted")
            })
        })
    }
    render() {

        return (
            <div>
                <h3>Movie List</h3>
                {
                    this.state.list ?
                        <div>
                            {/* Here Creating table for list movie */}
                            <Table striped bordered hover>
                                <thead >
                                    <tr className="bg-primary">
                                        {/* Table head name  */}
                                        <th>S.No</th>
                                        <th>Movie Name</th>
                                        <th>Type</th>
                                        <th>Links</th>
                                        <th>Operation</th>
                                    </tr>
                                    {
                                        this.state.list.map((item, i) =>
                                            

                                            <tr className="table-primary">
                                                {/* Here adding data in table */}
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td><a href={item.link} target="_blank" rel="noreferrer"> Link</a></td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Link to={'#'} onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></Link></td>

                                            </tr>
                                        )
                                    }
                                </thead>
                            </Table>

                        </div>
                        : <p>Please wait...Loading Movie List</p>
                }
            </div>
        );
    }
}

export default MovieList;