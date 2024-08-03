import React, { Component, FormEvent } from 'react';
import Popup from '../Elements/PopUp';

interface IContactFormState {
  name: string;
  message: string;
  errors: {
    name?: string;
    message?: string;
  };
  showPopup: boolean;
}

class ContactForm extends Component<{}, IContactFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      message: '',
      errors: {},
      showPopup: false,
    };
  }

  validate = (): boolean => {
    const { name, message } = this.state;
    let errors = {} as IContactFormState['errors'];
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validate()) {

      this.setState({ showPopup: true });

      setTimeout(() => {
        this.setState({ showPopup: false });
      }, 3000);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as IContactFormState);
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { name, message, errors, showPopup } = this.state;
    return (
      <div className='md:w-1/2'>
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="mt-1 px-2 py-1 block w-full bg-secondary outline-dashed text-primary  focus:shadow-primary-lg"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              rows={5}
              className="mt-1 px-2 py-1 block w-full bg-secondary outline-dashed text-primary  focus:shadow-primary-lg"
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-secondary shadow-primary-sm">Send</button>
        </form>
        {showPopup && (
          <Popup
            message="Thank you for reaching out! We will get back to you soon."
            onClose={this.handleClosePopup}
          />
        )}
      </div>
    );
  }
}

export default ContactForm;
