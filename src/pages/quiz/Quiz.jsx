import { useParams } from 'react-router-dom';
import './Quiz.css';
import { useGetQuizQuestionsQuery } from '../../api/quizApi';
import { useEffect, useState } from 'react';
import QuestionCard from '../../components/questionCard/QuestionCard';
import Modal from '../../components/modal/Modal';

function Quiz() {
  const { difficulty, amount } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  const { data } = useGetQuizQuestionsQuery({
    amount,
    difficulty,
  });

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (data) {
      const formattedQuestions = data.results.map((question) => {
        const answers = shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);
        return { ...question, answers };
      });
      setQuestionData(formattedQuestions);
    }
  }, [data]);

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionData={questionData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default Quiz;
