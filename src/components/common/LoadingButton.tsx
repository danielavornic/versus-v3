import clsx from 'clsx'
import ProgressButton from 'react-progress-button'

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  buttonState: string
  setButtonState: (state: string) => void
  theme?: 'black' | 'white'
}

const LoadingButton = ({
  text,
  buttonState,
  setButtonState,
  theme = 'white',
  ...props
}: LoadingButtonProps) => {
  const handleClick = (e) => {
    setButtonState('loading')

    setTimeout(() => {
      setButtonState('success')
    }, 3000)
  }

  return (
    <div>
      <ProgressButton
        onClick={handleClick}
        state={buttonState}
        durationSuccess={3000}
        {...props}
      >
        {text}
      </ProgressButton>
    </div>
  )
}

export default LoadingButton
