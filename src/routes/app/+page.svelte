<script lang="ts">
    import Button from "$lib/ui/Button.svelte";
    import { page } from '$app/stores';
    import { redirect } from "@sveltejs/kit";
    import { signOut } from "@auth/sveltekit/client";

    if (!$page.data.session?.user) {
        throw redirect(303, '/auth')
    }

    const user = $page.data.session?.user;
</script>

<h1>Hello {user.name ?? "User"}</h1>
<p>eMail: {user.email}</p>

<Button 
    text="Log-Out"
    on:click={() => signOut({ callbackUrl: `${window.location.origin}/` })}
/>
