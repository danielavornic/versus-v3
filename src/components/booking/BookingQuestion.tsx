import clsx from 'clsx'
import { useRef, useState } from 'react'

import useClickOutside from '~/hooks/useClickOutside'

const content = [
  {
    title: 'Ce eveniment este?',
    description: '(denumire, tematică, specific, festival/public/privat)',
  },
  {
    title: 'Unde va avea loc?',
    description: '(țară, oraș, adresă, exterior/interior/locație concretă)',
  },
  {
    title: 'Când va avea loc?',
    description: '(data exactă, ora aproximativă/parte a zilei)',
  },
  {
    title: 'Cine va mai evolua?',
    description: '(artiști, moderatori)',
  },
  {
    title: 'Există parteneri?',
    description:
      '(organizatori, finanțatori - pentru a \nevita conflicte de interes)',
  },
  {
    title:
      'Vă rugăm să atașați linkurile profilelor social media ale evenimentului și/sau organizatorului și alte materiale reprezenative',
    description: '(aftermovie, afșe, poze, video)',
  },
]

const BookingQuestion = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const qRef = useRef<HTMLDivElement>(null)

  useClickOutside(qRef, () => setIsOpen(false))

  return (
    <div
      className="absolute right-0 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
      ref={qRef}
    >
      <div
        className={clsx(
          'w-[15px] h-[15px] absolute right-[-30px] border border-alm-white rounded-[5px] flex justify-center items-center cursor-pointer transition-all',
          { 'bg-alm-white': isOpen || isHovered },
        )}
      >
        <svg
          width="9"
          height="11"
          viewBox="0 0 9 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.3869 7.17331C3.3869 6.76443 3.49579 6.41554 3.71357 6.12665C3.93135 5.83776 4.28023 5.56442 4.76023 5.30665L5.77357 4.75998C6.05801 4.60887 6.28246 4.42665 6.4469 4.21331C6.61135 3.99998 6.69357 3.77331 6.69357 3.53331C6.69357 3.19998 6.60023 2.91109 6.41357 2.66665C6.23135 2.4222 5.96912 2.23554 5.6269 2.10665C5.28468 1.97331 4.88023 1.90665 4.41357 1.90665C3.9469 1.90665 3.53357 1.97998 3.17357 2.12665C2.81357 2.27331 2.52468 2.48443 2.3069 2.75998C2.09357 3.03554 1.96468 3.35998 1.92023 3.73331H0.240234C0.293568 3.05776 0.493568 2.47554 0.840234 1.98665C1.19135 1.49776 1.66912 1.12443 2.27357 0.866648C2.88246 0.60887 3.59579 0.47998 4.41357 0.47998C5.23579 0.47998 5.94246 0.597758 6.53357 0.833314C7.12912 1.06887 7.58468 1.40887 7.90023 1.85331C8.21579 2.29776 8.37357 2.82665 8.37357 3.43998C8.37357 3.88887 8.23801 4.30887 7.9669 4.69998C7.70023 5.08665 7.31579 5.41331 6.81357 5.67998L5.73357 6.25331C5.45801 6.39998 5.25579 6.55331 5.1269 6.71331C4.99801 6.86887 4.93357 7.0622 4.93357 7.29331V7.71998H3.45357C3.40912 7.56443 3.3869 7.3822 3.3869 7.17331ZM4.16023 10.7733C3.84468 10.7733 3.58468 10.6778 3.38023 10.4866C3.18023 10.2911 3.08023 10.0444 3.08023 9.74665C3.08023 9.44887 3.18023 9.20443 3.38023 9.01331C3.58468 8.81776 3.84468 8.71998 4.16023 8.71998C4.48023 8.71998 4.74023 8.81554 4.94023 9.00665C5.14023 9.19776 5.24023 9.44443 5.24023 9.74665C5.24023 10.0489 5.14023 10.2955 4.94023 10.4866C4.74023 10.6778 4.48023 10.7733 4.16023 10.7733Z"
            fill={isOpen || isHovered ? '#000' : '#E0E4EA'}
          />
        </svg>
      </div>

      <div
        className={clsx(
          'bg-alm-white p-5 top-[22px] rounded-[10px] absolute right-[-322px] transition-all ease-in-out text-black w-[306px] z-[1]',
          { 'opacity-0 pointer-events-none': !isOpen },
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="space-y-[15px]">
          {content.map(({ title, description }, index) => (
            <li className="space-y-[8px]" key={index}>
              <h4 className="font-medium text-[12px]">{title}</h4>
              <p className="text-[8px] text-gray whitespace-pre-line">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookingQuestion
