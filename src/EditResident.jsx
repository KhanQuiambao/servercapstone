import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditResident() {
    const [data, setData] = useState({
        name: '',
		phoneNo: '',
        email: '',
        password: '',
        address: '',
    })

    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/get/'+id)
        .then(res => {
			setData({...data, 
                name: res.data.Result[0].name,
                phoneNo: res.data.Result[0].phoneNo,
				email: res.data.Result[0].email,
                password: res.data.Result[0].password,
				address: res.data.Result[0].address,
			})
		})
		.catch(err =>console.log(err));
	}, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, data)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/resident')
            }
		})
		.catch(err => console.log(err));
    }
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Resident</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>
                 <div classNames="col-12">
					<label for="inputName" className="form-label">Name</label>
					<input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data, name: e.target.value})} value={data.name} />
				</div>
				<div className="col-12">
					<label for="inputPhone4" className="form-label">Phone Number</label>
					<input type="tel" className="form-control" id="inputPhone4" placeholder='Enter Number' autoComplete='off' onChange={e => setData({...data, phoneNo: e.target.value})} value={data.phoneNo} />
				</div>
				<div className="col-12">
					<label for="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off' onChange={e => setData({...data, email: e.target.value})} value={data.email} />
				</div>
				<div className="col-12">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password' autoComplete='off' onChange={e => setData({...data, password: e.target.value})} value={data.password} />
				</div>
				<div classNames="col-12">
					<label for="inputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off' onChange={e => setData({...data, address: e.target.value})} value={data.address} />
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>   
  )
}

export default EditResident
