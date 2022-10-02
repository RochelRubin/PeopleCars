import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component{
    state={
        person:{
            firstName:'',
            lastName: '',
            age:'',
            id:''
        },
        car:{
            make:'',
            model:'',
            year: '',
            personId: '',
            
        }
    }
    componentDidMount=async()=>{
        const {id} = this.props.match.params;
        const {data}=await axios.get(`api/people/getpersonbyid?id=${id}`);
        this.setState({person:data});
    }
    onTextChange = e =>{
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
        
    
 
    }
    onSubmitClick = async () => {
        const { id } = this.props.match.params;
        const { make, model, year } = this.state.car;
        
        await axios.post('/api/people/addcar', {make,model,year,personId: id });
        this.props.history.push('/'); 
    }
    render(){
   
        const{make, model, year}= this.state.car;
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h1>Add a car for {this.state.person.firstName} {this.state.person.lastName}</h1>
                <input type="text" value={make} name='make' onChange={this.onTextChange} className="form-control" placeholder="Make"></input>
                <input type="text" value={model} name='model' onChange={this.onTextChange} className="form-control" placeholder="Model"></input>
                <input type="text" value={year} name='year' onChange={this.onTextChange} className="form-control" placeholder="Year"></input>
                <button onClick={this.onSubmitClick} className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        )
    }


}
export default AddCar;