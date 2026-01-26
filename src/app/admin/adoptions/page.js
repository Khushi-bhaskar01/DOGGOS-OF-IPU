import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton'

export default async function AdoptionsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Fetch all dogs
  const { data: dogs, error } = await supabase
    .from('adoptions')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--base-white)' }}>
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b" style={{ borderColor: 'var(--border-light)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/admin" className="text-xl sm:text-2xl">🐶</Link>
              <div>
                <h1 className="text-base sm:text-xl font-bold" style={{ color: 'var(--text-dark)' }}>
                  Manage Dogs
                </h1>
              </div>
            </div>
            <Link href="/admin">
              <button 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium"
                style={{ 
                  backgroundColor: 'var(--primary-teal)',
                  color: 'white'
                }}
              >
                <span className="hidden sm:inline">← Back to Dashboard</span>
                <span className="sm:hidden">← Back</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-dark)' }}>
            All Dogs ({dogs?.length || 0})
          </h2>
          <Link href="/admin/adoptions/add" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{ 
                backgroundColor: 'var(--secondary-green)',
                color: 'white'
              }}
            >
              <span>➕</span>
              Add New Dog
            </button>
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
            Error loading dogs: {error.message}
          </div>
        )}

        {/* Dogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {dogs && dogs.length > 0 ? (
            dogs.map((dog) => (
              <div 
                key={dog.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
                style={{ borderColor: 'var(--border-light)' }}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 bg-gray-100">
                  {dog.photos && dog.photos.length > 0 ? (
                    <img
                      src={dog.photos[0]}
                      alt={dog.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl">
                      🐕
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div 
                    className="absolute top-2 right-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-sm"
                    style={{
                      backgroundColor: dog.status === 'available' 
                        ? 'var(--secondary-green)' 
                        : 'var(--accent-coral)',
                      color: 'white'
                    }}
                  >
                    {dog.status}
                  </div>

                  {/* Photo Count Badge */}
                  {dog.photos && dog.photos.length > 1 && (
                    <div 
                      className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium shadow-sm flex items-center gap-1"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white'
                      }}
                    >
                      <span>📸</span>
                      <span>{dog.photos.length}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 truncate" style={{ color: 'var(--text-dark)' }}>
                    {dog.name || 'Unnamed'}
                  </h3>
                  
                  <div className="space-y-1 mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--text-gray)' }}>
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Age:</span> {dog.age || 'Unknown'}
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Gender:</span> {dog.gender || 'Unknown'}
                    </p>
                    <p className="flex items-center gap-1 truncate">
                      <span className="font-medium">Location:</span> {dog.location || 'Not specified'}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                      {dog.vaccinated && (
                        <span 
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                          style={{ backgroundColor: 'var(--earthy-cream)', color: 'var(--text-dark)' }}
                        >
                          💉 Vaccinated
                        </span>
                      )}
                      {dog.sterilized && (
                        <span 
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                          style={{ backgroundColor: 'var(--primary-sky)', color: 'var(--text-dark)' }}
                        >
                          ✂️ Sterilized
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/admin/adoptions/edit/${dog.id}`} className="flex-1">
                      <button 
                        className="w-full px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity"
                        style={{ 
                          backgroundColor: 'var(--primary-teal)',
                          color: 'white'
                        }}
                      >
                        <span className="hidden sm:inline">✏️ Edit</span>
                        <span className="sm:hidden">✏️</span>
                      </button>
                    </Link>
                    <DeleteButton dogId={dog.id} dogName={dog.name} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🐕</div>
              <p className="text-lg sm:text-xl mb-2 font-semibold" style={{ color: 'var(--text-dark)' }}>
                No dogs yet
              </p>
              <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--text-gray)' }}>
                Add your first dog to get started
              </p>
              <Link href="/admin/adoptions/add">
                <button 
                  className="px-6 py-2.5 rounded-lg font-medium inline-flex items-center gap-2 text-sm sm:text-base"
                  style={{ 
                    backgroundColor: 'var(--secondary-green)',
                    color: 'white'
                  }}
                >
                  <span>➕</span>
                  Add Your First Dog
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}