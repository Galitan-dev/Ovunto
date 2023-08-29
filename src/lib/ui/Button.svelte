<script lang="ts">
    export let primary: boolean = false;
    export let text: string;
    export let icon: string = "";
    export let href: string = "";
    export let submit: boolean = false;
    export let width: number | undefined = undefined;
</script>

{#if href}
    <a
        class="button"
        class:primary="{primary}"
        href="{href}"
        style={width ? `width: ${width}px;` : ''}
    >
        {#if icon}
            <img src={icon} alt={text}>
        {/if}
        {text}
    </a>
{:else}
    <button
        class="button"
        class:primary="{primary}"
        on:click
        type={submit ? 'submit' : 'button'}
        style={width ? `width: ${width}px;` : ''}
    >
        {#if icon}
            <img src={icon} alt={text}>
        {/if}
        {text}
    </button>
{/if}

<style lang="less">
    @import '../theme.less';

    .button {
        text-decoration: none;
        padding: 0 20px;
        height: 40px;
        background-color: @text-color;
        color: @background-color;
        border-radius: 20px;
        transition: 0.4s;
        transition-property: background-color, color;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        border: none;
        font-size: 15px;

        img {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background-color: lighten(@text-color, 10%);
        }

        &.primary {
            background-color: @primary-color;
        }

        &.primary:hover {
            background-color: lighten(@primary-color, 10%);
        }
    }
</style>
