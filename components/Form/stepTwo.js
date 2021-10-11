import { WizardStep } from './FormWizard';
import Input from './input';

const StepTwo = ({ validationSchema }) => {
  return (
    <WizardStep validationSchema={validationSchema}>
      <section>
        <div className='container'>
          <div>
            <h2 className='title is-2'></h2>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-6'>
              <Input name='email' label='Email' type='text' />
            </div>
          </div>
        </div>
      </section>
    </WizardStep>
  );
};

export default StepTwo;