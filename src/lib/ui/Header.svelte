<script lang="ts">
    import { page } from '$app/stores';
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
    {#if $page.data.session}
        <span>
            {#if $page.data.session.user?.image}
                <span
                    style="background-image: url('{$page.data.session.user.image}')"
                    class="avatar"
                />
            {/if}
            {$page.data.session.user?.name ?? "User"}
        </span>
        <Button
            primary
            text="Open Your Egg"
            href="/app"
        />
    {:else}
        <Button
            primary
            text="Sign-In"
            href="/auth"
        />
    {/if}
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
