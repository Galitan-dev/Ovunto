<script lang="ts">
    import Button from '$lib/ui/Button.svelte';
    import Icon from '$lib/ui/Icon.svelte';
    import TextInput from '$lib/ui/TextInput.svelte';
    import VerticalSplit from '$lib/ui/VerticalSplit.svelte';
    import { signIn } from '@auth/sveltekit/client';

    const providers = ['google', 'twitter', 'github'] as const;

    let email: string;
    let isEmailValid: boolean;
</script>

<main>
    <h1>Let's Get Started!</h1>
    <div class="tier">
        {#each providers as provider}
            <Button
                on:click="{() =>
                    signIn(provider, { callbackUrl: `${window.location.origin}/app` })}"
                justifyLeft
                ><Icon name="{provider}" /> Sign-In with {provider[0].toUpperCase() +
                    provider.substring(1)}</Button>
        {/each}
    </div>
    <VerticalSplit>Or</VerticalSplit>
    <form class="magic">
        <TextInput bind:value={email} bind:valid={isEmailValid} placeholder="email@adress.com" pattern='email' />
        <Button
            primary
            submit
            disabled={!isEmailValid}
            on:click={() => signIn('email', { email, callbackUrl: `${window.location.origin}/app` })}
            justifyLeft><Icon name="mail" /> Use Magic Link</Button>
    </form>
</main>

<style lang="less">
    main {
        display: inline-flex;
        margin: 80px 0;
        padding: 30px 50px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        border-radius: 50px;
        background: var(--background-alt);

        .tier,
        .magic {
            display: flex;
            width: 275px;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
        }
    }
</style>
