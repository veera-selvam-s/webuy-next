import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>webuy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-red-500 p-2 text-3xl font-bold select-none cursor-pointer'>
        webuy
      </div>
    </div>
  )
}
