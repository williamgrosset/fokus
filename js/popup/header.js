import React from 'react';

class HeaderLink extends React.Component {
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
        return null;
    }

    render() {
        return (
            <div className='Fokus-link'>
                <img src={'https://github.com/williamgrosset/fokus/blob/master/png/fokus_title_128.png?raw=true'} onClick={this.fokusTab}/>
            </div>
        );
    }
}

module.exports = HeaderLink;
