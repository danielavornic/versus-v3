import clsx from 'clsx'
import { forwardRef, useState } from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  theme?: 'light' | 'dark'
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, theme = 'dark', checked, ...props }: CheckboxProps, ref) => {
    return (
      <label className="flex items-center cursor-pointer" htmlFor={props.id}>
        <input
          type="radio"
          className="absolute h-0 w-0 m-0 p-0"
          checked={checked}
          {...props}
        />
        <div
          className={clsx(
            'min-h-[14px] min-w-[14px] border  flex items-center justify-center   focus:outline-none',
            {
              'border-alm-white text-alm-white bg-black': theme === 'dark',
              '!bg-white': checked && theme === 'dark',
              'border-black text-black bg-white': theme === 'light',
              '!bg-black': checked && theme === 'light',
            },
          )}
        >
          {checked && (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7342 2.78163C10.832 2.66205 10.9053 2.52437 10.9499 2.37645C10.9946 2.22854 11.0096 2.07328 10.9942 1.91954C10.9789 1.7658 10.9334 1.6166 10.8603 1.48045C10.7873 1.3443 10.6881 1.22387 10.5686 1.12604C10.449 1.0282 10.3113 0.95488 10.1634 0.910253C10.0155 0.865627 9.86021 0.850572 9.70647 0.865948C9.55273 0.881325 9.40353 0.926831 9.26738 0.999869C9.13123 1.07291 9.0108 1.17205 8.91297 1.29163L4.33295 6.88929L2.88236 5.80105C2.75876 5.70836 2.61812 5.64091 2.46845 5.60257C2.31879 5.56422 2.16304 5.55573 2.0101 5.57758C1.85715 5.59943 1.71001 5.65119 1.57707 5.72991C1.44413 5.80862 1.32799 5.91275 1.23529 6.03635C1.1426 6.15995 1.07515 6.30059 1.03681 6.45026C0.998464 6.59992 0.989975 6.75567 1.01182 6.90861C1.05595 7.2175 1.22097 7.4962 1.47059 7.68341L3.37236 9.10989C3.73645 9.38301 4.19199 9.5049 4.64382 9.45009C5.09566 9.39528 5.50884 9.16802 5.79707 8.81577L10.7342 2.78163Z"
                stroke={theme === 'dark' ? '#050505' : '#fff'}
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
        <span
          className={clsx('text-[12px] ml-[10px]', {
            'text-alm-white': theme === 'dark',
            'text-black': theme === 'light',
          })}
        >
          {label}
        </span>
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
