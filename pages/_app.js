import '../styles/globals.css'

//components
import Layout from '@components/Layout'
import Transition from '@components/Transition'

//router
import { useRouter } from 'next/router'

//framer motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const Router = useRouter()
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={Router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
