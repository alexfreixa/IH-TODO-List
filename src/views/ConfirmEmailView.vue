<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
	<main>
		<h1 class="text-xl m-auto font-black text-center pb-6">Confirm your email!</h1>
		<div class="bg-white text-black p-4 rounded-md max-w-sm text-center m-auto">
			<div
				class="flex [&>*>*>input]:bg-lightgray [&>*>*>input]:w-full [&>*>*>input]:p-2 [&>*>*>input]:rounded-md  [&>div]:pb-4 flex-wrap">
				<div class="w-full">
                    <div class="w-full flex justify-center pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2a206a" height="50px" width="50px" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z"/>
                                </g>
                                <g>
                                    <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
					<p class="text-sm m-auto text-center pb-4">Please check your inbox and confirm your email to complete your registration.</p>
                    <RouterLink :to="{ name: 'signin'}"><u>Log in now</u></RouterLink>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>