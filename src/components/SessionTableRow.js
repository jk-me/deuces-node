import React from 'react'
import Button from 'react-bootstrap/Button'


class SessionTableRow  extends React.Component{

  click = () =>{
    let id = this.props.s.id
    console.log(id)
    this.props.deleteSess(id)
  }

  render(){
    const {session} = this.props
    return (
      <tr>
        <td>{session.id}</td>
        <td>{session.hand1*1}</td>
        <td>{session.hand2*1}</td>
        <td>{session.hand1 + session.hand2}</td>
        <td>
          <Button className='button' variant='outline-light' onClick={this.click}>Delete</Button>
        </td>

      </tr>
    )
  }
}

export default SessionTableRow
