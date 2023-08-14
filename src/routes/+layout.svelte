<script lang="ts">
    import '../app.less';
    import Header from './Header.svelte';
</script>

<svelte:head>
    <title>Ovunto: Your Privacy, Your Egg!</title>
</svelte:head>

<Header />
<main>
    <slot />
</main>
