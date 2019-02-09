import React, { Component } from 'react';
import styles from '../styles/Button.module.css';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false
        };
    }

    render() {
        const content = this.props.content;

        return (
            <div>
                <button onClick={props} className={[styles.button, styles.button1].join(' ')} >
                    {content}
                </button>
            </div>
        )
    }
}

export default Button;