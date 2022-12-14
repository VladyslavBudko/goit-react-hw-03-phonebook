import React from 'react';
import { Form, ContactFormLabel, AddContactBtn } from './Form.styled';

class ContactForm extends React.Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
    // filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitData(this.state);
    this.reset();
    // this.setState(prevState => ({
    //   contacts: prevState,
    // }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <ContactFormLabel htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </ContactFormLabel>
          {/* <br /> */}
          <ContactFormLabel htmlFor="">
            {' '}
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </ContactFormLabel>
          <br />
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </Form>
      </>
    );
  }
}
export default ContactForm;
