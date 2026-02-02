import { gql } from "@apollo/client"

export const REMOVE_FROM_CART = gql`
  mutation REMOVE_ITEM_FROM_CART($keys: [ID!]!) {
    removeItemsFromCart(input: { keys: $keys }) {
        cart {
        contents {
            itemCount
            nodes {
            key
            quantity
            product {
                node {
                name
                }
            }
            }
        }
      }
    }
  }
`