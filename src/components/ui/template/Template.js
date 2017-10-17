import React from 'react';
import '../../../assets/main.scss';
import Header from '../header/Header';
import Routes from '../routes/Routes';
import Messages from '../../container/messages/Messages';

const Template = () => (
  <div className="container">
    <Header />
    <Routes />
    <Messages />
  </div>
);

export default Template;
