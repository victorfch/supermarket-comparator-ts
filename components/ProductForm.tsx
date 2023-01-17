import { useState } from "react"
import { Results } from "../pages/api/products/[name]"
import { getProducts } from "../services/getProducts"

interface Props {
  onSubmit: (data: Results) => void
}

export const ProductForm: React.FC<Props> = ({ onSubmit }) => {
  const [product, setProduct] = useState<string>('')

  const handleInput: ({ target }: any) => void = ({ target }) => {
    setProduct(target?.value)
  }

  const handleSubmit: (e: any) => Promise<void> = async (e) => {
    e.preventDefault()
    const products = await getProducts(product)
    onSubmit(products)
    setProduct('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} type="text" value={product} />
    </form>
  )
}