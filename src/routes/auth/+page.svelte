<script lang="ts">
    import illustration from '$lib/images/secure.png';
    import Button from '$lib/ui/Button.svelte';
    import Github from '$lib/images/icons/github.png';
    import Email from '$lib/images/icons/email.png';
    import Google from '$lib/images/icons/google.png';
    import Twitter from '$lib/images/icons/twitter.png';

    import { signIn } from '@auth/sveltekit/client';

    let email: string;
</script>

<main>
    <div class="left">
        <img
            src="{illustration}"
            alt="Secure browsing"
        />
        <h1>Ovunto</h1>
    </div>
    <div class="right">
        <h1>Let's Get Started!</h1>

        <Button
            icon={Google}
            text="Sign-In with Google"
            on:click={() => signIn('google', { callbackUrl: `${window.location.origin}/app` })}
            width={250}
        />
        <Button
            icon={Twitter}
            text="Sign-In with Twitter"
            on:click={() => signIn('twitter', { callbackUrl: `${window.location.origin}/app` })}
            width={250}
        />
        <Button
            icon={Github}
            text="Sign-In with GitHub"
            on:click={() => signIn('github', { callbackUrl: `${window.location.origin}/app` })}
            width={250}
        />

        <div class="or">
            <div></div>
            <span>Or</span>
            <div></div>
        </div>

        <form on:submit={() => signIn('email', { email, callbackUrl: `${window.location.origin}/app` })}>
            <input type="email" bind:value={email} required placeholder="email@adress.com" />

            <Button
                icon={Email}
                primary
                text="Use Magic Link"
                submit
                width={250}
            />
        </form>
    </div>
</main>

<style lang="less">
    @import '/src/lib/theme.less';

    main {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 3fr 4fr;
        grid-template-rows: 100%;
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: @text-color;
        color: @background-color;

        h1 {
            font-size: 50px;
        }

        img {
            width: 70%;
        }
    }

    .right {
        display: flex;
        width: 400px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto auto;
        background-color: lighten(@background-color, 10%);
        padding: 40px;
        border-radius: 20px;
        gap: 10px;

        input {
            width: 250px;
        }

        input {
            border-radius: 20px;
            height: 40px;
            padding: 0 20px;
            border: 2px solid @text-color;

            &:focus {
                outline-color: @primary-color;
            }
        }

        h1 {
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }

        .or {
            display: flex;
            width: 110%;
            justify-content: center;
            align-items: center;
            gap: 5px;
            opacity: .5;
            margin: 10px 0;

            div {
                display: block;
                width: 100%;
                height: 2px;
                background-color: @text-color;
                border-radius: 2px;
            }
        }

        form {
            margin-bottom: 20px;
        }
    }

    @media (max-width: 760px) {
        .left {
            display: none;
        }

        main {
            grid-template-columns: 1fr;
        }
    }
</style>
