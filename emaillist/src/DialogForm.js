
import React from 'react';

export default function() {

    return (
       <div id={'dialog-delete-form'} className={'Guestbook__DeleteForm'} title={'메세지 삭제'} style={'display:none'}>
                <p className={'validateTips normal'}>{`작성시 입력했던 비밀번호를 입력하세요.`}</p>
                <p className={'validateTips error'} style={'display:none;'}>{`비밀번호가 틀립니다.`}</p>
                <form>
                     <input type={'password'} id={'password-delete'} value={''} className={'text ui-widget-content ui-corner-all'} />
                    <input type={'hidden'} id={'hidden-no'} value={''} /> 
                </form>
            </div>

       
    )
}