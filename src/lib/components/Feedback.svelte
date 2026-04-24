<script lang="ts">
	import { MessageSquare, Send, CheckCircle2 } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let isSubmitted = $state(false);
	let isLoading = $state(false);
	let errorMessage = $state('');

	// Use Svelte 5 runes for state if preferred (based on package.json showing Svelte 5)
</script>

<section id="feedback" class="section-padding relative overflow-hidden bg-slate-50">
	<!-- Decorative background elements -->
	<div
		class="bg-logo-gradient absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
	></div>
	<div
		class="bg-logo-gradient absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full opacity-10 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl">
		<div class="mb-12 text-center">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-200/50 px-4 py-2 text-sm font-medium text-slate-600"
			>
				<MessageSquare size={16} />
				<span>Saran & Masukan <span class="italic opacity-50">/ Feedback</span></span>
			</div>
			<h2 class="mb-6 text-4xl md:text-5xl">
				Suara Anda <span class="text-logo-gradient">Berarti</span> <br class="hidden md:block" />
				<span class="font-display text-2xl opacity-30 md:text-3xl">Your Voice Matters</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600">
				Bantu kami berinovasi lebih baik. Sampaikan saran, kritik, atau masukan Anda. <br
					class="hidden md:block"
				/>
				<span class="text-sm italic opacity-80"
					>Help us innovate better. Share your feedback, criticism, or suggestions.</span
				>
			</p>
		</div>

		<div class="glass rounded-3xl border-slate-200 p-8 shadow-xl shadow-slate-200/50 md:p-12">
			{#if isSubmitted}
				<div class="animate-fade-up flex flex-col items-center justify-center py-12 text-center">
					<div
						class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600"
					>
						<CheckCircle2 size={40} />
					</div>
					<h3 class="mb-2 text-2xl font-bold">Terima Kasih! / Thank You!</h3>
					<p class="mb-8 text-slate-600">
						Saran dan masukan Anda telah kami terima. / Your feedback has been received.
					</p>
					<button
						onclick={() => (isSubmitted = false)}
						class="rounded-xl bg-slate-900 px-8 py-3 font-medium text-white transition-all hover:bg-slate-800"
					>
						Kirim Masukan Lain / Send Another
					</button>
				</div>
			{:else}
				{#if errorMessage}
					<div
						class="animate-fade-up mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600"
					>
						{errorMessage}
					</div>
				{/if}
				<form
					method="POST"
					action="?/submitFeedback"
					use:enhance={() => {
						isLoading = true;
						errorMessage = '';
						return async ({ result }) => {
							isLoading = false;
							if (result.type === 'success') {
								isSubmitted = true;
							} else if (result.type === 'failure') {
								errorMessage =
									(result.data?.message as string) || 'Terjadi kesalahan. / Something went wrong.';
							} else if (result.type === 'error') {
								errorMessage = 'Terjadi kesalahan sistem. / System error occurred.';
							}
						};
					}}
					class="space-y-6"
				>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div class="space-y-2">
							<label for="name" class="block text-sm font-medium text-slate-700">
								Nama Lengkap <span class="font-normal text-slate-400 italic">/ Full Name</span>
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								placeholder="John Doe"
								class="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 transition-all outline-none focus:border-[#ef4444] focus:ring-2 focus:ring-[#ef4444]/20"
							/>
						</div>
						<div class="space-y-2">
							<label for="email" class="block text-sm font-medium text-slate-700">
								Email <span class="font-normal text-slate-400 italic">/ Optional</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="email@example.com"
								class="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 transition-all outline-none focus:border-[#ef4444] focus:ring-2 focus:ring-[#ef4444]/20"
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label for="message" class="block text-sm font-medium text-slate-700">
							Saran atau Masukan <span class="font-normal text-slate-400 italic"
								>/ Feedback & Suggestions</span
							>
						</label>
						<textarea
							name="message"
							id="message"
							required
							rows="5"
							placeholder="Tuliskan di sini... / Write here..."
							class="w-full resize-none rounded-xl border border-slate-200 bg-white/50 px-4 py-3 transition-all outline-none focus:border-[#ef4444] focus:ring-2 focus:ring-[#ef4444]/20"
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						class="bg-logo-gradient flex w-full items-center justify-center gap-2 rounded-xl px-10 py-4 font-bold text-white shadow-lg shadow-[#ef4444]/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
					>
						{#if isLoading}
							<div
								class="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
							></div>
							<span>Mengirim... / Sending...</span>
						{:else}
							<Send size={18} />
							<span>Kirim Masukan / Submit Feedback</span>
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
