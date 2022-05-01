# Wheel Hippo Shopify E-commerce

This is the repository for Shopify Wheel Hippo E-commerce.

Everything pushed to the branch master will be automatically synced with the "wheelhippo/master" theme on Shopify.

If you dont want to push your changes automatically live, make sure to create a new branch and working from it.

## Running the project locally

Shopify has a new integration with GitHub to allow you to make all your code changes locally and test it on your local environment. If you need to know more about it, please refer to [this](https://shopify.dev/themes/tools/github) link.

In order to run this project locally, you just need to clone the repository and then login on shopify with your credentials, as follow:

```sh
shopify login --store=wheel-hippo.myshopify.com
```

You will be presented with some options, make sure to choose the right user and the right store.

The last step is to serve your theme using the command:

```sh
shopify theme serve
```

## Development environment

### Laravel Mix

Will compile the JS and CSS to the right directory read by shopify.
To compile the code just run 'npx mix'

if you run 'npx mix watch' it will watch for changes on the files specified on 'webpack.mix.js' and update the compiled files

### Tailwind CSS

ENV file
