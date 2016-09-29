import React from 'react';

export default class English2C0Analyze extends React.Component {
    render() {
        return (
            <div className="module">
                <h4 className="module__title--category">2.C.0) ACT English Practice Plan</h4>
                <h2 className="module__title">Analyzing English Practice Tests</h2>
                <div className="module__content">
                    We're still working on making a new video for this topic, but here is the related video from the old course!

                    <br /><br />

                    <iframe src="https://player.vimeo.com/video/163876722" className="module__video" frameBorder="0" webkitAllowFullScreen mozAllowFullscreen allowFullScreen></iframe>

                    <div className="module__instructions">Click below to open the PDF in a new window!</div>
                    <a href="/practice-tests/analyzing-english.pdf" target="_blank"><button className="review-pdf__button">Analyzing Your ACT English Test</button></a>
                </div>
            </div>
        );
    }
}