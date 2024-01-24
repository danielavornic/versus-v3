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
      'h-[50px] px-[13px] text-[12px] border rounded-[10px] placeholder:text-alm-white w-full focus:outline-none',
      {
        '!border-red': isError,
        '!border-green': isCompleted,
        'border-alm-white bg-black text-white': theme === 'dark',
        'border-black bg-[#fff] text-black': theme === 'light',
      },
      props.className,
    )

    if (!leftComponent)
      return (
        <input
          ref={ref}
          className={containerClassNames}
          autoComplete="nope"
          {...props}
        />
      )

    return (
      <div className={clsx('flex items-center', containerClassNames)}>
        {leftComponent}
        <input
          ref={ref}
          className={clsx(
            'w-full  ml-[12px] border-l my-[15px]  pl-[12px] focus:outline-none',
            {
              'bg-black border-alm-white': theme === 'dark',
              'bg-[#fff] border-black': theme === 'light',
            },
          )}
          autoComplete="nope"
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
