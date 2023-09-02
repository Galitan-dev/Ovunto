<script lang="ts">
    import logo from '$lib/images/logo';
    import Button from '$lib/ui/Button.svelte';
    import ThemeSwapper from './ThemeSwapper.svelte';
</script>

<header>
    <a
        class="logo"
        href="/">
        <img
            src="{$logo}"
            alt="Ovunto Logo" />
        <h1>Ovunto</h1>
    </a>
    <ThemeSwapper />
    <Button
        primary
        href="/auth">
        Sign-In
    </Button>
</header>

<style lang="less">
    header {
        display: flex;
        width: 100%;
        padding: 10px 20px;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        background: var(--background-alt);

        .logo {
            display: flex;
            margin-right: auto;
            align-items: center;
            gap: 10px;

            img {
                height: 40px;
            }
        }
    }
</style>
