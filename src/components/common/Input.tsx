import clsx from 'clsx'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: 'light' | 'dark'
  isError?: boolean
  isCompleted?: boolean
  leftComponent?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      theme = 'dark',
      isError,
      isCompleted,
      leftComponent,
      ...props
    }: InputProps,
    ref,
  ) => {
    const containerClassNames = clsx(
      'h-[50px] px-[13px] text-[12px] border border-alm-white rounded-[10px] placeholder:text-alm-white bg-black w-full focus:outline-none text-white',
      {
        '!border-red': isError,
        '!border-green': isCompleted,
      },
      props.className,
    )

    if (!leftComponent)
      return <input ref={ref} className={containerClassNames} {...props} />

    return (
      <div className={clsx('flex items-center', containerClassNames)}>
        {leftComponent}
        <input
          ref={ref}
          className="w-full bg-black ml-[12px] border-l my-[15px] border-alm-white pl-[12px] focus:outline-none"
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
