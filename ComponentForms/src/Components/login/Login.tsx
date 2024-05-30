import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
  email: z.string().email({message:"Email is required"}),
  password: z.string().min(20,{message:"Password must be at least 20 characters long!"})
})

type FormData = z.infer<typeof schema>

const Login = () => {
    const{register,handleSubmit, formState:{errors}} = useForm<FormData>
    ({resolver:zodResolver(schema)})

    console.log(errors);

    const onHelpSubmit = (data:FieldValues) => {
      console.log(data);
    }



  return (
    <>
        <form onSubmit={handleSubmit(onHelpSubmit)}>

        <div className=' myContainer'>
        <h1 className="mt-5 text-center">Login: </h1>
        <label htmlFor="" className="form-label">Email: </label>
        <input {...register('email')}id="email" type="email" className="form-control"/>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label htmlFor="" className="form-label">Password: </label>
        <input id="password" type="password" className="form-control"/>
        {errors.password && <p className="text-danger">{errors.password.message}</p>}

        <button className='mt-3 btn btn-primary'>Submit</button>
        </div>


        </form>
  
    
    </>
  )
}

export default Login