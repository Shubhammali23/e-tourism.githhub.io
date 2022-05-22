import React from 'react'

const Pax = () => {
  let ob = [{ No: 1, Name: 'ram', sex: 'male', dob: '02/08/1995', age: 22 },
  { No: 1, Name: 'sham', sex: 'male', dob: '01/01/2000', age: 25 }]

  return (
    <div className='col-md-8 offset-md-2'>

      <h3 className='text-center'>Pax Details</h3>
      <table class="table center">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Sex</th>
            <th scope="col">DOB</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {
            ob.map(cust => {
              <tr>
                <th scope="row">{cust.No}</th>
                <td>{cust.Name}</td>
                <td>{cust.sex}</td>
                <td>{cust.dob}</td>
                <td>{cust.age}</td>
              </tr>
            }

            )
          }
        </tbody>
      </table>
      <button className='btn btn-warning btn-details'>Add Pax</button>&nbsp;&nbsp;
      <button className='btn btn-warning btn-details'>Done</button>
    </div>

  )
}

export default Pax