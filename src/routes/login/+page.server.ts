import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const localSecretVar = env?.SECRETVAR;
  const cfSecretVar = event.platform?.env.SECRETVAR;
  return {route: event.route.id, localSecretVar, cfSecretVar};
};
