import { env } from '$env/dynamic/private';
import { redirect, type Handle } from '@sveltejs/kit';
// import * as auth from '$lib/server/auth.ts';

const handleAuth: Handle = async ({ event, resolve }) => {
	// Get the root directory name
	const rootDirName = event.route.id?.split('/')[1] || '';
	const protectedDirName = '(authed)';

	if (rootDirName === protectedDirName) {
		const localSecretVar = env?.SECRETVAR;
		const cfSecretVar = event?.platform?.env.SECRETVAR;
		console.log({localSecretVar, cfSecretVar});
		return redirect(301, '/login');
	}



	// Get the root directory name
	// const rootDirName = event.route.id?.split('/')[1] || '';
	// const protectedDirName = '(authed)';

	// const sessionToken = event.cookies.get(auth.sessionCookieName);
	// if (!sessionToken) {
	// 	event.locals.user = null;
	// 	event.locals.session = null;
	// 	if (rootDirName === protectedDirName) {
	// 		return redirect(301, '/login');
	// 	}
	// 	return resolve(event);
	// }

	// const { session, user } = await auth.validateSessionToken(sessionToken);
	// if (session) {
	// 	auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	// } else {
	// 	auth.deleteSessionTokenCookie(event);
	// }

	// event.locals.user = user;
	// event.locals.session = session;

	return resolve(event);
};

export const handle: Handle = handleAuth;
