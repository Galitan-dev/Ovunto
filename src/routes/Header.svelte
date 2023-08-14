<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import githubLogo from '$lib/images/github_logo.png';
    import { PUBLIC_REPOSITORY_URL } from '$env/static/public';
</script>

<header>
    <a
        class="logo"
        href="/"
    >
        <img
            src="{logo}"
            alt="Ovunto Logo"
        />
        <h1>Ovunto</h1>
    </a>
    <a
        href="{PUBLIC_REPOSITORY_URL}"
        target="_blank"
    >
        <img
            src="{githubLogo}"
            alt="GitHub Logo"
        />
    </a>
</header>

<style lang="less">
    @import '$lib/theme.less';

    header {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 20px;
        background-color: darken(@background-color, 10%);

        :last-child {
            margin-left: auto;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: start;
        width: min-content;
        gap: 10px;
        color: inherit;
        text-decoration: none;
    }

    img {
        height: 40px;
    }
</style>
