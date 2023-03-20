import Question from '../../components/Question';
import { useParams } from "react-router-dom";

const questions_arr = [
  {
    id: 1,
    stage_id: 1,
    title: "الاستعمالات المتعددة",
    part: "السؤال الأول",
    question: "إكتب أكبر عدد ممكن من الاستعمالات البديلة للملعقة ",
    qusestion_info: "عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/spoon.svg",
    next_page: "stages/1/questions/2",
  },
  {
    id: 2,
    stage_id: 1,
    title: "الاستعمالات المتعددة",
    part: "السؤال الثاني",
    question: "إكتب أكبر عدد ممكن من الاستعمالات البديلة للعجلة",
    qusestion_info: "عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/wheel.svg",
    next_page: "stages/1/questions/3",
  },
  {
    id: 3,
    stage_id: 1,
    title: "الاستعمالات المتعددة",
    part: "السؤال الثالث",
    question: "إكتب أكبر عدد ممكن من الاستعمالات البديلة لفرشاة الأسنان",
    qusestion_info: "عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/brush.svg",
    next_page: "stages/2",
  },
  {
    id: 4,
    stage_id: 2,
    title: "الأشكال غير المكتملة",
    part: "السؤال الأول",
    question: "أنظر للشكل أدناه. ما الذي تراه؟ اكتب أكبر عدد من الأشياء التي قد يمثلها هذا الشكل بالنسبة لك. ",
    qusestion_info: "تذكر ... كلما زاد عدد الأفكار الأصيلة والمبتكرة التي يمكنك الإتيان بها كان ذلك أفضل. عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/rope.svg",
    next_page: "stages/2/questions/5",
  },
  {
    id: 5,
    stage_id: 2,
    title: "الأشكال غير المكتملة",
    part: "السؤال الثاني",
    question: "أنظر للشكل أدناه. ما الذي تراه؟ اكتب أكبر عدد من الأشياء التي قد يمثلها هذا الشكل بالنسبة لك. ",
    qusestion_info: "تذكر ... كلما زاد عدد الأفكار الأصيلة والمبتكرة التي يمكنك الإتيان بها كان ذلك أفضل. عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/squares.svg",
    next_page: "stages/2/questions/6",
  },
  {
    id: 6,
    stage_id: 2,
    title: "الأشكال غير المكتملة",
    part: "السؤال الثالث",
    question: "أنظر للشكل أدناه. ما الذي تراه؟ اكتب أكبر عدد من الأشياء التي قد يمثلها هذا الشكل بالنسبة لك. ",
    qusestion_info: "تذكر ... كلما زاد عدد الأفكار الأصيلة والمبتكرة التي يمكنك الإتيان بها كان ذلك أفضل. عندما تستنفذ أفكارك، بإمكانك الانتقال للسؤال التالي",
    question_img: "/images/lines.svg",
    next_page: "confirmation",
  },
]

const Questions = ({ getAnswers, getQuestionId, getTimers }) => {
  let question = {};
  const { stageId, questionId } = useParams();
  getQuestionId(questionId);
  questions_arr.filter((elem) => (elem.id === Number(questionId) && elem.stage_id === Number(stageId))).map((elem) => question = elem )

  return (
    <Question
      title={question.title}
      part={question.part}
      question={question.question}
      qusestion_info={question.qusestion_info}
      question_img={question.question_img}
      next_page={question.next_page}
      question_id={question.id}
      getAnswers={getAnswers}
      getTimers={getTimers}
    />
  );
}

export default Questions;