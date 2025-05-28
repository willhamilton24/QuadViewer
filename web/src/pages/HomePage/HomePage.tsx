import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  const streamIds = ['LuKwFajn37U', 'Ap-UM1O9RBU', 'YDvsBbKfLPA', 'f0lYkdA-Gtw']

  return (
    <>
      <Metadata
        title="NEWS"
        description="Home page with YouTube stream viewers"
      />

      <div className="youtube-grid">
        {streamIds.map((id, index) => (
          <iframe
            key={index}
            src={`https://www.youtube.com/embed/${id}`}
            title={`YouTube Stream ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </>
  )
}

export default HomePage
