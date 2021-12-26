import React, { useState } from 'react';
import img1 from '../assets/img1.PNG'
import img2 from '../assets/img2.PNG'
import img3 from '../assets/img3.PNG'

function Project(props) {

    const [content, setContent] = useState(false)

    useState(() => {
        setTimeout(() => {
            setContent(true)
        }, 400)
    }, [])

    return (
        <div className="group-content-right scroll-height">
            {
                !content && (
                    <div className="bg-mobile"></div>
                )
            }
            {
                content &&
                <div>
                    <div>
                        <h1>My Project</h1>
                    </div>
                    <div className="grid-2-colum">
                        <div className="group-card">
                            <img src={img1} className="img-card" alt="" />
                            <div className="text-card-center">Ecommerce Website</div>
                            <div className="text-child">We have built an e-commerce website under the C2C model to serve .</div>
                            <a href="https://tthshop.netlify.app/" target="_blank" className="show-direct-card">
                                <i className="fa fa-mail-forward" style={{ fontSize: "30px" }}></i>
                            </a>
                        </div>
                        <div className="group-card">
                            <img src={img2} className="img-card" alt="" />
                            <div className="text-card-center">Online Game Website</div>
                            <div className="text-child">Tic Tac Toe, puzzles, snakes of prey. </div>
                            <a href="https://onlplay.netlify.app/" target="_blank" className="show-direct-card">
                                <i className="fa fa-mail-forward" style={{ fontSize: "30px" }}></i>
                            </a>
                        </div>
                        <div className="group-card">
                            <img src={img3} className="img-card" alt="" />
                            <div className="text-card-center" >Chat Love Website</div>
                            <div className="text-child">You can find your love and text your partner. Lover owns</div>
                            <a href="https://chatlove.netlify.app/" target="_blank" className="show-direct-card">
                                <i className="fa fa-mail-forward" style={{ fontSize: "30px" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Project;