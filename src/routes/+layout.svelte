<script lang="ts">
    import { theme } from '$lib/stores/preferences';
    import Header from '$lib/ui/Header.svelte';
    import '../app.less';

    export let data;

    $theme = data.theme as 'day' | 'night';
</script>

<svelte:head>
    <title>Ovunto: Your Privacy, Your Egg!</title>
</svelte:head>

<svelte:body />

<Header />

<slot />
