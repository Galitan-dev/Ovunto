<script lang="ts">
    export let primary = false;
    export let justifyLeft = false;
    export let disabled = false;
    export let href: string = '';
    export let submit = false;
</script>

{#if href}
    <a
        class="button"
        class:primary="{primary}"
        class:justify-left="{justifyLeft}"
        class:disabled="{disabled}"
        href="{href}">
        <slot />
    </a>
{:else}
    <button
        class="button"
        class:primary="{primary}"
        class:disabled="{disabled}"
        class:justify-left="{justifyLeft}"
        disabled="{disabled}"
        on:click
        type="{submit ? 'submit' : 'button'}">
        <slot />
    </button>
{/if}

<style lang="less">
    .button {
        display: flex;
        padding: 8px 40px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        border-radius: 5px;
        border: none;
        background: var(--text);

        color: var(--background);
        --icon-color: var(--background);
        font-size: 18px;
        --icon-size: 18px;

        &.primary {
            background: var(--primary);

            color: var(--white);
            --icon-color: var(--white);
        }

        &.disabled {
            background: var(--text-dimmed);

            color: var(--background);
            --icon-color: var(--background);

            cursor: not-allowed;
        }

        &.justify-left {
            justify-content: flex-start;
            padding: 8px 20px;
        }

        transition: background 0.3s;
        cursor: pointer;

        &:hover {
            background: var(--text-alt);

            &.primary {
                background: var(--primary-alt);
            }

            &.disabled {
                background: var(--text-dimmed);
            }
        }
    }
</style>
