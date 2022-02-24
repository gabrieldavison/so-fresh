import React from 'react';
import './Survey.css';
import meatImage from  './meat.png';
import leafImage from './leaf.png';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";



class Question{
    constructor (image,question,checkBoxData){
        this.image = image;
        this.question = question;
        this.checkBoxData = checkBoxData;
    }

}

const meatsData = [
    'Chicken',
    'Beef',
    'Lamb',
    'Pork',
]

const allergyData = [
    'Gluten',
    'Seafood',
    'Dairy',
    'Nuts'
]

export default function Survey(){
    const questionData = [new Question(meatImage,'What meat do you prefer?',meatsData),new Question(leafImage,'What are you allergic to?',allergyData)];

    return(
        <div className= "Survey">
            <Carousel>
                {questionData.map((question) => {
                    return (
                    <div key = {questionData.indexOf(question)}>
                        <div className = "question-div">
                            <img src= {question.image} className = 'survey-icon' alt = 'Not found'/>
                            <span>{question.question}</span>
                        </div>
                        <div className= "checkbox-div">
                            {question.checkBoxData.map(((item) => {
                                return (
                                    <div >
                                        <input type ='Checkbox'  value = {item}/>
                                        <label for ={item} className = 'default-blue-text'>{item}</label>
                                    </div>
                                    )
                                }))
                            }
                        </div>
                    </div>
                )}
                )}
            </Carousel>
        </div>
    )
}

