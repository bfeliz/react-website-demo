import Head from 'next/head';
import MetaDefaults from '../../components/MetaDefaults';
import ReactMarkdown from 'react-markdown';
import MarkdownLink from '../../components/MarkdownLink';
import * as Yup from 'yup';
import HeroImage from '../../components/HeroImage';
import { FormWizard } from '../../components/form/FormWizard';
import Loader from '../../components/Loader';
import StepOne from '../../components/form/steps/StepOne';
import StepTwo from '../../components/form/steps/StepTwo';
import regex from '../../components/form/utils/regex';

const Form = ({ form }) => {
  if (form) {
    return (
      <div>
        {/* adds meta tags for SEO purposes */}
        <Head>
          <title>Website Demo Form | Website Demo</title>
          <meta
            name='description'
            content='Use this page to explore form functionality.'
          />
          <meta property='og:title' content='Form' />
          <meta
            property='og:description'
            content='Use this page to explore form functionality.'
          />
        </Head>
        <MetaDefaults />
        {/* sets hero image and page content, pulled from contentful */}
        <HeroImage url={form.heroImage.fields.file.url} />
        <section className='section content'>
          <div className='container'>
            <h2 className='title is-2 has-text-centered'>{form.header}</h2>
            <ReactMarkdown
              children={form.subHeader}
              components={{ a: MarkdownLink }}
            />
          </div>
        </section>

        {/* initializes form, using wizard component */}
        <FormWizard
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            favorite_pizza: '',
            pizza_date: '',
            pizza_cost: '',
            delicious: '',
          }}
        >
          {/* wizard steps, with validations passed as props */}
          <StepOne
            validationSchema={Yup.object({
              first_name: Yup.string()
                .trim()
                .max(64)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s]+$/.test(value);
                  }
                )
                .required('Required'),
              last_name: Yup.string()
                .trim()
                .max(64)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s]+$/.test(value);
                  }
                )
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .trim()
                .max(320)
                .required('Required'),
              phone: Yup.string()
                .trim()
                .min(4)
                .max(16)
                .test('numeric', 'Please enter only numbers, 0-9', (value) => {
                  return /^[0-9]+$/.test(value);
                })
                .required('Required'),
            })}
          />
          <StepTwo
            validationSchema={Yup.object({
              favorite_pizza: Yup.string()
                .trim()
                .max(32)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s\-]+$/.test(value);
                  }
                )
                .required('Required'),
              pizza_date: Yup.string()
                .trim()
                .matches(regex.date, 'Please enter a correct date')
                .max(10)
                .test('numeric', 'Please enter only numbers, 0-9', (value) => {
                  return /^[0-9\/]+$/.test(value);
                })
                .required('Required'),
              pizza_cost: Yup.string()
                .trim()
                .matches(regex.currency, 'Please enter a correct dollar amount')
                .max(64)
                .required('Required'),
              delicious: Yup.string()
                .trim()
                .max(32)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s\!\'\,]+$/.test(value);
                  }
                )
                .required('Required'),
            })}
          />
        </FormWizard>
      </div>
    );
  }
  // displays spinner while waiting for page to load
  return <Loader />;
};

export default Form;
