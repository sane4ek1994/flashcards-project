import { useParams } from 'react-router-dom'

import { CardsIcons } from '@/components/layout/cards/icons/cards-icons'
import { Rating } from '@/components/ui/rating'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useGetCardsQuery } from '@/services/cards/cards.service'

import s from './cards.module.scss'

export const TableBodyCards = () => {
  const { id } = useParams()
  const { data } = useGetCardsQuery(id ?? '')

  return (
    <TableBody>
      {data?.items.map(card => {
        return (
          <TableRow key={card.id}>
            <TableCell>
              <div className={s.questionAndImg}>
                {card.questionImg && (
                  <img alt={'img of this card'} className={s.img} src={card.questionImg} />
                )}
                <span>{card.question}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className={s.questionAndImg}>
                {card.answerImg && (
                  <img alt={'img of this card'} className={s.img} src={card.answerImg} />
                )}
                <span>{card.answer}</span>
              </div>
            </TableCell>
            <TableCell>{new Date(card?.updated).toLocaleDateString()}</TableCell>
            <TableCell>
              <Rating onClick={() => {}} value={card.grade} />
            </TableCell>
            <TableCell>
              <CardsIcons card={card} />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
