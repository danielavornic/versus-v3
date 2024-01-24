import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { clearCart } from '~/store/cartSlice'
import { useAppDispatch, useAppSelector } from '~/store/hooks'

import Checkbox from '../common/Checkbox'
import Input from '../common/Input'

type CheckoutFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  isPickupChecked: boolean
  isPaymentChecked: boolean
  isTermsChecked: boolean
}

const CartCheckoutForm = () => {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  const [isPickupChecked, setIsPickupChecked] = useState(false)
  const [isPaymentChecked, setIsPaymentChecked] = useState(false)
  const [isTermsChecked, setIsTermsChecked] = useState(false)

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    mode: 'onChange',
  })

  const isCompleted =
    !Object.keys(errors).length &&
    watch('firstName') &&
    watch('lastName') &&
    watch('email') &&
    watch('phone') &&
    watch('isPickupChecked') &&
    watch('isPaymentChecked') &&
    watch('isTermsChecked')

  const onSubmit = () => {
    console.log('submit')
    dispatch(clearCart())
    push('/shop/checkout-sucess')
  }

  return (
    <div className="lg:w-[450px]">
      <h2 className="text-[28px] lg:text-[43px] mb-[28px] lg:mb-[42px]">
        Detalii Personale
      </h2>
      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-[15px]"
        id="checkout-form"
      >
        <Input
          {...register('firstName', { required: 'Numele este obligatoriu' })}
          placeholder="nume"
          type="text"
          theme="light"
          isError={!!errors.firstName}
          isCompleted={!errors.firstName && !!watch('firstName')}
        />
        <Input
          {...register('lastName', { required: 'Numele este obligatoriu' })}
          placeholder="prenume"
          type="text"
          theme="light"
          isError={!!errors.lastName}
          isCompleted={!errors.lastName && !!watch('lastName')}
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
          theme="light"
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
          theme="light"
          isError={!!errors.phone}
          isCompleted={!errors.phone && !!watch('phone')}
          leftComponent={<span className="text-[12px]">+373</span>}
        />

        <h4 className="text-[20px] !mt-[28px]">Livrarea comenzii prin</h4>
        <Checkbox
          {...register('isPickupChecked', {
            onChange: (e) => setIsPickupChecked(e.target.checked),
          })}
          checked={isPickupChecked}
          id="pickup"
          theme="light"
          label="Ridicare pe adresa Șos. Hîncești nr.61, Chișinău"
        />
        <h4 className="text-[20px] !mt-[28px]">Metoda de plată</h4>
        <Checkbox
          {...register('isPaymentChecked', {
            onChange: (e) => setIsPaymentChecked(e.target.checked),
          })}
          checked={isPaymentChecked}
          id="payment"
          theme="light"
          label="Cash/Card la ridicare"
        />

        <div className="!mt-[42px]">
          <h4 className="text-center text-[28px] mb-[28px] lg:text-[43px]">
            Total comandă
          </h4>
          <p className="text-[20px] text-center mb-[42px]">
            {cart.total}.0 MDL
          </p>
          <div className="w-full mx-auto flex justify-center">
            <Checkbox
              {...register('isTermsChecked', {
                onChange: (e) => setIsTermsChecked(e.target.checked),
              })}
              checked={isTermsChecked}
              id="terms"
              theme="light"
              label="Sunt de acord ca datele personale să fie prelucrate"
            />
          </div>

          <button
            type="submit"
            form="checkout-form"
            className="w-[132px] font-medium uppercase mx-auto mt-[34px] transition-full hover:bg-opacity-[0.85] h-[48px] bg-black text-white flex items-center justify-center"
          >
            Trimite
          </button>
        </div>
      </form>
    </div>
  )
}

export default CartCheckoutForm
