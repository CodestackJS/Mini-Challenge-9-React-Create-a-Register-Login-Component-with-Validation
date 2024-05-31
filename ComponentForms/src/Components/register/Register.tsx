import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
    name: z.string().min(3,{message: "Name must be at least 3 characters long!"}),
    lastName: z.string().min(2,{message: "Last name must be at least 2 characters long!"}),
    email: z.string().email({message:"Email is required"}),
    password: z.string().min(8,{message:"Password must be at least 8 characters long!"}),
    confirmPassword: z.string().min(8,{message:"Password must match!"})
}).refine(confirmedPassword => confirmedPassword.password === confirmedPassword.confirmPassword,{message:"password must match!", 
  path:["confirmPassword"]
});

type FormData = z.infer<typeof schema>

const Register = () => {
  // const {register,handleSubmit, formState:{errors,isValid}} = useForm<FormData> ({resolver:zodResolver(schema)})

  const{register,handleSubmit, formState:{errors}} = useForm<FormData>
  ({resolver:zodResolver(schema)})

  //  console.log(register('name'));
   console.log(errors);
  
  const onHelpSubmit = (data:FieldValues) => {
      console.log(data);
  }




  return (
    <>
   <form onSubmit={handleSubmit(onHelpSubmit)}> 
        <div className='myContainer'>
         <h1 className="mt-5 text-center">Register: </h1>

   
        <label htmlFor="" className="form-label">First Name: </label>
        <input {...register("name")} id="name" type="text" className="form-control"/>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <label className="form-label">Last Name: </label>
        <input {...register('lastName')} id="lastName" type="lastName" className="form-control"/>
        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}

        <label className="form-label">Email: </label>
        <input {...register('email')} id="email" type="email" className="form-control"/>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label className="form-label">Password: </label>
        <input {...register('password')} id="password" type="password" className="form-control"/>
        {errors.password && <p className="text-danger">{errors.password.message}</p>}

        <label className="form-label">Confirm Password: </label>
        <input {...register('confirmPassword')} id="confirmPassword" type="Password" className="form-control"/>
        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
        <button className='mt-3 btn btn-primary'>Submit</button>
        
        </div>
        </form>
    
    
    </>
  )
}

export default Register