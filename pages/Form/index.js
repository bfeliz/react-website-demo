import Form from './form';
import contentfulClient from '../../utils/contentfulClient';
import { pageRevalidate } from '../../utils/config';

export const getStaticProps = async () => {
  // fetch data from contentful
  const res = await contentfulClient().getEntries({
    content_type: 'form',
  });

  return {
    // set amount in seconds after which a page re-generation can occur
    revalidate: pageRevalidate,
    // pass data as props to page
    props: {
      // return undefined if res contains missing reference instead of throwing an error, then return null if res?.items[0].fields is null or undefined
      form: res?.items[0].fields ?? null,
    },
  };
};

export default Form;
