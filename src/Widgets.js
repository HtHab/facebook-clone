import React from 'react';
import "./Widgets.css";

function Widgets(){
    return(
        <div className='widgets'>
            <iframe
                src="https://blog.logrocket.com/best-practices-react-iframes/#:~:text=In%20React%2C%20developers%20use%20iframes,website%20it%20is%20embedded%20in."
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widgets;