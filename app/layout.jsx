import '@styles/globals.css';

const metadata = {
    title: "ProptHub",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
            { children }
        </main>
    </html>
  )
}

export default RootLayout