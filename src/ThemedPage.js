import React from 'react';
import GoHawkImage from './GoHawk.png';

export class ThemedPage extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Matrix Calculator</h1>
                </div>
                <div className="bar"> </div>
                <div className="inside">
                    <div className="center">
                        <div className="div1">
                            <div className="div2 sc2">
                            {this.props.children}
                            </div>
                        </div>
                    </div>
                    <p className="authors">M<a id="rickRoll" tabIndex="-1" rel="noreferrer" target="_blank" href="https://youtu.be/dQw4w9WgXcQ">a</a>de By: <a href="mailto:wyattspree@gmail.com" rel="noreferrer" tabIndex="-1" target="_blank">Wyatt Spree</a> & <a href="mailto:gaston95g@gmail.com" tabIndex="-1" rel="noreferrer" target="_blank">Gaston Gonnerman</a></p>
                    <div className="imageHolder">
                        <img id="leftImage" className="img" alt="" src={GoHawkImage} />
                        <img id="rightImage" className="img" alt="" src={GoHawkImage} />
                    </div>
                </div>
            </>
        );
    }
}