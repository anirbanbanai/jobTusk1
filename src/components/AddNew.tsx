import Link from 'next/link';
import { MdOutlineNoteAdd } from 'react-icons/md';

const AddNew = () => {
    return (
        <div className='tx'>
          
            <Link href="/add">
            <MdOutlineNoteAdd className="  txxl"/>
            </Link>
        </div>
    );
};

export default AddNew;