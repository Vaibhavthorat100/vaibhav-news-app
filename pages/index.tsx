import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ContentCard from '@/components/ContentCard'

export default function Home() {
  const dummyData = [
    {
      title: 'OpenAI Launches GPT-5',
      description: 'OpenAI has just released GPT-5 with improved reasoning.',
      image: 'https://source.unsplash.com/random/400x200?ai',
      source: 'TechCrunch',
      url: '#',
    },
    {
      title: 'NASA Confirms New Moon Mission',
      description: 'NASA is planning a new Artemis mission in 2026.',
      image: 'https://source.unsplash.com/random/400x200?space',
      source: 'NASA',
      url: '#',
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {dummyData.map((item, idx) => (
            <ContentCard key={idx} {...item} />
          ))}
        </div>
      </main>
    </div>
  )
}
