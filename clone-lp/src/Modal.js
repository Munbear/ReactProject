import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import product5 from './images/product5.jpg';
import { FormItemPrefixContext } from 'antd/lib/form/context';

const Background = styled.div`
  max-width: 550px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 550px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  grid-template-colums; 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex: 0 0 auto
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    cursor: pointer
  }
`;

const Selection = styled.select`
  padding: 9px;
  border: 1px solid #141414;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Sum = styled.div`
  color: red;
`;

const Modal = (props) => {
  const { showModal, setShowModal, priceValue } = props;
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={product5} alt='MentoMen' />
            <ModalContent>
              <button>구매하기</button>
              <Selection>
                <option disabled=''>사이즈 선택</option>
                <option value=''>S</option>
                <option value=''>M</option>
                <option value=''>L</option>
                <option value=''>XL</option>
              </Selection>
              <Sum>총 금액: {priceValue}</Sum>
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
