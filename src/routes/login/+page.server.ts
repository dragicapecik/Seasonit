import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();
	if (session) redirect(303, '/app');
};

export const actions: Actions = {
	signin: async ({ request, locals: { supabase } }) => {
		const form = await request.formData();
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) return fail(400, { message: error.message });

		redirect(303, '/app');
	},

	signup: async ({ request, locals: { supabase } }) => {
		const form = await request.formData();
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		const { error } = await supabase.auth.signUp({ email, password });
		if (error) return fail(400, { message: error.message });

		redirect(303, '/onboarding');
	},

	google: async ({ locals: { supabase }, url }) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${url.origin}/auth/callback` }
		});

		if (error) return fail(400, { message: error.message });
		if (data.url) redirect(303, data.url);
	}
};
