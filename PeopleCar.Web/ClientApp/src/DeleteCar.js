import React from 'react';
import axios from 'axios';

import CarRow from './CarRow';

 class DeleteCars extends React.Component{
   
        state={
           cars:[],
            car:{
                make:'',
                model:'',
                year: '',
                personId: ''
                
            }
        }
        componentDidMount=async()=>{
            const {id} = this.props.match.params;
            const {data}=await axios.get(`api/people/getcars?id=${id}`);
            this.setState({cars:data});
        }
        onYesClick=async ()=>{
            const { id } = this.props.match.params;
            await axios.post('/api/peoplecar/deletecars', {id});
            this.props.history.push('/');
        }
        
        onNoClick=()=>{
            this.props.history.push('/');
        }
        render(){
            return(
                <>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </thead>
                    <tbody>
                    {this.state.cars.map(c=>{
                  return <tr key={c.id}>
                
                      <td>{c.make}</td>
                      <td>{c.model}</td>
                      <td>{c.year}</td>
                  </tr>
                  
              })}

                    </tbody>
                    </table>
                <h1>Are you sure you want to delete all these cars?</h1>
                <div className="row">
                    <button onClick={this.onNoClick} className="btn btn-primary btn-block">No</button>
                    <button onClick={this.onYesClick} className="btn btn-primary btn-block">Yes</button>
                </div>
                    </>
                
            )
        }
}
export default DeleteCars;