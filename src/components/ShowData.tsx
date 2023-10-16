'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
const ShowData = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/api/users")
            .then(datas => setData(datas?.data))
    }, [])
    // console.log(data);

    const HandleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/users?id=${id}`)
                .then(data => {
                    console.log(data);
                    if (data) {
                      
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Deleted',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        router.push("/");
                    }
                })
                
            }
        })
    }
    return (
        <div className='sw'>
            {
                data?.map((user: {
                    description: string;
                    name: string; _id: string;
                }) => (
                    <div className='swd' key={user?._id}>
                        <div>
                            <h3>{user?.name}</h3>
                            <h4>{user?.description}</h4>
                        </div>
                        <div>
                            <button onClick={() => HandleDelete(user?._id)}>
                                <RiDeleteBin6Line className="txrl" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowData;