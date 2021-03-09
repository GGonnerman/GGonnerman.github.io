import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet';
import { App } from './app.js';

const TITLE="Matrix Calculator";

export class Header extends React.Component {

    render() {
        return (
            <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <App />
            </>
        )
    }
}