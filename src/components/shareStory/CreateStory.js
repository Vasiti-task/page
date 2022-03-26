import React from 'react';
import image from "../image/vector.png"
import "./CreateStory.css"

export const Story = () => {
    return (

        <div className="container">
            <div className={"header"}>
                <h1>Share your amazing story!</h1>
            </div>

            <form>
                <div className={"form-container"}>
                    <p className={"form-label"}>Upload your picture <br/></p>
                    <input type={"file"} placeholder={"Choose image"} className={"form-input"}/>
                    {/*<button></button>*/}
                </div>

                <div className={"name-container"}>
                    <p className={"form-label name"}>First Name</p><br/>
                    <input type={"text"} placeholder={""} className={"name-input"}/>
                    <p className={"form-label name"}>Last Name</p><br/>
                    <input type={"text"} placeholder={""} className={"name-input"}/>


                </div>
            </form>

        </div>
    );
};

export default Story;