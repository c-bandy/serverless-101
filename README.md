# serverless-101 :v:

Welcome to step 3!

On this step we will try an integration with Amazon S3.

* added `aws-sdk` to your `package.json`
* added a new function called `random-image.js`, defined in `serverless.yml`
* added resources definition to your `serverless.yml`, which links to 
`cloudformation-resources.yml`

This picks a random image from the S3 bucket and returns it.

## Try it out

```bash
# install the new dependency aws-sdk
npm install

# deploy to create the s3 bucket and the new function
npm deploy
```

You will get a link to your new endpoint in the output. If you click it you 
should get an error. This is because our bucket is empty.

Upload [cats/cat.jpeg](cats/cat.jpeg) to the S3 bucket that was created. You can do this in the
AWS console. And then try again!

As you may notice, the picture you get is not random. It is the cat.jpeg you
uploaded. Uncomment the code in [src/random-image.js](src/random-image.js) so it picks a random 
picture. Upload any you like to your S3 bucket!
