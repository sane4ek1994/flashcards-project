import { Typography } from '@/components/ui/typography'
import { CurrentCardStateType } from '@/services/cards/card.slice'

import s from '@/pages/learnCard-page/learnCard-page.module.scss'

export const QuestionBody = ({ currentCard }: CurrentCardStateType) => {
  return (
    <>
      <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
      <div className={s.contentLearnBody}>
        <Typography className={s.contentLearnTextOne}>
          <span>Question</span>:{' '}
          <div className={s.questionAndImg}>
            <span>
              {currentCard.question.text !== 'undefined' || currentCard.question.text.trim() !== ''
                ? currentCard.question.text
                : 'no question'}
            </span>
            {currentCard.question.img && (
              <div>
                <img
                  alt={'picture of this question'}
                  className={s.imgQuestion}
                  src={currentCard.question.img}
                />
              </div>
            )}
          </div>
        </Typography>
        <Typography className={s.contentLearnTextTwo}>
          Number of attempts to answer the question: <span>{currentCard.shots?.toString()}</span>
        </Typography>
      </div>
    </>
  )
}
