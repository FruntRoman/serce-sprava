// src/api/members.ts
import { STRAPI_URL } from "@/config/api";

export type Member = {
  id: number;
  name: string;
  role: string;
  photo: string | null;
};

export async function getMembers(): Promise<Member[]> {
  const res = await fetch(`${STRAPI_URL}/api/members?populate=photo`, {cache: 'no-store'});
  if (!res.ok) throw new Error(`Failed to fetch members: ${res.status}`);

  const json: {
    data: {
      id: number;
      name: string;
      role: string;
      photo: { url: string } | null;
    }[];
  } = await res.json();

  return json.data.map((member) => ({
    id: member.id,
    name: member.name,
    role: member.role,
    photo: member.photo ? member.photo.url : null,
  }));
}
