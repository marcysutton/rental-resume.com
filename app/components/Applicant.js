import React from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router';

class Applicant extends React.Component {

  constructor() {
    super();

    this.renderPerson = this.renderPerson.bind(this);
  }

  renderPerson(person, index) {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`name${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--full-name"
          name="name"
          autoComplete="name"
          placeholder="Full Name*"
          type="text"
          value={person.name}
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'name'])}
        />
        <input
          id={`email${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--email"
          name="email"
          autoComplete="email"
          placeholder="Email*"
          type="email"
          value={person.email}
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'email'])}
        />
        <InputMask
          id={`tel${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--phone"
          name="tel"
          autoComplete="home tel"
          placeholder="Phone Number*"
          type="text"
          value={person.phone}
          mask="(999) 999-9999"
          maskChar=" "
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'phone'])}
        />
        {index > 0 ? (
          <button
            id={`remove-contact-section-${index}`}
            className="btn btn--remove"
            onClick={(event) => onRemoveSection(event, 'people', index)}
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  }

  render() {
    const { people, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header page__header--applicant">
          <div className="page__header__container">
            <h1 className="page__title">Applicant</h1>
            <p className="page__subtitle">
              Let's start with the basics.
              First fill out the relevant contact information for the people that would live in the apartment.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
          <ol className="ol ol--applicant">
            {people.map(this.renderPerson)}
            <button
              className="btn btn--add"
              onClick={(event) => onAddSection(event, 'people')}
            >
              Add Another Person
            </button>
          </ol>
        </fieldset>
        <Link to="/summary" title="Summary" className="page__link">Continue...</Link>
      </section>
    );
  }

}

Applicant.propTypes = {
  people: React.PropTypes.array,
  onInputChange: React.PropTypes.func,
  onAddSection: React.PropTypes.func,
  onRemoveSection: React.PropTypes.func,
  toggleHeader: React.PropTypes.func,
};

export default Applicant;
