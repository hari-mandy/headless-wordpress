
# Headless Wordpress Frontend

This is a Frontend Template for the Wordpress + woo-commerce project. This is build using the Next-js and Graphql Api. This has the UI components for the blog archive and detail page, shop, product detail, cart and checkout pages.

## Requirments

    1. A Usual Wordpress + wooCommerce project.
    2. Install the wp-graphql plugin to support the graphql quries https://wordpress.org/plugins/wp-graphql/.
    3. Install the wp-graphql-woocommerce for the additional wooCommerce related graphql queries https://github.com/wp-graphql/wp-graphql-woocommerce.
    4. Install the wp-graphql-jwt-authentication plugin for the Api Authentication https://github.com/wp-graphql/wp-graphql-jwt-authentication.
    5. A Firebase account to configure the social media logins.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_WORDPRESS_API_URL`

`NEXT_PUBLIC_API_URL`

`WORDPRESS_AUTH_REFRESHER_TOKEN`

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`


## Installation

Download the project from the github.

Setup a wordpress woo-commerce project.

Run the following commands.
```bash
  npm install
  npm run dev
```
    
## Features

- Headless Wordpress for the scalable and customizable frontend. 
- Used Graphql API for the better performance.
- Integrated a social media login with the firebase Authentication and during registration the user will be created as customer in wordpress.
- Every orders are tracked same as like the native wooCommerce orders.
- The block Editor is used in the backend for the better content management.


## Future Optimizations

    1. Right now it has only offline payment methods so, need to integrate a payment portal.
    2. Better UI need to be build with the animation.
    3. Need to develop the section and page to maintain my account for the users. 

