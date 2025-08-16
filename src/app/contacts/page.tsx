export default function ContactsPage() {
  return (
    <section className="p-6 max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center">📬 Контакти</h1>

      {/* Email / форма */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Напиши нам</h2>
        <form
          action="mailto:твій_email@example.com"
          method="post"
          encType="text/plain"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Твоє ім'я"
            className="border rounded p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Твій email"
            className="border rounded p-2"
            required
          />
          <textarea
            name="message"
            placeholder="Повідомлення"
            className="border rounded p-2"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Відправити
          </button>
        </form>
      </div>

      {/* Соцмережі */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Ми у соцмережах</h2>
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://instagram.com/твій_інстаграм"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/твій_facebook"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/твій_канал"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://open.spotify.com/artist/твій_artist_id"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </div>
      </div>

      {/* Мапа */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Де ми граємо / репетиції
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.000000!2d30.000000!3d50.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1234567890"
          width="100%"
          height="380"
          className="rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
