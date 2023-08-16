import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function GoBack() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex h-10 w-10 items-center justify-center text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    >
      <ArrowLeft size={20} />
    </button>
  )
}
