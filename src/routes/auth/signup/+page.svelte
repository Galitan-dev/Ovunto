<script>
    import Button from '$lib/ui/Button.svelte';
    import Github from '$lib/images/icons/github.png';
    import Email from '$lib/images/icons/email.png';
    import Google from '$lib/images/icons/google.png';
    import Apple from '$lib/images/icons/apple.png';
</script>

<h1>Let's Get Started!</h1>

<Button
    icon={Apple}
    text="Sign-up with Apple"
    href="#"
/>
<Button
    icon={Google}
    text="Sign-up with Google"
    href="#"
/>
<Button
    icon={Github}
    text="Sign-up with GitHub"
    href="#"
/>

<div class="or">
    <div></div>
    <span>Or</span>
    <div></div>
</div>

<form>
    <input name="email" placeholder="email@adress.com" />

    <Button
        icon={Email}
        primary
        text="Use Magic Link"
        href="#"
    />
</form>

<p>Already in ? <a href="/auth/login">Connect to my account</a></p>

<style lang="less">
    @import '/src/lib/theme.less';

    input, :global(a, button) {        
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
</style>
