import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "f30bvj7t", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31',
  useCdn: true,
});