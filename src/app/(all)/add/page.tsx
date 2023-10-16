'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"


type Inputs = {
    name: string
    description: string
}


export default function App() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        // console.log(data);
        axios.post("/api/users", data)
        .then(data=>{
            console.log(data);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your work has been created',
                showConfirmButton: false,
                timer: 1500
              })
router.push("/")
        })
    } 
        

    

    // console.log(watch("example")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            {errors.name && <span>This field is required</span>}


            <div className="mxauto">
                <div className="parents">
                    <div className="card">
                        <div className="logo">
                            <span className="circle circle1"></span>
                            <span className="circle circle2"></span>
                            <span className="circle circle3"></span>
                            <span className="circle circle4"></span>
                            <span className="circle circle5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                                    <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                                    <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                                    <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                                </svg>
                            </span>

                        </div>
                        <div className="glass"></div>
                        <div className="content">
                            <span className="title">Add your data</span>
                            <div className="inputGroup">
                                <input className="" placeholder="name" {...register('name')} required />

                            </div>
                            <div className="inputGroup">
                                <input className="" placeholder="description" {...register("description")} required/>

                            </div>

                        </div>
                        <div className="bottom">

                            <button className="btn">
                                <span className="btn-text-one">Post</span>
                                <span className="btn-text-two">Post!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}