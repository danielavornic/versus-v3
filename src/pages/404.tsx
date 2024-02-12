import Link from 'next/link'

import Layout from '~/components/layout'

const ErrorPage = () => {
  return (
    <Layout title="404 Error" hasOnlyMobileFooter>
      <section className="pt-[140px] pb-[220px] bg-black text-white lg:h-[calc(100vh-80px)] lg:p-0 lg:flex lg:items-center">
        <div className="container lg:w-[90%] lg:mx-auto flex flex-col 1.5xl:w-[1250px] 2xl:w-[1400px]">
          <p className="text-xl md:text-[48px] xl:text-[64px] 1.5xl:text-[80px] 2xl:text-[93px]">
            sorry,
          </p>
          <img
            src="/images/404.png"
            alt="404"
            className="-mt-3 md:-mt-1 relative z-10 max-w-[1050px] 2xl:max-w-[1290px] w-full 2xl:pr-[100px] 2xl:mt-0"
          />
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse lg:items-end lg:justify-between -mt-2 md:-mt-5 xl:-mt-8 2xl:-mt-10">
            <h1 className="text-right text-[20px] md:text-[48px] xl:text-[64px] 1.5xl:text-[80px] 2xl:text-[93px] leading-[1] ">
              <span className="font-medium">PAGE</span>
              <br />
              not
              <br />
              <span className="font-medium">FOUND</span>
            </h1>

            <Link
              href="/"
              className="w-[255px] h-[55px] bg-white hover:bg-alm-white focus:bg-white transition-all text-black text-sm flex justify-center uppercase font-medium mx-auto items-center lg:mx-0"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ErrorPage
