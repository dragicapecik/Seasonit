import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();
	if (session) redirect(303, '/app');
};

export const actions: Actions = {
	google: async ({ locals: { supabase }, url }) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${url.origin}/auth/callback` }
		});

		if (error) return fail(400, { message: error.message, mode: 'login' });
		if (data.url) redirect(303, data.url);
	}
};
