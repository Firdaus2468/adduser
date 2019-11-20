import React from 'react';

const Tablebody = (props)=>{
  const rows = props.userDetails.map((user,index)=>{
    return (
      <tr key={index}>
      <td>{index+1}</td>
      <td >{user.first}</td>
      <td >{user.last}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={()=>props.delUser(index)}>Danger</button>
      </td>
      </tr>
    );
  });

  return (
  <tbody>{rows}</tbody>
  );

}

class Table extends React.Component{
  render(){
    return(
      <table className="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>city</th>
            <th></th>
          </tr>
        </thead>
        <Tablebody userDetails={this.props.userDetails} delUser={this.props.delUser}/> 

      </table>
    );
  }
}

export default Table;