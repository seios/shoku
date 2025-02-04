<script lang="ts">
  import SearchForm from "$lib/components/SearchForm.svelte";
  import ModeWatcherDropdown from "$lib/components/ModeWatcherDropdown.svelte";
</script>

<header class="flex sticky top-0 z-50 w-full items-center border-b bg-background">
  <div class="flex h-12 w-full items-center gap-2 px-4">
    <SearchForm class="w-full sm:ml-auto sm:w-auto" />
    <ModeWatcherDropdown />
  </div>
</header>
