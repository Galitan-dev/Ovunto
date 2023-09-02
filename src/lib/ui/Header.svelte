<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/logo';
    import Button from '$lib/ui/Button.svelte';
    import ThemeSwapper from './ThemeSwapper.svelte';
    import { flip } from 'svelte/animate';
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
    {#each { length: 3 } as _, i (i)}
        <div animate:flip="{{ duration: 500 }}">
            {#if i === 0}
                <ThemeSwapper />
            {:else if i === 1}
                <Button
                    primary
                    href="/auth">
                    Sign-In
                </Button>
            {:else if $page.route.id !== '/auth'}
                <div
                    class="a"
                    style:width="165px">
                </div>
            {/if}
        </div>
    {/each}
</header>

<style lang="less">
    header {
        display: flex;
        width: calc(100% + 185px);
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
