import React from 'react';
import image from  "../image/circle-image.png"
import whiteLogo from "../image/white.png"
import "./FirstSection.css"
import stripes from "../image/stripe.png"
import blackLogo from "../image/black.png"
import ladies from  "../image/ladies.png"
import humans from "../image/people.png"
import firstImage from  "../image/firstImage.png"
import secondImage from  "../image/secondImage.png"
import thirdImage from  "../image/thirdImage.png"
import fourthImage from  "../image/fourthImage.png"
import fifthImage from  "../image/fifthImage.png"
import sixthImage from  "../image/sixthImage.png"

export const FirstSection = () => {
    return (

        <div className={"parent"}>
            <div className={"first-component"}>
                <img className={"image"} src={image} alt=""/>
                <img className={"whiteLogo"} src={whiteLogo} alt=""/>
                <img className={"blackLogo"} src={blackLogo} alt=""/>

                <p className={"vasiti"}>vasiti<span className={"text-red"}>.com</span></p>
            </div>

            <div className={"flex-service"}>
                <a href={"#"} className={"services"}><p>About us</p></a>
                <a href={"#"} className={"services"}><p>Stories</p></a>
                <a href={"#"} className={"services"}><p>Contact</p></a>
                <a href={"#"} className={"services"}><p>Log in</p></a>
                <button className={"services"}>Sign up</button>
            </div>

            <div className={'events market-place'}>
                    <a href={"#"} className={"services"}><p>Marketplace</p></a>
                    <a href={"#"} className={"services"}><p>wholesale center</p></a>
                    <a href={"#"} className={"services"}><p>seller center</p></a>
                    <a href={"#"} className={"services"}><p>services</p></a>
                    <a href={"#"} className={"services"}><p>internship</p></a>
                    <a href={"#"} className={"services"}><p>events</p></a>
            </div>

            <div className={"left-main-page"}>
                <h1 className={"content first"}>Amazing</h1>
                <h1 className={"content second"}>Experiences from <span>Our</span></h1>
                <h1 className={"content third"}><span className={"adjust"}>Wonderful</span> <span className={"position"}>Customers</span></h1>
            </div>

            <div className={"what-customer-says"}>
                <p className={"firstline"}>Here is what customers and vendors are saying about</p>
                <p className={"secondline"}>us, you can share your stories with us too.</p>
            </div>

            <div className={"person-image"}>
                <img src={humans} alt="" className={"humans"}/>
            </div>

            <div className={"customer"}>
                <img src={ladies} alt="" className={"bolu"}/>

                <div className={"experience"}>
                    <h1 className={"tolu"}>Tolu & Joy's Experience</h1>
                    <button className={"btn"}>customer</button>

                    <p className={"testimony firstTest"}>I had the best experience shopping with vasiti.</p>
                    <p className={"testimony secondTest"}>Usability of the website was great, very good</p>
                    <p className={"testimony thirdTest"}>customer service, an all round great</p>
                    <p className={"testimony fourthTest"}>experience. I would definitely be coming back!</p>

                    <p className={"testimony fifthTest"}>I had the best experience shopping with vasiti.</p>
                    <p className={"testimony sixthTest"}>Usability of the website was great, very good</p>
                    <p className={"testimony seventhTest"}>customer service, an all round great</p>
                    <p className={"testimony eightTest"}>experience. I would definitely be coming back!</p>
                    <p className={"share"}>Share your story</p>
                    <img src={stripes} className={"orange-stripes"}/>
                </div>

                <div className={"round-image"}>

                    <img src={firstImage} className={"joseph-ike"} alt=""/>
                    <p className={"ike"}>Joseph Ike</p>
                    <p className={"ike-location"}>In ikeja</p>
                    <button className={"ike-btn"}>customer</button>

                    <p id={"firstLine"}>Aliqua id fugiat nostrud irure ex duis</p>
                    <p id={"secondLine"}>ea quis id quis ad et. Sunt qui esse </p>
                    <p id={"thirdLine"}>pariatur duis deserunt mollit dolore </p>
                    <p id={"fourthLine"}>cillum minim tempor enim. Elit aute </p>
                    <p id={"fifthLine"}>irure tempor cupidatat incididunt sint </p>
                    <p id={"sixthLine"}>deserunt ut voluptate aute id </p>
                    <p id={"sevethLine"}>deserunt nisi. Aliqua id fugiat nostrud</p>
                    <p id={"eightLine"}>irure ex duis ea quis id quis ad et. </p>
                    <p id={"ninethLine"}>Sunt qui esse pariatur duis deserunt </p>
                    <p id={"tenthLine"}>mollit dolore cillum minim tempor enim.</p>

                    <img src={secondImage} className={"adetola-fashina"} alt=""/>
                    <p className={"adetola"}>Adetola Fashina</p>
                    <p className={"adetola-location"}>Ibadan</p>
                    <button className={"adetola-btn"}>customer</button>

                    <p className={"firstLine1"}>Aliqua id fugiat nostrud irure ex duis</p>
                    <p className={"secondLine1"}>ea quis id quis ad et. Sunt qui esse </p>
                    <p className={"thirdLine1"}>pariatur duis deserunt mollit dolore </p>
                    <p className={"fourthLine1"}>cillum minim tempor enim. Elit aute </p>
                    <p className={"fifthLine1"}>irure tempor cupidatat incididunt sint </p>
                    <p className={"sixthLine1"}>deserunt ut voluptate aute id </p>
                    <p className={"sevethLine1"}>deserunt nisi. Aliqua id fugiat nostrud</p>
                    <p className={"eightLine1"}>irure ex duis ea quis id quis ad et. </p>
                    <p className={"ninethLine1"}>Sunt qui esse pariatur duis deserunt </p>
                    <p className={"tenthLine1"}>mollit dolore cillum minim tempor enim.</p>


                    <img src={thirdImage} className={"emmanuel-fayemi"} alt=""/>
                    <p className={"emmanuel"}>Emmanuel Fayemi</p>
                    <p className={"emmanuel-location"}>In Akoka</p>
                    <button className={"emmanuel-btn"}>customer</button>

                    <p className={"firstLine2"}>Aliqua id fugiat nostrud irure ex duis</p>
                    <p className={"secondLine2"}>ea quis id quis ad et. Sunt qui esse </p>
                    <p className={"thirdLine2"}>pariatur duis deserunt mollit dolore </p>
                    <p className={"fourthLine2"}>cillum minim tempor enim. Elit aute </p>
                    <p className={"fifthLine2"}>irure tempor cupidatat incididunt sint </p>
                    <p className={"sixthLine2"}>deserunt ut voluptate aute id </p>
                    <p className={"sevethLine2"}>deserunt nisi. Aliqua id fugiat nostrud</p>
                    <p className={"eightLine2"}>irure ex duis ea quis id quis ad et. </p>
                    <p className={"ninethLine2"}>Sunt qui esse pariatur duis deserunt </p>
                    <p className={"tenthLine2"}>mollit dolore cillum minim tempor enim.</p>

                    <img src={fourthImage} className={"chisom-obilor"} alt=""/>
                    <p className={"chisom"}>Chisom Obilor</p>
                    <p className={"chisom-location"}>In Magodo</p>
                    <button className={"chisom-btn"}>vendor</button>

                    <p id={"firstLine3"}>Aliqua id fugiat nostrud irure ex duis</p>
                    <p id={"secondLine3"}>ea quis id quis ad et. Sunt qui esse </p>
                    <p id={"thirdLine3"}>pariatur duis deserunt mollit dolore </p>
                    <p id={"fourthLine3"}>cillum minim tempor enim. Elit aute </p>
                    <p id={"fifthLine3"}>irure tempor cupidatat incididunt sint </p>
                    <p id={"sixthLine3"}>deserunt ut voluptate aute id </p>
                    <p id={"sevethLine3"}>deserunt nisi. Aliqua id fugiat nostrud</p>
                    <p id={"eightLine3"}>irure ex duis ea quis id quis ad et. </p>
                    <p id={"ninethLine3"}>Sunt qui esse pariatur duis deserunt </p>
                    <p id={"tenthLine3"}>mollit dolore cillum minim tempor enim.</p>


                    {/*<img src={fifthImage} className={"adunoluwa-adeyemi"} alt=""/>*/}
                    {/*<img src={sixthImage} className={"chidi-okeke"} alt=""/>*/}
                </div>
            </div>
        </div>
    );
};

export default FirstSection;