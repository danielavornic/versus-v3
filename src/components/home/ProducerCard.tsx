interface ProducerCardProps {
  name: string
  image: string
}

const ProducerCard = ({ name, image }: ProducerCardProps) => {
  return (
    <div
      className="lag-img  w-full h-[376px] md:h-[400px] md:w-[320px] xl:w-[420px] xl:h-[500px] 1.5xl:w-[454px] 1.5xl:h-[520px] 2xl:w-[550px] 2xl:h-[631px] bg-cover bg-center bg-no-repeat flex text-alm-white flex-col justify-end items-center text-center py-[18px] px-[14px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h3 className="text-[56px] xl:text-[76px] 2xl:text-[93px] uppercase font-medium leading-[1]">
          {name}
        </h3>
        <p className="pt-5 pb-7 xl:text-xl">Production & MASTERING</p>
        <a
          href="mailto:contact@versusartist.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs xl:text-base"
        >
          contact@versusartist.com
        </a>
      </div>
    </div>
  )
}

export default ProducerCard
