export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center gap-8">
      {/* Великий постер або фон */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/band-hero.jpg')",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg text-white">
          MY BAND
        </h1>
      </div>

      {/* Опис гурту */}
      <p className="max-w-2xl text-lg text-gray-300">
        Ми — гурт, який поєднує енергію живого виступу та емоції музики.
        Приєднуйся до нас у подорожі по звуках і містах!
      </p>

      {/* Кнопки */}
      <div className="flex gap-4">
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
        >
          🎵 Слухати на Spotify
        </a>
        <a
          href="/tour"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
        >
          📅 Дивитися тур
        </a>
      </div>
    </section>
  );
}
