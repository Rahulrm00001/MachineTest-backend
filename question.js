
const connectDB = require('./database');
const Question = require('./model/questionModel');

connectDB();

const addFakeQuestions = async (questions) => {
    try {
        
        const savedQuestions = [];

        
        for (const questionData of questions) {
            
            const newQuestion = new Question({
                text: questionData.text,
                options: questionData.options
            });

            
            const savedQuestion = await newQuestion.save();
            savedQuestions.push(savedQuestion);
        }

        console.log('Fake questions added successfully:', savedQuestions);
        return savedQuestions;
    } catch (error) {
        console.error('Error adding fake questions:', error);
        throw error; 
    }
};


const fakeQuestions = [
    {
        text: 'Which of the following methods is used to access HTML elements using Javascript?',
        options: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above']
    },
    
];

addFakeQuestions(fakeQuestions);



