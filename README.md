# serverless-101 :v:

Congrats, you're now on step 2!

Some things have changed:

* added `serverless-offline` to your `package.json`
* added a "start" script to your `package.json`
* added the plugin to `serverless.yml`

This allows us to debug our endpoints offline, so we don't have to wait for a
deploy every time we change something.

## Try it out

```bash
# install the new dependency serverless-offline
npm install

# run the start script that was added
npm start
```

And then go to http://localhost:3000/hello-world to try it out.

## Next step :point_right:

```bash
git checkout s3
```