import sanityClient from '@sanity/client';

// sanity client configurations to fetch data from sanity

// sanity Client is responsible for making requests to sanity API from our blog application
// through Api Url from our dataset with project id & then
// sanity Api fetches data from our backend database & sends back to our app
// To do above, install sanity client package - npm i @sanity/client

// options object for sanity client for configuring API URL
const options = {
  // accessing env variable in .evv.local file
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  // if in production, use cdn 
  // useCdn === true, gives you fast response with cached data
  // In dev env useCdn ==== false to get our latest data & response is slower
  // You always want to use cdn coz it is super fast
  useCdn: process.env.NODE_ENV === 'production'
}

export default sanityClient(options);