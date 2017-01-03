import React from 'react';
import DomainItem from './domain-item.js'

class DomainContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            container: this.props.container
        };
        //console.log('DomainContainer constructor: ');
        //console.log(this.state.container);
    }

    renderContainer() {
        const extra = this.props; // passing down too many things
        const test = this.props.container.map((domain) => <DomainItem {...domain} key={domain.id} {...extra} /> );
        console.log('renderContainer: ' + test);
        return test;
    }

    /*
    getStorage(callback) {
        chrome.storage.local.get('container', function (result) {
            console.log(result.container);
            thing = result.container;
            callback(thing);
        }.bind(this));
    }*/

    render() {
        const extra = this.props;
        if (this.props.container.length != 0) {
            return (
                <ul id='domain-container'>
                    {this.props.container.map((domain) => <DomainItem {...domain} key={domain.id} {...extra} /> )}
                </ul>
            );
        } else {
            return (
                <ul id='domain-container'>
                    <p>You currently have no domains blocked :(</p>
                </ul>
            );
        }
    }
    
    /*
    render() {
        return (
            <ul id='domain-container'>
                {this.renderContainer()}
            </ul>
        );
    }*/
}

module.exports = DomainContainer;
