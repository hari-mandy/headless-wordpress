import { gql } from "@apollo/client"

export const GET_CART = gql`
  query GetCart {
    cart {
        contents {
        itemCount
        nodes {
            key
            quantity
            variation {
                node {
                    id
                    name
                    price
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
            product {
                node {
                    ... on SimpleProduct {
                        id
                        name
                        price
                        featuredImage {
                            node {
                                altText
                                sourceUrl
                            }
                        }
                    }
                    ... on VariableProduct {
                        id
                        name
                    }
                }
            }
        }
    }
    subtotal
    total
    }
  }
`

export interface ProductsData { 
    cart: { 
        contents: { 
            itemCount: Number 
            nodes: { 
                key: String 
                quantity: Number 
                variation: { 
                    node: { 
                        id: String 
                        name: String 
                        price: String 
                        featuredImage: { 
                            node: { 
                                altText: String 
                                sourceUrl: String 
                            } 
                        } 
                    } 
                } 
                product: { 
                    node: { 
                        id: String 
                        name: String 
                        price: String 
                        featuredImage: { 
                            node: { 
                                altText: String 
                                sourceUrl: String 
                            } 
                        } 
                    } 
                } 
            } 
        } 
        subtotal: String 
        total: String 
    } 
}