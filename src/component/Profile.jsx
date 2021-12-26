import React, { useState } from 'react';

function Profile(props) {

    const [content, setContent] = useState(false)

    useState(() => {
        setTimeout(() => {
            setContent(true)
        }, 400)
    }, [])

    return (
        <div className="group-content-right">
            {
                !content && (
                    <div className="bg-mobile"></div>
                )
            }
            {
                content &&
                <div>
                    <div>
                        <h1>About Me</h1>
                        <h2>Nguyễn Kim Tiền</h2>
                    </div>
                    <div className="sub-titl-profile">
                        <span style={{ color: "#C175F5" }}>22+</span>
                        &nbsp;&nbsp;<span style={{ color: "#e2e2e2" }}>/</span>&nbsp;&nbsp;
                        <span style={{ color: "#C175F5" }}>Software Engineer </span>
                        &nbsp;&nbsp;<span style={{ color: "#e2e2e2" }}>/</span>&nbsp;&nbsp;
                        <span style={{ color: "#C175F5" }}>Ho Chi Minh City</span>
                    </div>
                    <div className="mr-top-2rem">
                        <div className="font-custom">
                        Character: Hardworking, patient, have the will to progress, always listen to understand and learn from others. Constantly 
                        trying to work with the best performance to create the best products for users.
                        <br />Cons: Listening to English is quite good, but 
                        speaking is not fluent.
                        </div>
                    </div>
                    <div className="hr-line"></div>
                    <div>
                        <h2>TARGET</h2>
                    </div>
                    <div className="font-custom">Can learn more knowledge, practice and improve programming ability. </div>
                    <div className="font-custom">Deeper consolidation of the background as well as knowledge of own orientation. </div>
                    <div className="font-custom">Be able to adapt to the working environment, work pressure as well as break your own limits on difficult problems in 
                        programming. </div>
                </div>
            }
        </div>
    );
}

export default Profile;