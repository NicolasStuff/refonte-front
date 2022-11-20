import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { ProductsApi } from '../api-client/apis/ProductsApi'

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const path = '/products'
    const fetchTodos = async () => {
      const res = await ProductsApi.productsControllerFindAll
      console.log(res);
      const json = await res.json()
      setProducts(json)
    }
    fetchTodos();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {products.length === 0 && (
          <h1 className={styles.title}>
            No products receive yet, you have to fix it
          </h1>
        )}
        {products.length !== 0 && (
          <h1 className={styles.title}>
            Product 1 is <a href="https://nextjs.org">{products[0].name}</a>
          </h1>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
