<script lang="ts">
    import { theme } from '$lib/stores/preferences';
    import Icon from './Icon.svelte';
</script>

<button on:click="{theme.toggle}">
    <Icon name="{$theme === 'day' ? 'sun' : 'moon'}" />
</button>

<style lang="less">
    button {
        background: none;
        cursor: pointer;
        border: none;
        outline: none;
    }
</style>
