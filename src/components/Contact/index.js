import React from 'react';
import { brazilianDate } from '../../services/date';


import './styles.scss';

class Contact extends React.Component {
  render() {
    const { contact } = this.props;



    const admissionDate = contact ? contact.admissionDate : '';
    const formattedAdmissionDate = brazilianDate(admissionDate);

    return (
      <article className="contact">
        <span className="contact__avatar">
          <img src={contact ? contact.avatar : ''} alt="Avatar"/>
        </span>
        <span className="contact__data">{ contact ? contact.name : 'Nome' }</span>
        <span className="contact__data">{ contact ? contact.phone : 'Telefone' }</span>
        <span className="contact__data">{ contact ? contact.country : 'País' }</span>
        <span className="contact__data">{ formattedAdmissionDate }</span>
        <span className="contact__data">{ contact ? contact.company : 'Empresa' }</span>
        <span className="contact__data">{ contact ? contact.department : 'Departamento' }</span>
      </article>
    );
  }
}

export default Contact;
