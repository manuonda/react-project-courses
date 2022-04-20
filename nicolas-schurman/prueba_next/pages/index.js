import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomerImage from '../public/homero.jpg';


export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/homero.jpg" width={400} height={200}/>
      <br></br>
      <Image src={HomerImage} width={400} height={200}></Image>
    </div>
  )
}
