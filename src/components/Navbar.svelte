<script>
    import {Navbar,NavBrand,NavHamburger,NavUl,NavLi,Button,Input} from 'flowbite-svelte';
    import {SearchOutline} from 'flowbite-svelte-icons';
</script>
<Navbar>
    <NavBrand>
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    </NavBrand>
    <div class="flex md:order-2">
        <Button color="none" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
            <SearchOutline class="w-5 h-5"/>
        </Button>
        <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400"/>
            </div>
            <Input placeholder="Search" class="pl-10"/>
        </div>
    </div>
    <NavHamburger />
    <NavUl>
        <NavLi href="/" active={true}>Popular</NavLi>
        <NavLi href="/about">Top Airing</NavLi>
        <NavLi href="/services">Categories</NavLi>
    </NavUl>   
</Navbar>