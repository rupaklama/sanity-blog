// define functions to fetch data from Sanity 
import client from './sanity';

// defining object Projections fields that we always need into separate variables
// the fields that we want to display in our app
const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url 
` 
// we only care 'current' prop of slug to access slug's value
// -> is referring to _ref property of image, to get url of the image that we uploaded


// api url
export const getAllBlogs = async () => {
  // need to use client here
  const results = await client
  // https://www.sanity.io/docs/query-cheat-sheet
  // all queries starts with *
  // {} is object Projections to filter the fields that we want to display
    .fetch(`*[_type == "portfolio"] { ${blogFields} }`) // name of document
  
  // console.log(results)
  return results;
}

// now, we can call this func in getStaticProps & provide blogs data into our page