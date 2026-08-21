<template>
	<form action="https://submit-form.com/bKrcsIPYA"
		class="text-left relative min-w-[250px] max-w-[27rem] space-y-4 z-10 flex-1">
		<div class="flex flex-col lg:flex-row justify-between gap-4">
			<div class="flex flex-col items-start">
				<label for="firstName" class="mb-1 ml-3 text-gray-4">First Name</label>
				<input type="text" id="firstName" name="First name" placeholder="First Name" required
					class="w-full rounded-[10px] border border-gray-2 bg-gray-1/20 p-2 text-gray-5 placeholder:text-gray-4/70 outline-none transition-colors duration-200 hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30" />
			</div>

			<div class="flex flex-col items-start">
				<label for="lastName" class="mb-1 ml-3 text-gray-4">Last Name</label>
				<input type="text" id="lastName" name="Last name" placeholder="Last Name" required
					class="w-full rounded-[10px] border border-gray-2 bg-gray-1/20 p-2 text-gray-5 placeholder:text-gray-4/70 outline-none transition-colors duration-200 hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30" />
			</div>
		</div>

		<div class="flex flex-col items-start">
			<label for="email" class="mb-1 ml-3 text-gray-4">Email</label>
			<input type="text" id="email" name="Email" placeholder="Email" required
				class="w-full rounded-[10px] border border-gray-2 bg-gray-1/20 p-2 text-gray-5 placeholder:text-gray-4/70 outline-none transition-colors duration-200 hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30" />
		</div>

		<div class="flex flex-col items-start">
			<label for="message" class="mb-1 ml-3 text-gray-4">Message</label>
			<textarea id="message" name="Message" placeholder="Message"
				class="h-32 w-full resize-none rounded-[10px] border border-gray-2 bg-gray-1/20 p-2 text-gray-5 placeholder:text-gray-4/70 outline-none transition-colors duration-200 hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"></textarea>
		</div>

		<Button type="submit"
			class="btn relative flex items-center justify-center p-2 rounded-[12px] bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg shadow-purple-500/50 cursor-pointer w-full transition duration-300 ease-out hover:scale-[1.01] hover:from-purple-400 hover:to-purple-600 hover:shadow-purple-400/80 active:scale-[0.99]">
			<span class="text text-white mr-2">Send Message</span>
		</Button>
	</form>
</template>