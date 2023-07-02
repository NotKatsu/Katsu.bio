<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Contacts:</h1>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="https://discord.com/channels/@me/1052982721598738522/"
        target="_blank"
        class="bg-blue-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'discord']" /> @katsu.bio
      </a>
      <a
        href="mailto:hello@katsu.bio"
        target="_blank"
        class="bg-blue-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
      <font-awesome-icon :icon="['fa', 'envelope']" /> hello@katsu.bio
      </a>
    </div>

  </div>
</template>
