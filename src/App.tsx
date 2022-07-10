import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {

    const responseFacebook = (response: any) => {
        console.log(JSON.stringify(response));
        console.log(response.accessToken);
    }

    return (
        <div>
            <div>
                <h1>Work</h1>
            </div>

            <div>


                <FacebookLogin
                    appId="357504306534229"
                    autoLoad={false}
                    fields="email"
                    scope={"pages_show_list,pages_read_engagement,pages_read_user_content,public_profile"}
                    version={"14.0"}
                    callback={responseFacebook}/>
            </div>
        </div>
    );
}

export default App;
