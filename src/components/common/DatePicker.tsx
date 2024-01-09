import clsx from 'clsx'
import { useRef, useState } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import useClickOutside from '~/hooks/useClickOutside'

const DateInputButton = ({
  value,
  placeholder,
}: {
  value: string
  placeholder: string
}) => {
  return (
    <div
      className={clsx(
        'rounded-[10px] items-center space-x-[5px] px-[12px] h-[50px] border  text-alm-white text-[12px] placeholder:text-alm-white bg-black w-[80px] flex justify-center focus:outline-none',
        {
          'border-green': value,
          'border-alm-white': !value,
        },
      )}
    >
      <span className="text-[12px]">{value ?? placeholder}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
      >
        <path
          d="M0.593262 0.726074L4.30826 5.18407C4.33172 5.21221 4.36108 5.23484 4.39426 5.25038C4.42744 5.26591 4.46363 5.27396 4.50026 5.27396C4.5369 5.27396 4.57308 5.26591 4.60626 5.25038C4.63944 5.23484 4.6688 5.21221 4.69226 5.18407L8.40626 0.726074"
          stroke="#E0E4EA"
        />
      </svg>
    </div>
  )
}

const DateInput = (props: ReactDatePickerProps) => {
  const { selected, onChange } = props
  const [month, day, year] = selected
    ? selected.toLocaleDateString('en-US').split('/')
    : []

  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const handleChange = (e) => {
    onChange(e, e)
    setIsOpen(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  useClickOutside(ref, () => setIsOpen(false))

  return (
    <div className="flex flex-col items-center relative" ref={ref}>
      <div
        className="flex space-x-[10px] justify-center w-auto cursor-pointer"
        onClick={handleClick}
      >
        <DateInputButton value={day} placeholder="Zi" />
        <DateInputButton value={month} placeholder="Lună" />
        <DateInputButton value={year} placeholder="An" />
      </div>
      {isOpen && (
        <DatePicker
          {...props}
          disabledKeyboardNavigation
          onChange={handleChange}
          closeOnScroll={true}
          inline
        />
      )}
    </div>
  )
}

export default DateInput
