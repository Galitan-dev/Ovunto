<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import Button from '$lib/ui/Button.svelte';
</script>

<header>
    <a href="/">
        <img
            src="{logo}"
            alt="Ovunto Logo"
        />
    </a>
    <Button
        primary
        text="Sign-up"
        href="/auth/signup"
    />
    <Button
        text="Log-in"
        href="/auth/login"
    />
</header>

<style lang="less">
    @import '$lib/theme.less';

    header {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 20px;
        background-color: lighten(@background-color, 5%);
        font-size: 15px;
        justify-content: end;
        gap: 10px;

        :first-child {
            margin-right: auto;
        }
    }

    img {
        height: 30px;
    }
</style>
