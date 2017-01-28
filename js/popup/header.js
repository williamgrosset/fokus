import React from 'react';

class Headers extends React.Component {

    /*
    *  When an onClick event happens on the header image, 
    *  the current window will be changed to the home page.
    */
    fokusTab() {
        var win = window.open("/html/home.html");
        win.focus()
    }

    render() {
        return (
            <div className='fokus-link'>
                <img src='../../png/fokus_title_128.png' onClick={this.fokusTab.bind(this)}/>
            </div>
        );
    }
}

module.exports = Headers;
