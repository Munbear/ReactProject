import { Divider } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default Modal;
