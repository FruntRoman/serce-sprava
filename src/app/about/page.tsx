import { getMembers, Member } from "@/api/members";
import Image from "next/image";

const getImageUrl = (url: string) => {
  if (url.startsWith("http")) return url; // Cloudinary або абсолютний
  return `https://serce-sprava-strapi.onrender.com${url}`; // для відносних
};

export default async function AboutPage() {
  const members = await getMembers();

  return (
    <section className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6">🎸 Про нас</h1>

      {/* Фото / банер */}
      <div className="flex justify-center">
        <Image
          src="/banner.jpeg"
          alt="Банер гурту"
          width={700}
          height={400}
          className="rounded-lg shadow-lg max-w-4xl object-cover"
        />
      </div>

      {/* Історія гурту */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Наша історія</h2>
        <p>
          Ми — молодий гурт, який грає рок/поп/інший стиль. Засновані у 20XX
          році, ми виступали на місцевих фестивалях та поступово завойовуємо
          свою аудиторію. Наш головний меседж — приносити людям радість та
          енергію через музику.
        </p>
      </div>

      {/* Учасники */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Наші учасники</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member: Member) => (
            <div
              key={member.id}
              className="bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <div className="h-32 w-32 mx-auto mb-2">
                {member.photo ? (
                  <Image
                    src={getImageUrl(member.photo)}
                    alt={member.name}
                    width={128}
                    height={128}
                    unoptimized // 🔑 вимкнули оптимізацію для перевірки кешу
                    className="h-32 w-32 object-cover rounded-full"
                  />
                ) : (
                  <div className="h-32 w-32 bg-gray-200 rounded-full" />
                )}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Цитата / слоган */}
      <div className="text-center mt-8">
        <p className="text-xl italic text-gray-700">
          &quot;Музика — це мова, яку розуміє кожне серце.&quot;
        </p>
      </div>
    </section>
  );
}
