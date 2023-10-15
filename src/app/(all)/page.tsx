import Image from 'next/image'
import styles from './page.module.css'
import AddNew from '@/components/AddNew'
import ShowData from '@/components/ShowData'



export default function Home() {
  return (
    <main className=''>
     
      <AddNew/>
      <ShowData/>
    </main>
  )
}
