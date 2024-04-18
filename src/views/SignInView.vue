<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router';

const router = useRouter()
const userStore = useUserStore()

const user = ref('')
const password = ref('')
const errorLogin = userStore.getErrorLogin;

const signIn = async () => {
	try {
		await userStore.signIn(user.value, password.value);
		router.push({
        name: 'home',
      });
	} catch (err) {
		console.error(err);
		errorLogin.value = err
	}
}

</script>

<template>
	<main>
		<h1 class="text-xl m-auto font-black text-center pb-6">Sign in!</h1>
		<div class="bg-white text-black p-4 rounded-md max-w-sm text-center m-auto">

			<div
				class="flex [&>*>*>input]:bg-lightgray [&>*>*>input]:w-full [&>*>*>input]:p-2 [&>*>*>input]:rounded-md  [&>div]:pb-4 flex-wrap">
				<div class="w-full">
					<label>
						<input placeholder="User" type="text" v-model="user" />
					</label>
				</div>
				<div class="w-full">
					<label>
						<input placeholder="Password" type="password" v-model="password" />
					</label>
				</div>
			</div>

			<button class="bg-blue px-6 py-3 text-white" @click="signIn">Sign In</button>
			<p class="pt-4"><b>You're not registered?</b> <RouterLink :to="{ name: 'signup'}">Sign up!</RouterLink></p>
			<p v-if="errorLogin()" class="text-red pt-4">{{ errorLogin() }}</p>
		</div>
	</main>
</template>

<style scoped></style>