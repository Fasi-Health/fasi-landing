import { Hero } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Healthcare with Convenience"
        content="We offer a platform that gives you a choice of different healthcare services on the palm of your hand with an efficient yet simple experience."
      />
    </Layout>
  )
}
