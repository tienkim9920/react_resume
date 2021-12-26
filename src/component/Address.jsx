import React, { useState } from 'react';

function Address(props) {

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
                        <h1>Contact me</h1>
                    </div>
                    <div className="mr-top-2rem">
                        <div className="font-custom">
                        If you have any questions regarding this privacy statement, 
                        the practices of this site or your dealings with me, 
                        please do not hesitate to contact at the above-mentioned address, e-mail address or phone number.
                        </div>
                    </div>
                    <div className="hr-line"></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4602324215043!2d106.66521371462254!3d10.776019492321819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edba026cb75%3A0xb2a9aab49da1c58f!2zMTU1IFPGsCBW4bqhbiBI4bqhbmgsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1640533593098!5m2!1sen!2s" width="600" height="450" style={{ border: 0, width: '100%', height: '350px' }} loading="lazy"></iframe>
                    <div className="hr-line"></div>
                    <div>
                        <div className="d-flex justify-content-evenly">
                            <div className="d-flex">
                                <div><i className="fa fa-facebook-official icon-contact"></i></div>
                                <div className="mr-left-1rem mr-top-min-rem text-custom-font">/nkt.9920</div>
                            </div>
                            <div className="d-flex">
                                <div><i className="fa fa-github-square icon-contact"></i></div>
                                <div className="mr-left-1rem mr-top-min-rem text-custom-font">/tienkim9920</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly mr-top-2rem">
                            <div className="d-flex">
                                <div><i className="fa fa-telegram icon-contact"></i></div>
                                <div className="mr-left-1rem mr-top-min-rem text-custom-font">Quy Nhơn</div>
                            </div>
                            <div className="d-flex">
                                <div><i className="	fa fa-google-plus-square icon-contact"></i></div>
                                <div className="mr-left-1rem mr-top-min-rem text-custom-font">tienkim9920</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Address;