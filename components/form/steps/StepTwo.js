import { WizardStep } from '../FormWizard';
import Select from '../components/Select';
import DateInput from '../components/Date';
import Currency from '../components/Currency';
import Radio from '../components/Radio';

const StepTwo = ({ validationSchema }) => {
  return (
    // set up step two to form wizard
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
              <Select
                name='favorite_pizza'
                label='What is your favorite type of pizza?'
              >
                <option value={''}> - Pick a Type - </option>
                <option value='Cheese'>Cheese</option>
                <option value='Pepperoni'>Pepperoni</option>
                <option value='Supreme'>Supreme</option>
                <option value='Veggie'>Veggie</option>
                <option value='Hawaiian'>Hawaiian</option>
              </Select>
            </div>
            <div className='column is-6'>
              <DateInput name='pizza_date' label='Last time you ate pizza?' />
            </div>
            <div className='column is-6'>
              <Currency name='pizza_cost' label='How much did pizza cost?' />
            </div>
            <div className='column is-6'>
              <Radio
                name='delicious'
                label='Was it delicious?'
                options={[
                  {
                    key: 'It was fantastic!',
                    value: 'It was fantastic!',
                  },
                  { key: 'Eh, had better', value: 'Eh, had better' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </WizardStep>
  );
};

export default StepTwo;
