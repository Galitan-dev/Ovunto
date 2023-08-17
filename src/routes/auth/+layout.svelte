<script>
    import illustration from '$lib/images/secure.png';
</script>

<main>
    <div class="left">
        <img
            src="{illustration}"
            alt="Secure browsing"
        />
        <h1>Ovunto</h1>
    </div>
    <div class="right"><slot /></div>
</main>

<style lang="less">
    @import '/src/lib/theme.less';

    main {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 3fr 4fr;
        grid-template-rows: 100%;
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: @text-color;
        color: @background-color;

        h1 {
            font-size: 50px;
        }

        img {
            width: 70%;
        }
    }

    .right {
        display: flex;
        width: 400px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto auto;
        background-color: lighten(@background-color, 10%);
        padding: 40px;
        border-radius: 20px;
        gap: 10px;
    }

    @media (max-width: 760px) {
        .left {
            display: none;
        }

        main {
            grid-template-columns: 1fr;
        }
    }
</style>
