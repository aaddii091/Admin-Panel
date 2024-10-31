import { QUESTIONS, QUESTION_OPTIONS } from '@/utils/constants'

const list = QUESTIONS.map((question: string, index) => ({
  id: index,
  label: question,
  type: 'radio',
  required: true,
  optionList: [
    {
      id: 0,
      label: Object.keys(QUESTION_OPTIONS)[0],
      value: Object.values(QUESTION_OPTIONS)[0].toString()
    },
    {
      id: 1,
      label: Object.keys(QUESTION_OPTIONS)[1],
      value: Object.values(QUESTION_OPTIONS)[1].toString()
    },
    {
      id: 2,
      label: Object.keys(QUESTION_OPTIONS)[2],
      value: Object.values(QUESTION_OPTIONS)[2].toString()
    },
    {
      id: 3,
      label: Object.keys(QUESTION_OPTIONS)[3],
      value: Object.values(QUESTION_OPTIONS)[3].toString()
    },
    {
      id: 4,
      label: Object.keys(QUESTION_OPTIONS)[4],
      value: Object.values(QUESTION_OPTIONS)[4].toString()
    }
  ]
}))

console.log('list: ', list)

export const form_data = {
  title: 'Uncover Your Unique Personality Blueprint with the Big Five Test',
  subTitle:
    "Your personality shapes how you experience the world, make decisions, and connect with others. The Big Five test delves into the core traits that define you—openness, conscientiousness, extraversion, agreeableness, and emotional stability. By exploring where you stand on each of these, you’ll gain a deeper understanding of your natural tendencies, empowering you to make more informed choices and build stronger, more meaningful relationships. Ready to discover the true you? Let’s begin.",
  questionnaireId: '123456789',
  list: list
}

export const form_submit_response = {
  result: 'ok'
}
