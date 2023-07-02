<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Projects:</h1>
    <div class="flex flex-col mt-2">
      <Project
        v-for="project in majorProjects"
        :key="project.name"
        :icon="project.icon"
        :name="project.name"
        :link="project.link"
        :year="project.year"
        :description="project.description"
        :color="project.color"
      />
    </div>
    <button class="mt-6" @click="showAllProjects = !showAllProjects">
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="transition duration-300 transform"
        :class="showAllProjects ? '-rotate-180' : ''"
      />
      Show All Projects
    </button>
    <transition name="slide">
      <div v-if="showAllProjects" class="flex flex-col mt-2">
        <Project
          v-for="project in projects"
          :key="project.name"
          :icon="project.icon"
          :name="project.name"
          :link="project.link"
          :year="project.year"
          :description="project.description"
          :color="project.color"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllProjects: false,
      projects: [
        {
          name: 'Bitcoin Clipper',
          link: 'https://github.com/NotKatsu/Bitcoin-Clipper',
          year: 'March 2023',
          description:
            'A Proof of concept of how malicious software could steal your crypto without you noticing.',
          color: 'bg-blue-500',
        },
        {
          name: 'Exodus Drainer',
          link: 'https://github.com/NotKatsu/Exodus-Stealer',
          year: 'May 2023',
          description:
            'An in depth look at how your crypto could be stolen if it is kept in an exodus wallet.',
          color: 'bg-blue-500',
        }
      ],
      majorProjects: [
        {
          name: 'SnowFlake Generation',
          link: 'https://github.com/NotKatsu/SnowFlake-Generator',
          year: 'April 2023',
          description:
            'Generate custom & unique IDs to identify users on your website or in your application.',
          color: 'bg-blue-500',
        },
        {
          name: 'Token Generation',
          link: 'https://github.com/NotKatsu/User-Token',
          year: 'May 2023',
          description:
            'Generate custom & unique authentication tokens for authentication on your website or in your application.',
          color: 'bg-blue-500',
        }
      ],
    }
  },
}
</script>
