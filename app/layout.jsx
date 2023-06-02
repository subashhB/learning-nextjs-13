import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
    title: "PromptJunction",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
          <Nav/>
            { children }
        </main>
    </html>
  )
}

export default RootLayout