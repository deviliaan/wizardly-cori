<script>
    import { Footer, FooterBrand, FooterLink, FooterLinkGroup, FooterCopyright } from 'flowbite-svelte';
</script>

<Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="#" src="https://flowbite.com/docs/images/logo.svg" name="69Animes" alt="Flowbite"/>
        <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <FooterLink>About</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Blog</FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <FooterCopyright by="69Animes" year={2024} />
</Footer>