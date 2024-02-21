import Layout from '~/components/layout'

const ContactPage = () => {
  return (
    <Layout title="Contact" hideDesktopLinks>
      <section className="text-white bg-black pb-[100px] lg:pb-[150px]">
        <div className="container">
          <img
            src="/images/contact-mobile.png"
            alt="contact image"
            className="mb-[100px] md:hidden w-full"
          />

          <img
            src="/images/contact.png"
            alt="contact image"
            className="hidden mb-[100px] md:block w-full"
          />

          <div className="flex flex-col md:flex-row md:items-start md:justify-center md:space-x-20 xl:space-x-[156px]">
            <h1 className="text-[43px] md:text-[64px] uppercase font-medium leading-[1]">
              Contact
            </h1>

            <div>
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
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
