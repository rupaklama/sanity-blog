// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed

  // The schema describes the types of documents editors may author in Sanity Studio.
  types: schemaTypes.concat([
    /* Your types here! 
      Creating Model Schema which is a Document type - single record for database
      It's an object with properties. */
    { 
      // Here, we have a record type - document, with name of 'Blog' in Sanity Studio's dashboard
      name: 'portfolio', // name: name is a key to access data with
      type: 'document',
      title: 'Blog', // document name in Sanity Studio
      fields: [
        { // fields are objects
          // name: name is a key to access data with
          name: 'title', 
          type: 'string',
          // a single field with name - 'Title' of type - String
          title: 'Title' // field name in Sanity Studio
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle'
        }, 
        {
          name: 'slug',
          type: 'slug',
          // need to specify slug format 'my-first-blog' in Studio
          title: 'Slug' 
        }
      ]
    },
  ]),
});

// Everything in the content studio starts with the document. 
// A document is what you create and edit in the studio and all the 
// other types you may define live inside the documents. In the default studio configuration, 
// the document-types are the ones that will be listed in the content-column.