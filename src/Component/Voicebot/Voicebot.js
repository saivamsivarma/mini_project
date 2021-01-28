import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';

function Voicebot() {
    let history = useHistory();

    const alanKey = '367ca1dfd43f62d0fa72275a218f28952e956eca572e1d8b807a3e2338fdd0dc/stage';
    useEffect(() => {
        let alanBtnInstance= alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command ==='jobs'||'dashbaord'||'application'||'companies'||'profile') {
                    history.push(`/user-${command}`);
                }
                if(command === 'logout'){
                    history.push("/")
                    alanBtnInstance.deactivate();
                }
            },

            onConnectionStatus: function(status) {
                if (status === 'authorized') {
                    alanBtnInstance.activate();
                    alanBtnInstance.playText('Hey, this is Alan your personal voice assistant');
                }
            },
        })
    })
    return (
        <></>
    );
}

export default Voicebot;