'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CART } from '@/queries/get-cart'
import { REMOVE_FROM_CART } from '@/queries/remove-from-cart'
import { UPDATE_CART_ITEM } from '@/queries/update-cart-item'

export default function CartPage() {
  const { data, loading, error } = useQuery(GET_CART)
  const [removeProductFromCart] = useMutation(REMOVE_FROM_CART, {
    refetchQueries: [{ query: GET_CART }],
  })
  const [updateProductFromCart] = useMutation(UPDATE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART }],
  })

  const removeProduct = async(key: String) => {
    await removeProductFromCart({ variables: { keys: key } });
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const cart = data?.cart
  const items = data?.cart?.contents?.nodes ?? []

  if (!items.length) return <p>Your cart is empty.</p>

  const handleQuantityChange = async (key: String, quantity:Number) => {
    await updateProductFromCart({ variables: { key: key, quantity: quantity } });
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛒 Your Cart</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item: any) => {
          const variation = item.variation?.node
          const product = item.product?.node
          const image = variation?.featuredImage?.node?.sourceUrl || product?.featuredImage?.node?.sourceUrl
          const name = variation?.name || product?.name
          const price = variation?.price || product?.price

          return (
            <li key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              {image && (
                <Image src={image} alt={name} width={60} height={60} style={{ borderRadius: '6px' }} />
              )}
              <div style={{ flex: 1 }}>
                <strong>{name}</strong>
                <p>{price} ×  Qty :
                  <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.key, parseInt(e.target.value))
                      }
                      className="w-16 border rounded p-1 text-center"
                  />
                </p>
                <span className='text-red-600 underline cursor-pointer' onClick={() => removeProduct(item.key)}>Remove</span>
              </div>
              
            </li>
          )
        })}
      </ul>

      <h2>Total: {cart.total}</h2>

      <Link
        href="/checkout"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out"
      >
        Proceed to Checkout
      </Link>
    </div>
  )
}
