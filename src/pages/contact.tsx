import Layout from '~/components/layout'

const ContactPage = () => {
  return (
    <Layout title="Contact" hideDesktopLinks>
      <section className="text-white bg-black pb-[100px] lg:py-[150px]">
        <div className="lg:hidden">
          <div
            className="bg-cover bg-center h-[460px]"
            style={{ backgroundImage: 'url(/images/contact.png)' }}
          />
        </div>
        <div className="container flex flex-col lg:flex-row lg:items-start lg:space-x-7 2xl:space-x-20 2xl:ml-[200px]">
          <div
            className="hidden lg:flex bg-cover bg-center h-[400px] w-[560px] lg:justify-center lg:items-start xl:h-[460px] xl:w-[600px] 1.5xl:w-[690px]"
            style={{ backgroundImage: 'url(/images/contact.png)' }}
          >
            <h1 className="text-[64px] uppercase font-medium leading-[1] lg:mt-[100px] xl:mt-[124px]">
              Contact
            </h1>
          </div>

          <div className="pt-[65px] lg:pt-[100px] xl:pt-[124px]">
            <h1 className="text-[43px] revealing-line uppercase font-medium lg:hidden text-white mb-[80px]">
              Contact
            </h1>

            <a
              href="https://goo.gl/maps/zCDMQyckbuEhCE2M7"
              target="_blank"
              rel="noopener noreferrer"
              className="revealing-line hover:text-alm-white revealing-line font-medium block md:text-[18px] lg:text-[20px] xl:text-[24px] mb-[56px] xl:mb-[60px]"
            >
              Hîncești Highway 61, Chișinău
            </a>
            <a
              href="tel:+373022544344"
              className="revealing-line hover:text-alm-white revealing-line font-medium block md:text-[18px] lg:text-[20px] xl:text-[24px] mb-[56px] xl:mb-[60px]"
            >
              022 544 344
            </a>
            <a
              href="mailto:contact@versusartist.com"
              className="revealing-line hover:text-alm-white revealing-line font-medium block md:text-[18px] lg:text-[20px] xl:text-[24px]"
            >
              contact@versusartist.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
