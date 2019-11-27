# serverless-101 :v:

Welcome to serverless! This repo serves as a short introduction to how to get 
started with the serverless framework.

## Setup

> We assume you already have [Node.js](https://nodejs.org/) and 
> [git](https://git-scm.com/) set up on your system.

```bash
# clone this repo
git clone https://github.com/c-bandy/serverless-101.git

# install dependencies
npm install
```

## Deploy

> In order to deploy you need to have the [AWS CLI](https://aws.amazon.com/cli/) 
> installed and set up for your AWS account.

```bash
# deploy to AWS
npm run deploy
```

When this process is done you should see a summary, with link to your API.

## Next step :point_right:

```bash
git checkout serverless-offline
```