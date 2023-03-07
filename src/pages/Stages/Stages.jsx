import Details from '../../components/Details';
import { useParams } from "react-router-dom";

const stages_arr = [
  {
    id: 1,
    part: "الجزء الأول: الإبداع الأدبي",
    title: "لعبة الاستعمالات المتعددة",
    no_questions: "3 أسئلة",
    type: "إجابات مفتوحة",
    description: "كثيراً ما يستخدم الناس المواد التي تستخدم بشكل يومي لأغراض محددة. وغالباً ما توجد استعمالات متعددة لنفس المواد والأدوات. على سبيل المثال، يمكن استخدام الجريدة كقبعة أو لحاف إضافة إلى استعمالات أخرى ممكنة. اكتب أكبر عدد ممكن من الاستعمالات البديلة والتي تتميز بالأصالة والابتكار  للمواد والأدوات . تذكر، كلما زاد عدد الاستعمالات البديلة التي يمكنك الإتيان بها، كلما كان ذلك أفضل!      ",
    question_id: 1,
  },
  {
    id: 2,
    part: "الجزء الثاني: الإبداع العلمي",
    title: "لعبة الأشكال غير المكتملة",
    no_questions: "3 أسئلة",
    type: "إجابات مفتوحة",
    description: "يتكون نشاط لعبة الأشكال من ٣ أشكال غير مكتملة والتي يُطلب منك من خلال النظر إليها كتابة أكبر عدد من الأشياء التي قد يمثلها هذا الشكل بالنسبة لك. هذا ليس اختباراً! فكر في هذا النشاط على أنه نوع من اللعب واستمتع به. تذكر ... كلما زاد عدد الأفكار الأصيلة والمبتكرة التي يمكنك الإتيان بها كان ذلك أفضل!    ",
    question_id: 4,
  }
]

const Stages = () => {
  let stage = {};
  const { stageId } = useParams();
  stages_arr.filter((elem) => elem.id === Number(stageId)).map((elem) => stage = elem )
  return (
    <Details
      part={stage.part}
      title={stage.title}
      no_questions={stage.no_questions}
      type={stage.type}
      description={stage.description}
      question_id={stage.question_id}
    />
  );
}

export default Stages;