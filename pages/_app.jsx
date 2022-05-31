import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  // const appId = process.env.NEXT_PUBLIC__APPLICATION_ID
  // const serverUrl = process.env.NEXT_PUBLIC__SERVER_URL
  return (
    <MoralisProvider
      appId="NrK6AqGGPmiVXxKebm5Xb9v7Pcxdp7JOpP5Rwc4a"
      serverUrl="https://meuai60qrq3b.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
