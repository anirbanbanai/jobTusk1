'use client'
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
const ShowData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/api/users")
            .then(datas => setData(datas?.data))
    }, [])
    // console.log(data);
    return (
        <div className='sw'>
            {
                data?.map((user: {
                    description: ReactNode;
                    name: ReactNode; _id: React.Key | null | undefined;
                }) => (
                    <div className='swd' key={user?._id}>
                        <div>
                            <h3>{user?.name}</h3>
                            <h4>{user?.description}</h4>
                        </div>
                        <div>
                            <RiDeleteBin6Line className="txrl" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowData;