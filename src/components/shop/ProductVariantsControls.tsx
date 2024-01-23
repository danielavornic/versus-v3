/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ProductSize } from 'types/product'

import { Product } from '~/lib/sanity.queries'
import { addToCart } from '~/store/cartSlice'
import { useAppDispatch } from '~/store/hooks'

interface ProductVariantsControlsProps {
  product: Product
  qty: number
  artist: string
  setQty: (qty: number) => void
}

const PropertyOptions = ({ title, options, selectedOption, onClick }) => {
  const isSize = title === 'Size'

  return (
    <div className="space-y-[15px] flex flex-col items-center lg:items-start">
      <span className="text-xl font-semibold uppercase">{title}</span>
      <div className="flex space-x-[5px]">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onClick(option)}
            className={clsx(
              'border-[1px] px-[10px] flex items-center font-medium justify-center h-[30px] border-alm-white text-[12px]',
              {
                'border-black':
                  (option === selectedOption && isSize) || option === 'black',

                'uppercase w-[30px]': isSize,

                'border-green': option === 'green',
                'bg-green': selectedOption === 'green' && option === 'green',

                'border-alm-white': option === 'white',
                'bg-alm-white':
                  selectedOption === 'white' && option === 'white',

                'border-hot-pink': option === 'pink',
                'bg-hot-pink': selectedOption === 'pink' && option === 'pink',

                'bg-black text-white':
                  selectedOption === 'black' && option === 'black',
              },
            )}
          >
            {isSize ? option.slice(0, 1) : option}
          </button>
        ))}
      </div>
    </div>
  )
}

const ProductVariantsControls = ({
  product,
  qty,
  setQty,
  artist,
}: ProductVariantsControlsProps) => {
  const { variants, color: selectedColor } = product

  const dispatch = useAppDispatch()

  const { query, push } = useRouter()
  const { size: selectedSize } = query

  const availableSizes = Object.values(ProductSize)

  const availableColors = []
  variants.forEach((variant) => {
    if (!availableColors.includes(variant.color)) {
      availableColors.push(variant.color)
    }
  })

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const increaseQty = () => setQty(qty + 1)

  const handleSizeClick = (size) => {
    push(
      {
        pathname: `/shop/${artist}/[...slug]`,
        query: {
          ...query,
          size,
        },
      },
      undefined,
      { shallow: true },
    )
  }

  const handleColorClick = (color) => {
    const product = variants.find((variant) => variant.color === color).product

    if (!product) return

    push({
      pathname: `/shop/${artist}/${product.slug.current}`,
      query: {
        size: selectedSize,
      },
    })
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty, size: String(selectedSize) }))
  }

  useEffect(() => {
    setQty(1)
  }, [selectedSize, selectedColor, setQty])

  useEffect(() => {
    if (!selectedSize || !selectedColor) {
      push(
        {
          pathname: `/shop/${artist}/[...slug]`,
          query: {
            ...query,
            ...(!selectedSize && { size: availableSizes[0] }),
          },
        },
        undefined,
        { shallow: true },
      )
    }
  }, [product])

  return (
    <div className="my-[42px] space-y-[28px]">
      <PropertyOptions
        title="Size"
        options={availableSizes}
        selectedOption={selectedSize}
        onClick={handleSizeClick}
      />

      <PropertyOptions
        title="Color"
        options={availableColors}
        selectedOption={selectedColor}
        onClick={handleColorClick}
      />

      <div className="space-y-[15px] flex flex-col items-center lg:items-start">
        <span className="text-xl font-semibold uppercase">Quantity</span>
        <div className="flex space-x-[5px]">
          <button
            className="border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase"
            onClick={decreaseQty}
          >
            -
          </button>
          <span className="border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase flex items-center justify-center">
            {qty}
          </span>
          <button
            className="border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase"
            onClick={increaseQty}
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-black hover:bg-opacity-[85%] active:bg-alm-white transition-all font-medium mx-auto w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]"
      >
        Adaugă în coș
      </button>
    </div>
  )
}

export default ProductVariantsControls
