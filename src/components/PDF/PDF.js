import React, { Component } from 'react'
import './PDF.scss'
import jsPDF from 'jspdf'


export default class PDF extends Component {

    print = () => {
        var doc = new jsPDF();

        doc.html(this.mydiv, {
            callback: function (doc) {
                doc.save();
            },
            html2canvas: {
                scale: 0.26435
            },
            x: 0,
            y: 0,
            margin: [0, 0, 0, 0]
        });
    }

    render() {
        return (
            <div className="App">
                <div className='pdf-area' ref={el => this.mydiv = el}>
                    <div className="first"><div className="data">This is first</div>
                        <img style={{ width: '200px' }} src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_08%2C_2019_%28cropped%29.jpg" alt="modi" />
                    </div>
                    <div className="second"><div className="data">This is second</div></div>
                    <div className="third"><div className="data">This is third</div></div>
                    <div className="fourth"><div className="data">This is fourth</div></div>
                </div>
                <button onClick={this.print}>PDF</button>
            </div>
        )
    }
}
