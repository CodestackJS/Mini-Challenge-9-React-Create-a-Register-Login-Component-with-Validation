

const Register = () => {
  return (
    <>

        <div className='myContainer'>
         <h1 className="mt-5 text-center">Register: </h1>

        <label className="form-label">First Name: </label>
        <input className="form-control"/>

        <label className="form-label">Last Name: </label>
        <input className="form-control"/>
        <label className="form-label">Email: </label>
        <input className="form-control"/>

        <label className="form-label">Password: </label>
        <input className="form-control"/>

        <label className="form-label">Confirm Password: </label>
        <input className="form-control"/>

        <button className='mt-3 btn btn-primary'>Submit</button>
        </div>
    
    
    
    </>
  )
}

export default Register