import React,{Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);

        this.initialState ={
            first:'',
            last:''
        };

        this.state = this.initialState;
    }
    handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ 
            [name] : value
        }); 
        
    }
    handleAdd =()=>{
        this.props.addUser(this.state);
        this.setState(this.initialState);

    }

   render(){
    return(
        <div className='card'>
            <h5 className="card-header">Add User</h5>
            <div className="card-body">
                <form>
                <div className="form-group">
                 <input className="form-control" type="text" value={this.state.first} name="first" placeholder="Enter First Name" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                 <input className="form-control" type="text" value={this.state.last} name="last" placeholder="Enter Last Name" onChange={this.handleChange}/> 
                </div>   
                <button type="button" className="btn btn-primary" onClick={this.handleAdd}>Submit</button>
                </form>
            </div>
        </div>
    )
   } 
}           

export default Form;

