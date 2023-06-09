import React from 'react'

function FlipCard() {
    return (
        <div className="flipCard">
        <div className='services'>SERVICES</div>
            <div className="card-container">
                {/* <!-- card1 --> */}
                <div className="card-1 flip-card">
                    <div className="flip-card-inner">
                        {/* <!-- front  --> */}
                        <div className="flip-card-front">
                            <div className='FlipcardNumber'>01</div>
                            <div className='FlipcardName'>ARCHITECTURE<br></br> DESIGN</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Where art meets function, creating timeless wonders</div>
                        </div>
                        {/* <!-- back  --> */}
                        <div className="flip-card-back">
                            <div className='FlipcardNumber'>01</div>
                            <div className='FlipcardName'>ARCHITECTURE <br></br>DESIGN</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Where art meets function, creating timeless wonders</div>
                        </div>
                    </div>
                </div>
                {/* <!-- card1 --> */}
                <div className="card-1 flip-card">
                    <div className="flip-card-inner">
                        {/* <!-- front  --> */}
                        <div className="flip-card-front">
                            <div className='FlipcardNumber'>02</div>
                            <div className='FlipcardName'>INTERIOR <br></br> DESIGN</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Crafting spaces that embrace dreams and ignite the soul.</div>
                        </div>
                        {/* <!-- back  --> */}
                        <div className="flip-card-back">
                            <div className='FlipcardNumber'>02</div>
                            <div className='FlipcardName'>INTERIOR <br></br> DESIGN</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Crafting spaces that embrace dreams and ignite the soul.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- card1 --> */}
                <div className="card-1 flip-card">
                    <div className="flip-card-inner">
                        {/* <!-- front  --> */}
                        <div className="flip-card-front">
                            <div className='FlipcardNumber'>03</div>
                            <div className='FlipcardName'>PROJECT<br></br> MANAGEMENT</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>The seamless fusion of vision, precision, and success.</div>
                        </div>
                        {/* <!-- back  --> */}
                        <div className="flip-card-back">
                            <div className='FlipcardNumber'>03</div>
                            <div className='FlipcardName'>PROJECT<br></br> MANAGEMENT</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>the seamless fusion of vision, precision, and success.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- card1 --> */}
                <div className="card-1 flip-card">
                    <div className="flip-card-inner">
                        {/* <!-- front  --> */}
                        <div className="flip-card-front">
                            <div className='FlipcardNumber'>04</div>
                            <div className='FlipcardName'>TURNKEY<br></br>PROJECT</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Unlocking your vision, delivering perfection.</div>
                        </div>
                        {/* <!-- back  --> */}
                        <div className="flip-card-back">
                            <div className='FlipcardNumber'>04</div>
                            <div className='FlipcardName'>TURNKEY<br></br> PROJECT</div>
                            <div className='FlipcardHighlighter'></div>
                            <div className='FlipcardText'>Unlocking your vision, delivering perfection.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlipCard
