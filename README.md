## Ecommmerce Template 
- This template was created using Nextjs and Tailwindcss and Shopify.
- We are using the Shopify for the backend and for the checkout.  For additional information about gathering the required envirmanet variables and set up, check out this [blank]() document.
#### How to Use 
- Clone template to local machine 
- Run ``` npm i ``` then ``` npm run dev ``` to start 
- Products are fetched based on the product 'handle'. The defualt handle for products put in the 'Home' product collection is 'front page'. Each prodcuct collection will have a unique handle in Shopify.
#### Customize 
###### You will need to update the following 
- Hero image
- Hero Text
- Navbar 
- Desired brand colors 
- The ``` .env``` file for your desired store 
``` SHOPIFY_STORE_DOMAIN = 'xxxx.myshopify.com' ```
```SHOPIFY_STOREFRONT_ACCESSTOKEN = 'xxxxx' ```

#### Deploy 
- Log in or create an account on Vercel.com 
- Insatll the [Vercel CLI](https://vercel.com/docs/cli) and link to Vercel account 
- Run ``` Vercel --prod ``` in the terminal for a production build and deployment

