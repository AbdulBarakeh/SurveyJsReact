import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "../Models/Question.js";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        console.log(options);
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;