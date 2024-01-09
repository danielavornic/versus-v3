import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '../common/Checkbox'
import DateInput from '../common/DatePicker'
import Input from '../common/Input'
import BookingQuestion from './BookingQuestion'

type BookingFormData = {
  date: Date
  eventInfo: string
  name: string
  email: string
  phone: string
  terms: boolean
}

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    mode: 'onChange',
  })
  const { query } = useRouter()
  const { artist } = query
  const [isTermsChecked, setIsTermsChecked] = useState(undefined)

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
    setIsTermsChecked(undefined)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        'w-full max-w-[380px] md:max-w-none lg:max-w-[400px] xl:w-[540px] 3xl:max-w-none 3xl:w-[546px] flex flex-col items-center',
      )}
      id="booking-form"
      noValidate
    >
      <div
        className={clsx(
          'w-full mb-[30px] 1.5xl:mb-[50px] flex flex-col items-center transition-all duration-500',
          {
            'hidden lg:block lg:opacity-0 lg:pointer-events-none': !artist,
          },
        )}
      >
        <h3 className="title text-[43px] mb-[42px] lg:min-h-[144px] 3xl:min-h-[221px] xl:mb-[57px] font-medium uppercase text-center leading-[48px] 3xl:text-[64px] 3xl:leading-[1] transition-all">
          <span className="3xl:text-[93px] text-center">Booking</span>
          <br />
          {artist ?? 'Satoshi'}
        </h3>

        <div className="space-y-[15px] flex flex-col items-center justify-center w-full sm:!max-w-[450px] md:max-w-none">
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DateInput
                onChange={(date) => field.onChange(date)}
                selected={field.value}
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
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
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

          <div className="w-full !pt-[10px]">
            <Checkbox
              {...register('terms', {
                onChange: (e) => setIsTermsChecked(e.target.checked),
              })}
              checked={isTermsChecked}
              id="terms"
              label="Sunt de acord ca datele personale să fie prelucrate"
            />
          </div>
        </div>

        <p className="text-[12px] text-red text-center min-h-[18px] mt-[28px]">
          {Object.keys(errors)
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
                  : !isTermsChecked && isTermsChecked !== undefined
                    ? 'Vă rugăm să acceptați prelucrarea datelor personale'
                    : null}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-10 lg:space-y-0 pb-20 md:pb-0">
        <h3 className="booking-text-line text-center uppercase lg:hidden overflow-hidden text-[20px] !leading-tight">
          Discover Your <br />
          Next Headliner
        </h3>
        <button
          type="submit"
          form="booking-form"
          className={clsx(
            'text-[18px] uppercase py-[24px] lg:!mb-10 px-[35px] font-medium transition-all align-self-start w-fit justify-center border !leading-[14px] border-white inline-block',
            {
              'bg-white text-black hover:bg-[#D2D2D2] focus:bg-white active:bg-white ':
                !Object.keys(errors).length &&
                isTermsChecked &&
                watch('eventInfo') &&
                watch('name') &&
                watch('email') &&
                watch('phone'),
            },
          )}
        >
          Get in touch
        </button>
        <Link
          href="/booking"
          className="underline uppercase font-medium text-lg block text-alm-white hover:text-white active:text-alm-white transition-all"
        >
          Close
        </Link>
      </div>
    </form>
  )
}

export default BookingForm
