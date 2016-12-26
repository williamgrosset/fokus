import React from 'react';

class Headers extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
    }

    render() {
        return (
            <div className='fokus-link'>
                <img src='../../png/fokus_title_128.png' onClick={this.fokusTab}/>
            </div>
        );
    }
}

module.exports = Headers;
