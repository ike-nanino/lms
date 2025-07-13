import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1>Dashboard</h1>

      <section className='home-section'>
        <CompanionCard 
          id="1"
          name="Companion 1"
          topic="Math"
          subject="Algebra"
          duration={45}
          color='#8706d4'
        />
        <CompanionCard 
          id="2"
          name="Companion 2"
          topic="Science"
          subject="Physics"
          duration={45}
          color='#de3841'
        />
        <CompanionCard 
          id="3"
          name="Companion 3"
          topic="History"
          subject="World History"
          duration={45}
          color='#54bb74'
        />


      </section>

      <section className='home-section'>
        <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>


    </main>
  )
}

export default Page