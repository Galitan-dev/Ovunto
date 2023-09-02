<script
    lang="ts"
    context="module">
    const patterns = {
        none: {
            regexp: '',
            lowercase: false
        },
        email: {
            regexp: '[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}',
            lowercase: true
        }
    };

    export type PatternName = keyof typeof patterns;
</script>

<script lang="ts">
    import Icon from './Icon.svelte';

    export let password = false;
    export let placeholder: string;
    export let showValid = false;
    export let pattern: PatternName = 'none';

    let hidden = true;

    export let valid = false;
    export let value: string = '';

    $: valid =
        pattern === 'none' || !!(value && value.match(new RegExp(`^${patterns[pattern].regexp}$`)));

    function handleInput(event: { currentTarget: EventTarget & HTMLInputElement }) {
        value = event.currentTarget.value.toLowerCase();
    }
</script>

<div
    class:valid="{showValid && pattern !== 'none' && value && valid}"
    class:invalid="{pattern !== 'none' && value && !valid}">
    <input
        type="{password && hidden ? 'password' : 'text'}"
        class:password="{password && hidden && value}"
        placeholder="{placeholder}"
        on:input="{handleInput}"
        required
        pattern="{patterns[pattern].regexp}"
        style:text-transform="{patterns[pattern].lowercase ? 'lowercase' : 'unset'}" />
    {#if pattern !== 'none' && value && (showValid || !valid)}
        <Icon name="{valid ? 'check' : 'cross'}" />
    {/if}
    {#if password && value}
        <button
            class="show"
            on:mousedown="{() => (hidden = false)}"
            on:mouseup="{() => (hidden = true)}">
            <Icon name="{hidden ? 'eye' : 'eye-off'}" />
        </button>
    {/if}
</div>

<style lang="less">
    div {
        display: flex;
        padding: 8px 20px;
        justify-content: flex-end;
        align-items: center;
        gap: 5px;

        border-radius: 5px;
        border: 1px solid var(--text);

        font-size: 18px;
        --icon-size: 18px;
        --icon-color: var(--text-alt);

        input {
            height: var(--icon-size);

            width: 100%;
            margin-right: auto;

            border: none;
            background: none;
            outline: none;

            color: var(--text);

            transition: 0.3s color;

            &.password {
                letter-spacing: 2.5px;
            }
        }

        .show {
            height: var(--icon-size);

            background: none;
            border: none;
            outline: none;

            opacity: 80%;

            cursor: pointer;
            transition: 0.3s opacity;

            &:hover {
                opacity: 1;
            }
        }

        transition: 0.3s border-color;

        &.valid {
            border-color: var(--success);

            --icon-color: var(--success);

            input {
                color: var(--success);
            }
        }

        &.invalid {
            border-color: var(--error);

            --icon-color: var(--error);

            input {
                color: var(--error);
            }
        }
    }
</style>
