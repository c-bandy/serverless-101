const { S3 } = require('aws-sdk');

const s3 = new S3();
const bucketName = 'our-cool-image-bucket';

module.exports.handler = async function (event, context) {

  // const listObjectsResult = await s3.listObjectsV2({
  //   Bucket: bucketName,
  // }).promise()

  // const keysInBucket = listObjectsResult.Contents.map(object => object.Key);
  // console.log(keysInBucket);

  // const randomKey = keysInBucket[keysInBucket.length * Math.random() | 0];
  // console.log('Chosen key:', randomKey)

  const image = await s3.getObject({
    Bucket: bucketName,
    Key: 'cat.jpeg',
    // Key: randomKey,
  }).promise()

  return {
    statusCode: 200,
    body: image.Body,
    isBase64Encoded: true, // in order to send binary files the response needs to be in base64
    headers: {
      'content-type': 'image/jpeg'
    }
  }

}
