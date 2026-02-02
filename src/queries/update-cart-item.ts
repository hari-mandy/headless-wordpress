import { gql } from "@apollo/client";

export const UPDATE_CART_ITEM = gql`
  mutation updateCartItem($key: ID!, $quantity: Int!) {
    updateItemQuantities(input: { items: [{ key: $key, quantity: $quantity }] }) {
      cart {
        contents {
          nodes {
            key
            product {
              node {
                id
                name
              }
            }
            quantity
            total
          }
        }
        total
        subtotal
      }
    }
  }
`;
