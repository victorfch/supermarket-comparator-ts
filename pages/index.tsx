import Head from 'next/head'
import { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductsList } from '../components/ProductsList'
import styles from '../styles/Home.module.css'
import { Results } from './api/products/[name]'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Results>()

  const handleSubmit: (data: Results) => void = (data) => {
    setProducts(data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SUPER Comparator</title>
        <meta name="description" content="Products comparator in markets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductForm onSubmit={handleSubmit} />
        <div>{products?.quantity} resultados</div>
        <ProductsList />
      </main>
    </div>
  )
}

export default Home
