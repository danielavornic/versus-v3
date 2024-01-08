import Link from 'next/link'

import Layout from '~/components/layout'

const BookingPage = () => {
  return (
    <Layout hasFooter={false} title="Booking">
      <section className="bg-black text-white pt-[42px] lg:pt-0 min-h-[calc(100vh-80px)]">
        <div className="container 3xl:pr-[50px] lg:pr-0 flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-[120px]">
          <div className="flex flex-col xl:h-[inherit] justify-center lg:justify-start space-y-[70px] lg:space-y-[70px] lg:pt-[64px]">
            <div className="space-y-[42px] lg:max-w-[400px] xl:pl-[50px] xl:max-w-[690px]">
              <p className="font-light leading-[1.1] overflow-hidden text-lg md:text-[28px] lg:text-[32px] 1.5xl:text-[42px]">
                Versus Artist se ocupă de booking atât pentru artiștii săi
                semnați, cât și outsource pentru clienți din sau din afara
                Republicii Moldova. Booking by Versus Arist presupune:
              </p>
              <ul className="font-okta list-inside list-disc text-sm !leading-tight">
                <li>
                  Crearea și adaptarea ofertelor pentru artiști (format cu band,
                  cu DJ, acoustic, la festivale, evnimente private sau publice)
                  care cuprind riderul tehnic și cel de ospitalitate +
                  stabilirea tuturor costurilor suportate de câtre beneficiar.
                </li>
                <li>
                  Crearea și adaptarea ofertelor pentru artiști (format cu band,
                  Gestionarea procesului legal și contabil: întocmirea
                  contractelor, încasări și plăți.
                </li>
                <li>
                  Asigurarea comunicării între client și echipa artistului,
                  elaborarea și aprobarea materialelor promoționale.{' '}
                </li>
                <li>
                  Asigurarea și gestionarea prezenței și prestației artistului
                  la eveniment, monitorizarea respectării condițiilor tehnice
                  stabilite și soluționarea eventualelor probleme.
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center space-y-10">
              <Link
                href="/booking/artists"
                className="text-[18px] uppercase py-[24px] px-[35px] font-medium align-self-start w-fit justify-center border !leading-[14px] border-white inline-block"
              >
                Get in touch
              </Link>
              <Link
                href="/#booking"
                className="underline uppercase font-medium text-lg block"
              >
                Close
              </Link>
            </div>
          </div>

          <div
            className='booking-img bg-cover bg-center h-[362px] lg:h-[calc(100vh-80px)] w-full lg:w-[480px] xl:h-[1000px] 1.5xl:w-[600px] 2xl:w-[700px] 3xl:w-[910px] bg-[url("/images/booking-section.png")]'
            style={{ backgroundImage: 'url("/images/booking-section.png")' }}
          ></div>
        </div>
      </section>
    </Layout>
  )
}

export default BookingPage
