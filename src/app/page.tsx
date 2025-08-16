// import Image from "next/image";

// const shows = [
//   {
//     date: "2025-09-12",
//     city: "Київ",
//     venue: "Atlas",
//     tickets: "https://tix.example/kyiv",
//   },
//   {
//     date: "2025-09-20",
//     city: "Львів",
//     venue: "FESTrepublic",
//     tickets: "https://tix.example/lviv",
//   },
//   {
//     date: "2025-10-05",
//     city: "Одеса",
//     venue: "Зелений Театр",
//     tickets: "https://tix.example/odesa",
//   },
// ];

// export default function Home() {
//   return (
//     <main>
//       {/* HERO */}
//       <section className="relative min-h-[80vh] flex items-center justify-center">
//         <Image
//           src="/band-hero.jpg"
//           alt="Band hero"
//           fill
//           className="object-cover -z-10"
//           priority
//         />
//         <div className="text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//             Назва Гурту
//           </h1>
//           <p className="mt-4 text-lg md:text-2xl text-white/80">
//             Музика, що змінює настрій
//           </p>
//           <a
//             href="#music"
//             className="mt-8 inline-block rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition"
//           >
//             🎵 Слухати зараз
//           </a>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="mx-auto max-w-6xl px-4 py-20">
//         <h2 className="text-3xl font-bold mb-6">Про нас</h2>
//         <p className="text-white/80 leading-relaxed">
//           Тут коротка історія гурту: стиль, впливи, досягнення. Додай фото
//           учасників, прес-реліз, посилання на статті та рецензії.
//         </p>
//       </section>

//       {/* MUSIC */}
//       <section id="music" className="mx-auto max-w-6xl px-4 py-20">
//         <h2 className="text-3xl font-bold mb-6">Музика</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Spotify Embed */}
//           <div className="aspect-video rounded-xl overflow-hidden">
//             <iframe
//               data-testid="embed-iframe"
//               style={{ borderRadius: 12 }}
//               src="https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq?utm_source=generator"
//               width="100%"
//               height="352"
//               allowFullScreen
//               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//               loading="lazy"
//             ></iframe>
//           </div>
//           {/* YouTube Embed */}
//           <div className="aspect-video rounded-xl overflow-hidden">
//             <iframe
//               width="560"
//               height="315"
//               src="https://www.youtube.com/embed/eVTXPUF4Oz4?si=qyWV2VX-Mz4mQXba"
//               title="YouTube video player"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//         <div className="mt-6 flex flex-wrap gap-3">
//           <a
//             href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10"
//           >
//             Відкрити в Spotify
//           </a>
//           <a
//             href="https://music.youtube.com/channel/YOUR_CHANNEL_ID"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10"
//           >
//             Відкрити в YouTube Music
//           </a>
//         </div>
//       </section>

//       {/* SHOWS */}
//       <section id="shows" className="mx-auto max-w-6xl px-4 py-20">
//         <h2 className="text-3xl font-bold mb-6">Концерти</h2>
//         <div className="grid gap-4">
//           {shows.map((s) => (
//             <div
//               key={`${s.date}-${s.city}`}
//               className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl border border-white/10 p-4"
//             >
//               <div className="space-y-1">
//                 <p className="font-semibold">
//                   {new Date(s.date).toLocaleDateString("uk-UA")}
//                 </p>
//                 <p className="text-white/80">
//                   {s.city} — {s.venue}
//                 </p>
//               </div>
//               <a
//                 href={s.tickets}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-3 md:mt-0 inline-block rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90"
//               >
//                 Квитки
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
//         <h2 className="text-3xl font-bold mb-6">Контакти</h2>
//         <p className="text-white/80">
//           Букінг / преса:{" "}
//           <a className="underline" href="mailto:booking@yourband.com">
//             booking@yourband.com
//           </a>
//         </p>
//         <div className="mt-4 flex gap-4 text-sm">
//           <a
//             href="https://instagram.com/yourband"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-red-400"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://t.me/yourband"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-red-400"
//           >
//             Telegram
//           </a>
//           <a
//             href="https://youtube.com/@yourband"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-red-400"
//           >
//             YouTube
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center gap-8">
      {/* Великий постер або фон */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/band-hero.jpg')", // ⚠️ заміни на свій постер у public/images/
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
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
