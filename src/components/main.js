import React, { Component } from 'react';
// import Module from '../styles/Module.module.css';

class Main extends Component {
    render() {
        const count = this.props.count;

        return (
            <div>
                {/*{cardsData.map(card => {*/}
                    {/*return (<Card {...card} />);*/}
                {/*})}*/}
                {count}
            </div>
        )
    }
}


export default Main;