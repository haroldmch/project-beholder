import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Project Beholder</title>
        <meta name="description" content="A D&D App" />
      </Head>

      <main>
        <header>
          <h1>Project Beholder</h1>
        </header>
        <Component {...pageProps} />
      </main>

      <footer className="footer">
        <hr />
        haroldmch { new Date().getFullYear() }
      </footer>
    </>
  )
}

export default App
