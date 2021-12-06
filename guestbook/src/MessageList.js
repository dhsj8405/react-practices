import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);
    const [modalData, setModalData] = useState({isOpen: false});
    useEffect(() =>{
        setTimeout(() => {
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(e.target.password.value === '') {
                return;
            }

            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     header: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({password: modalData.password})
            // });

            // if(!response.ok) {
            //     throw  `${response.status} ${response.statusText}`;
            // }

            // const jsonResult = response.json;


            // 비밀번호가 틀린 경우
            // jsonResult.data가  null
            setModalData(Object.assign({}, modalData, {label:'비밀번호가 일치하지 않습니다.', password: ''}));

            // 잘 삭제가 된 경우
            // jsonResult.data가 10
            // setModalData({isOpen: false, password:''});
            // notifyMessage.delete(modalData.messageNo);
        } catch (err) {
            console.error(err);
        }
    }

    const notifyDeleteMessage = (no) => {
        setModalData({
            label: '작성시 입력했던 비밀번호를 입력 하세요.', 
            isOpen: true,
            messageNo: no,
            password: ''
        })
    }

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} 
                                                  notifyDeleteMessage={notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={ () => setModalData({isOpen: false}) }
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{modalData.label || ''}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={ () => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    } }>확인</button>
                    <button onClick={() => {setModalData(Object.assign({}, modalData, {isOpen: false})) } }>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}