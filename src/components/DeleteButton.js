'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteButton({ dogId, dogName }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${dogName || 'this dog'}?\n\nThis action cannot be undone.`)) {
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase
        .from('adoptions')
        .delete()
        .eq('id', dogId)

      if (error) throw error

      router.refresh()
    } catch (error) {
      alert('Error deleting dog: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm disabled:opacity-50 hover:opacity-90 transition-opacity"
      style={{
        backgroundColor: 'var(--accent-coral)',
        color: 'white',
      }}
      title="Delete dog"
    >
      <span className="hidden sm:inline">{loading ? 'Deleting...' : '🗑️ Delete'}</span>
      <span className="sm:hidden">{loading ? '...' : '🗑️'}</span>
    </button>
  )
}