import { STRAPI_URL } from "@/config/api";


export async function getMembers() {
  const res = await fetch(`${STRAPI_URL}/api/members?populate=photo`);
  if (!res.ok) throw new Error(`Failed to fetch members: ${res.status}`);

  const json = await res.json();

  return json.data.map((member: any) => ({
    id: member.id,
    name: member.name,
    role: member.role,
    photo: member.photo
      ? STRAPI_URL + member.photo.url
      : null,
  }));
}
