import React from "react";
const Quiz = (props) => {

    const [disable, setDisable] = React.useState(false);

    const handleClick = event => {
        if (event.currentTarget.id == props.item.correct_answer) {
            var a = document.getElementById(event.currentTarget.id)
            a.style.backgroundColor = "green"
        }
        else {
            var b = document.getElementById(event.currentTarget.id)
            b.style.backgroundColor = "red"
        }
        setDisable(true)
    };

   
        return (
            <div className="quiz">
                <br/>
                <p className="question">{props.item.question}</p>

                <div className="choices">
                    <button id={props?.item?.choices?.a} onClick={handleClick} disabled={disable}>
                        {props?.item?.choices?.a}
                    </button>
                    <button id={props?.item?.choices?.b} onClick={handleClick} disabled={disable}>
                        {props?.item?.choices?.b}
                    </button>
                    <button id={props?.item?.choices?.c} onClick={handleClick} disabled={disable}>
                        {props?.item?.choices?.c}
                    </button>
                    <button id={props?.item?.choices?.d} onClick={handleClick} disabled={disable}>
                        {props?.item?.choices?.d}
                    </button>
                </div>

            </div>
        );
    }

export default Quiz;
