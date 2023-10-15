import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}:any) => {
    return (
        <div>
             <Navbar/>
            {children}
        </div>
    );
};

export default layout;