export default function TourPage() {
  // Тут можна буде замінити на дані з CMS або API
  const tourDates = [
    {
      date: "2025-09-05",
      city: "Київ",
      venue: "Stereo Plaza",
      link: "https://example.com/kyiv",
    },
    {
      date: "2025-09-12",
      city: "Львів",
      venue: "Malevich",
      link: "https://example.com/lviv",
    },
    {
      date: "2025-10-01",
      city: "Одеса",
      venue: "Зелений театр",
      link: "https://example.com/odesa",
    },
  ];

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">📅 Тур</h1>

      <div className="space-y-6">
        {tourDates.map((show, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-800 rounded-lg p-4 shadow-lg"
          >
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">{show.city}</p>
              <p className="text-sm text-gray-400">{show.venue}</p>
              <p className="text-sm">{show.date}</p>
            </div>
            <a
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 md:mt-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
            >
              Купити квиток
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
