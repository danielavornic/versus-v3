import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '../common/Checkbox'
import DateInput from '../common/DatePicker'
import Input from '../common/Input'
import LoadingButton from '../common/LoadingButton'
import BookingQuestion from './BookingQuestion'

type BookingFormData = {
  date: Date
  eventInfo: string
  name: string
  email: string
  phone: string
  mediaLink?: string
  terms: boolean
}

const BookingForm = ({ artist, setArtist }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<BookingFormData>({
    mode: 'onChange',
  })
  const [isTermsChecked, setIsTermsChecked] = useState(undefined)
  const [buttonState, setButtonState] = useState('')
  const [showLoadingBtn, setShowLoadingBtn] = useState(false)

  const eventInfo = watch('eventInfo')
  const name = watch('name')
  const email = watch('email')
  const phone = watch('phone')
  const mediaLink = watch('mediaLink')

  const onSubmit = () => mutate()

  const { mutate } = useMutation({
    mutationFn: () => {
      const res = fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify({
          date: watch('date'),
          eventInfo,
          name,
          email,
          phone,
          mediaLink,
          currentTime: new Date(),
          artist,
        }),
      })
      return res
    },
    onSuccess: () => {
      reset()
      clearErrors()
      setIsTermsChecked(undefined)
      setButtonState('success')
      window.scrollTo(0, 0)
      setShowLoadingBtn(false)
    },
  })

  useEffect(() => {
    reset()
    setIsTermsChecked(undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist])

  useEffect(() => {
    if (
      !Object.keys(errors).length &&
      isTermsChecked &&
      eventInfo &&
      name &&
      email &&
      phone
    ) {
      setShowLoadingBtn(true)
    } else {
      setShowLoadingBtn(false)
    }
  }, [errors, isTermsChecked, eventInfo, name, email, phone, mediaLink])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        'w-full max-w-[380px] md:max-w-none lg:absolute lg:h-full lg:left-0 lg:right-0 relative lg:w-[800px] 3xl:w-[1000px] mx-auto lg:px-10  flex flex-col items-center',
        { 'bg-black z-20': artist },
      )}
      id="booking-form"
      noValidate
    >
      <div
        className={clsx(
          'w-full flex flex-col items-center transition-all duration-500',
          {
            'hidden lg:block lg:opacity-0 lg:pointer-events-none -z-10':
              !artist,
            'z-20': artist,
          },
        )}
      >
        {buttonState === 'success' ? (
          <>
            <h2 className="text-[43px] lg:mb-[350px] lg:translate-y-[100px] text-center leading-[48px] 3xl:text-[64px] 3xl:leading-[1]">
              your message <br />
              is on its way
            </h2>
            <p
              onClick={() => {
                setArtist('')
                reset()
                setIsTermsChecked(undefined)
                if (buttonState === 'success') {
                  setButtonState('')
                }
              }}
              role="button"
              className={clsx(
                'underline cursor-pointer uppercase focus:outline-none font-medium duration-500 text-lg block text-alm-white hover:text-white active:text-alm-white transition-all',
              )}
            >
              Close
            </p>
          </>
        ) : (
          <h3 className="text-[43px] mb-[42px] xl:mb-[50px] font-medium uppercase text-center leading-[48px] 3xl:text-[64px] 3xl:leading-[1.1] transition-all">
            <span className="text-center">Booking</span>
            <br />
            {artist ?? 'Satoshi'}
          </h3>
        )}

        <div
          className={clsx(
            'space-y-[15px] flex flex-col items-center justify-center w-full sm:!max-w-[450px] md:max-w-none',
            {
              'hidden lg:pointer-events-none': buttonState === 'success',
            },
          )}
        >
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DateInput
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                minDate={new Date()}
              />
            )}
          />

          <div className="flex w-full relative">
            <textarea
              {...register('eventInfo', {
                required: true,
                maxLength: 250,
              })}
              placeholder="Info eveniment (max 250 caractere)"
              className={clsx(
                'min-h-[85px] bg-black rounded-[10px] placeholder:text-alm-white text-white border-alm-white py-[18px] px-[13px] text-[12px] border w-full  focus:outline-none max-h-[300px]',
                {
                  '!border-green': !errors.eventInfo && watch('eventInfo'),
                  '!border-red': !!errors.eventInfo,
                },
              )}
            />
            <BookingQuestion />
          </div>

          <Input
            {...register('name', { required: 'Numele este obligatoriu' })}
            placeholder="Nume"
            type="text"
            isError={!!errors.name}
            isCompleted={!errors.name && !!watch('name')}
          />

          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: 'Email-ul este invalid',
              },
            })}
            placeholder="Email"
            type="email"
            isError={!!errors.email}
            isCompleted={!errors.email && !!watch('email')}
          />

          <Input
            {...register('phone', {
              required: true,
              minLength: 8,
              maxLength: 21,
              pattern: {
                value: /^[\s()\-0-9]*$/,
                message: 'Numărul de telefon este invalid',
              },
            })}
            type="text"
            isError={!!errors.phone}
            isCompleted={!errors.phone && !!watch('phone')}
            leftComponent={<span className="text-[12px]">+373</span>}
          />

          <Input
            {...register('mediaLink', {
              pattern: {
                value:
                  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)\/?/,
                message: 'Link-ul este invalid',
              },
            })}
            placeholder="Media Link (optional)"
            type="text"
            isError={!!errors.mediaLink}
            isCompleted={!!watch('mediaLink')}
          />

          <div className="w-full !pt-[10px]">
            <Checkbox
              {...register('terms', {
                required: true,
                onChange: (e) => {
                  setIsTermsChecked(e.target.checked)
                  setValue('terms', e.target.checked)
                  clearErrors('terms')
                },
              })}
              checked={isTermsChecked}
              id="terms"
              theme="dark"
              label="Sunt de acord ca datele personale să fie prelucrate"
            />
          </div>
        </div>

        <p className="text-[12px] text-red text-center min-h-[18px] mt-[28px]">
          {buttonState === 'success'
            ? null
            : Object.keys(errors)
                  .filter((key) => key !== 'terms')
                  .some((key) => errors[key].type === 'required')
              ? 'Vă rugăm să completați toate câmpurile'
              : errors.eventInfo?.type === 'maxLength'
                ? 'Este depășită limita de de caractere (250)'
                : errors.email?.type === 'pattern'
                  ? 'E-mailul este invalid. Verificați să conțină @'
                  : errors.phone?.type === 'minLength' ||
                      errors.phone?.type === 'pattern'
                    ? 'Numărul de telefon este invalid'
                    : errors.terms?.type === 'required' &&
                        buttonState !== 'success'
                      ? 'Vă rugăm să acceptați prelucrarea datelor personale'
                      : errors.mediaLink
                        ? 'Link-ul este invalid'
                        : null}
        </p>
      </div>

      <div
        className={clsx(
          'z-10 mt-[30px] flex flex-col items-center space-y-10 lg:pb-10 lg:flex-row lg:items-center lg:space-y-0 pb-20 md:pb-0',
          {
            'lg:opacity-0 lg:pointer-events-none': !artist,
          },
        )}
      >
        <h3
          className={clsx(
            'booking-text-line text-center uppercase lg:hidden overflow-hidden text-[20px] !leading-tight',
            { 'lg:opacity-0 lg:pointer-events-none': !artist },
          )}
        >
          Discover Your <br />
          Next Headliner
        </h3>
        {showLoadingBtn ? (
          <LoadingButton
            text="Send"
            type="submit"
            form="booking-form"
            buttonState={buttonState}
            setButtonState={setButtonState}
            className={clsx('hidden lg:inline-block', {
              'opacity-0 !w-0 hidden': buttonState === 'success',
            })}
          />
        ) : (
          <button
            type="submit"
            form="booking-form"
            className={clsx(
              'text-[18px] hidden lg:inline-block uppercase outline-btn h-[64px] w-[240px] font-medium transition-all align-self-start justify-center border !leading-[14px]',
              {
                '!hidden': buttonState === 'success',
              },
            )}
          >
            Send
          </button>
        )}

        <p
          onClick={() => {
            setArtist('')
            reset()
            setIsTermsChecked(undefined)
            if (buttonState === 'success') {
              setButtonState('')
            }
          }}
          role="button"
          className={clsx(
            'underline cursor-pointer uppercase focus:outline-none font-medium duration-500 text-lg block lg:ml-10 text-alm-white hover:text-white active:text-alm-white transition-all',
            {
              hidden: buttonState === 'success',
              'opacity-0 pointer-events-none !w-0 !ml-0': !artist,
            },
          )}
        >
          Close
        </p>
      </div>
      <a
        // href={`${process.env.NEXT_PUBLIC_HOST}/#booking`}
        href="https://versusartist.com/#booking"
        className={clsx(
          'underline uppercase w-fit lg:fixed text-center left-0 right-0 z-10 mx-auto bottom-[70px] xl:bottom-[30px] 1.5xl:bottom-[20px] 3xl:bottom-[115px] font-medium duration-500 text-lg hidden text-alm-white hover:text-white active:text-alm-white transition-all',
          {
            '!inline-block': !artist,
          },
        )}
      >
        Close
      </a>
    </form>
  )
}

export default BookingForm
