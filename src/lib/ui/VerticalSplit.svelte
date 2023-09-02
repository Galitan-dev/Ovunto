<span><slot /></span>

<style>
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;

        color: var(--text-dimmed);
        font-size: 15px;

        &::before,
        &::after {
            content: '';

            display: block;
            width: 100%;
            height: 3px;

            background: var(--text-dimmed);
        }
    }
</style>
