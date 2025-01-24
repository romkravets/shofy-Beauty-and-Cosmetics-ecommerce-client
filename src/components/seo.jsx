import Head from "next/head";


const SEO = ({pageTitle}) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Курси Самомакіяж`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Б'юті студія: макіяж, манікюр, курси самокосметики та краси. Вчіть професійно доглядати за собою та розкривати свою унікальність разом з нами!" />
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;