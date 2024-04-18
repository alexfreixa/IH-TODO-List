<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router';

const router = useRouter()
const userStore = useUserStore()

const user = ref('')
const password = ref('')
const registerError = userStore.getErrorLogin;


const errorSignUp = async () => {

	try {
		await userStore.signUp(user.value, password.value);
	} catch (err) {
		console.error(err);
		registerError.value = err
	}

}

</script>

<template>
	<main>
		<h1 class="text-xl m-auto font-black text-center pb-4">Register now!</h1>
		<p class="text-sm m-auto text-center pb-4">To-do lists are really useful, make your life easier!</p>
		<div class="bg-white text-black p-4 rounded-md max-w-sm text-center m-auto">

			<div
				class="flex [&>*>*>input]:bg-lightgray [&>*>*>input]:w-full [&>*>*>input]:p-2 [&>*>*>input]:rounded-md  [&>div]:pb-4 flex-wrap">
				<div class="w-full">
					<label>
						<input placeholder="Your new user" type="text" v-model="user" />
					</label>
				</div>
				<div class="w-full">
					<label>
						<input placeholder="Your secret password" type="password" v-model="password" />
					</label>
				</div>
			</div>

			<button class="bg-blue px-6 py-3 text-white" @click="signUp">Sign up</button>
			<p class="pt-4"><b>You're registered?</b> <RouterLink :to="{ name: 'signin'}">Log in now!</RouterLink></p>
			<p v-if="errorSignUp()" class="text-red pt-4">{{ errorSignUp() }}</p>
		</div>
	</main>
</template>

<style scoped></style>