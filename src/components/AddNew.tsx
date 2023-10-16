import Link from 'next/link';
import { BsPlusCircleFill } from 'react-icons/bs';

const AddNew = () => {
    return (
        <div className='tx'>
          
            <Link className='f' href="/add">
            <BsPlusCircleFill className=" txxl "/>
            <h3 className=''>  New</h3>
            </Link>
        </div>
    );
};

export default AddNew;