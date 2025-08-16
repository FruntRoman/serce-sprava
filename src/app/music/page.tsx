export default function MusicPage() {
  return (
    <section className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center">🎶 Музика нашого гурту</h1>

      {/* Spotify */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Слухай нас на Spotify
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq?utm_source=generator"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-lg max-w-2xl"
          ></iframe>
        </div>
      </div>

      {/* YouTube */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Дивись нас на YouTube
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Перше відео */}
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/eVTXPUF4Oz4?si=qyWV2VX-Mz4mQXba"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Друге відео */}
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/eVTXPUF4Oz4?si=qyWV2VX-Mz4mQXba"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
