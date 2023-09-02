<script lang="ts">
    import illustration from '$lib/images/illustration.png';
    import Button from '$lib/ui/Button.svelte';
</script>

<main>
    <img
        src="{illustration}"
        alt="A person securely browsing the internet on desktop" />
    <div>
        <h1>Your Privacy,<br />Your Egg.</h1>
        <p>
            Crafted by a dedicated developer, Ovunto is designed exclusively for you because
            everyone deserves fast, secure browsing at no cost. With Ovunto, you can effortlessly
            manage your passwords, 2FAs, and identities on multiple devices, whether you're online
            or offline. Unlock the freedom to safeguard your digital life.
        </p>
        <Button
            primary
            href="/auth">
            Get Ovunto for Free
        </Button>
    </div>
</main>

<style lang="less">
    main {
        display: grid;
        padding: 0 100px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img {
            width: 100%;
            padding-top: 40px;
        }

        div {
            display: flex;
            padding-top: 100px;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;

            h1 {
                font-size: 50px;
            }
        }
    }
</style>
