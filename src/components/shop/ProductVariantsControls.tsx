/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Product } from '~/lib/sanity.queries'

interface ProductVariantsControlsProps {
  product: Product
  qty: number
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
              'border-[1px] px-[10px] flex items-center justify-center h-[30px] border-alm-white text-[12px]',
              {
                'border-black': option === selectedOption,
                'uppercase w-[30px]': isSize,
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
}: ProductVariantsControlsProps) => {
  const { variants } = product

  const { query, push, pathname } = useRouter()
  const { size: selectedSize, color: selectedColor } = query

  const stock = variants.find(
    (variant) => variant.size === query.size && variant.color === query.color,
  )?.stock

  const availableSizes = []
  variants.forEach((variant) => {
    if (!availableSizes.includes(variant.size)) {
      availableSizes.push(variant.size)
    }
  })

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

  const increaseQty = () => {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  useEffect(() => {
    setQty(1)
  }, [selectedSize, selectedColor, setQty])

  useEffect(() => {
    if (!selectedSize || !selectedColor) {
      push(
        {
          pathname: '/shop/satoshi/[...slug]',
          query: {
            ...query,
            ...(!selectedSize && { size: availableSizes[0] }),
            ...(!selectedColor && { color: availableColors[0] }),
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
        onClick={(size) => {
          push(
            {
              pathname: '/shop/satoshi/[...slug]',
              query: {
                ...query,
                size,
              },
            },
            undefined,
            { shallow: true },
          )
        }}
      />

      <PropertyOptions
        title="Color"
        options={availableColors}
        selectedOption={selectedColor}
        onClick={(color) => {
          push(
            {
              pathname: '/shop/satoshi/[...slug]',
              query: {
                ...query,
                color,
              },
            },
            undefined,
            { shallow: true },
          )
        }}
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
            className={clsx(
              'border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase',
              {
                'cursor-not-allowed': qty === stock,
              },
            )}
            title={qty === stock ? 'No more stock' : undefined}
            onClick={increaseQty}
          >
            +
          </button>
        </div>
      </div>

      <button className="bg-black hover:bg-opacity-[85%] active:bg-alm-white transition-all font-medium mx-auto w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]">
        Adaugă în coș
      </button>
    </div>
  )
}

export default ProductVariantsControls
