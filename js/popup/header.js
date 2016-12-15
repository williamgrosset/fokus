import React from 'react';

class Headers extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
    }

    render() {
        return (
            <div className='fokus-link'>
                <img src={'https://github.com/williamgrosset/fokus/blob/master/png/fokus_title_128.png?raw=true'} onClick={this.fokusTab}/>
            </div>
        );
    }
}

module.exports = Headers;
