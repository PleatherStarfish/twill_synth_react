import React, { Component } from 'react';
import styles from '../styles/Title.module.css';
import {Animated} from "react-animated-css";

class Title extends Component {
    render() {
        return (
            <div className={styles.title}>
                <Animated animationIn="bounceInUp" animationInDelay={5} isVisible={true}>
                    <h1>#Twill</h1>
                </Animated>
            </div>
        );
    }
}

export default Title;