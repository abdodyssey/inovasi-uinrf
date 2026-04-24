import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_EMAIL } from '$env/static/private';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	submitFeedback: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		// Basic validation
		if (!name || !message) {
			return fail(400, {
				error: true,
				message: 'Nama dan pesan wajib diisi / Name and message are required.'
			});
		}

		try {
			const { error } = await resend.emails.send({
				from: 'Inovasi UINRF <onboarding@resend.dev>',
				to: [CONTACT_EMAIL],
				subject: `New Feedback from ${name}`,
				html: `
					<div style="font-family: sans-serif; padding: 20px; color: #333;">
						<h2 style="color: #0f172a;">New Feedback Received</h2>
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email || 'Not provided'}</p>
						<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
						<p><strong>Message:</strong></p>
						<div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
							${message.replace(/\n/g, '<br>')}
						</div>
					</div>
				`
			});

			if (error) {
				console.error('Resend Error:', error);
				return fail(500, {
					error: true,
					message: 'Gagal mengirim email. Silakan coba lagi nanti. / Failed to send email.'
				});
			}

			return { success: true };
		} catch (e) {
			console.error('Server Error:', e);
			return fail(500, {
				error: true,
				message: 'Terjadi kesalahan sistem. / System error occurred.'
			});
		}
	}
};
