type Props = {
  title: string
  description: string
  image: string
  source: string
  url: string
}

export default function ContentCard({ title, description, image, source, url }: Props) {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-800 shadow p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-3">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs text-gray-400">{source}</span>
        <a href={url} target="_blank" className="text-blue-500 hover:underline text-sm">
          Read More →
        </a>
      </div>
    </div>
  )
}
