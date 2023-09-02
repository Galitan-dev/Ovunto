<script lang="ts">
    export let primary: boolean = false;
    export let justifyLeft: boolean = false;
    export let expand: boolean = false;
    export let disabled: boolean = false;
    export let href: string = '';
    export let submit: boolean = false;
</script>

{#if href}
    <a
        class="button"
        class:primary="{primary}"
        class:justify-left="{justifyLeft}"
        class:expand="{expand}"
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
        class:expand="{expand}"
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
        background: var(--text);

        color: var(--background);
        font-size: 18px;

        &.primary {
            background: var(--primary);

            color: var(--white);
        }

        &.disabled {
            background: var(--text-dimmed);

            color: var(--background);
        }

        &.justify-left {
            justify-content: flex-start;
        }

        &.expand {
            width: 100%;
        }

        transition: background 0.3s;

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
