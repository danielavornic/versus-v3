/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Product } from '~/lib/sanity.queries'
import { addToCart } from '~/store/cartSlice'
import { useAppDispatch } from '~/store/hooks'
import { ProductSize } from '~/types/product'

interface ProductVariantsControlsProps {
  product: Product
  qty: number
  artist: string
  setQty: (qty: number) => void
  showVariants?: boolean
}

const PropertyOptions = ({
  title,
  options,
  selectedOption,
  onClick,
  isOnlyOption,
}) => {
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
                  selectedOption === 'black' &&
                  option === 'black' &&
                  !isOnlyOption,
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
  showVariants = true,
}: ProductVariantsControlsProps) => {
  const {
    variants,
    color: selectedColor,
    slug,
    inStock,
    inStockS,
    inStockM,
    inStockL,
    category,
  } = product

  const isInStock =
    ((category === 'Album CD' || category === 'Carnet') && inStock) ||
    (category !== 'Album CD' &&
      category !== 'Carnet' &&
      (inStockS || inStockM || inStockL))

  const dispatch = useAppDispatch()

  const { pathname, query, push } = useRouter()
  const [selectedSize, setSize] = useState<string | null>('s')

  const availableSizes = Object.values(ProductSize)

  const availableColors = []
  if (showVariants) {
    if (variants) {
      variants.forEach((variant) => {
        if (!availableColors.includes(variant.color)) {
          availableColors.push(variant.color)
        }
      })
    }
  }

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const increaseQty = () => setQty(qty + 1)

  const handleSizeClick = (size) => {
    setSize(size)
    // push(
    //   {
    //     pathname: `/shop/${artist}/${slug.current}`,
    //     query: {
    //       size,
    //     },
    //   },
    //   undefined,
    //   { shallow: true },
    // )
  }

  const handleColorClick = (color) => {
    const product = variants.find((variant) => variant.color === color).product

    if (!product) return

    push({
      pathname: `/shop/${artist}/${product.slug.current}`,
    })
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty, size: String(selectedSize) }))
  }

  useEffect(() => {
    setQty(1)
  }, [selectedSize, selectedColor])

  // useEffect(() => {
  //   if (!selectedSize || !selectedColor) {
  //     push(
  //       {
  //         pathname: `/shop/${artist}/[...slug]`,
  //         query: {
  //           ...query,
  //           ...(!selectedSize && { size: availableSizes[0] }),
  //         },
  //       },
  //       undefined,
  //       { shallow: true },
  //     )
  //   }
  // }, [product])

  return (
    <div className="mt-[42px] space-y-[28px]">
      {!isInStock ? (
        <div className="space-y-7">
          <div className="bg-gray transition-all font-medium w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]">
            Stoc epuizat
          </div>
        </div>
      ) : (
        <>
          {showVariants && (
            <>
              <PropertyOptions
                title="Size"
                options={availableSizes}
                selectedOption={selectedSize}
                onClick={handleSizeClick}
                isOnlyOption={availableSizes.length === 1}
              />

              {variants && (
                <PropertyOptions
                  title="Color"
                  options={availableColors}
                  selectedOption={selectedColor}
                  onClick={handleColorClick}
                  isOnlyOption={availableColors.length === 1}
                />
              )}
            </>
          )}

          {inStock ||
          (selectedSize === 's' && inStockS) ||
          (selectedSize === 'm' && inStockM) ||
          (selectedSize === 'l' && inStockL) ? (
            <>
              <div className="space-y-[15px] flex flex-col items-center lg:items-start">
                <span className="text-xl font-semibold uppercase">
                  Quantity
                </span>
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
                className="bg-black hover:bg-opacity-[85%] active:bg-alm-white transition-all font-medium w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]"
              >
                Adaugă în coș
              </button>
            </>
          ) : (
            <div className="bg-gray transition-all font-medium w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]">
              Stoc epuizat
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProductVariantsControls
