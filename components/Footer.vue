<script lang="ts" setup>
const currentYear = new Date();
</script>

<template>
  <footer>
    <div
      class="max-w-4xl border-t lg:px-0 px-4 flex justify-between items-center text-[14px] pb-5 pt-5 dark:border-[#34343a] border-[#c7c7c7] mx-auto"
    >
      <p class="flex-inline items-center">
        © {{ currentYear.getFullYear() }} Aayush Anil Mishra
        <br class="sm:hidden" />Built with
        <a href="https://nuxt.com" target="_blank">
          <svg
            class="w-4 inline mr-1 ml-1"
            viewBox="0 0 61 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.9971 39.539H56.5247C57.2402 39.539 57.9432 39.3564 58.5628 39.0093C59.1825 38.6623 59.697 38.1631 60.0546 37.5619C60.4122 36.9608 60.6003 36.2789 60.6 35.5849C60.5997 34.8908 60.411 34.2091 60.0528 33.6083L44.9239 8.1904C44.5663 7.5894 44.0519 7.09032 43.4324 6.74332C42.8129 6.39632 42.1101 6.21363 41.3947 6.21363C40.6793 6.21363 39.9766 6.39632 39.357 6.74332C38.7375 7.09032 38.2231 7.5894 37.8655 8.1904L33.9971 14.6939L26.4338 1.97648C26.0759 1.37553 25.5613 0.876518 24.9416 0.52958C24.3219 0.182643 23.619 0 22.9035 0C22.188 0 21.4851 0.182643 20.8654 0.52958C20.2457 0.876518 19.7311 1.37553 19.3732 1.97648L0.547184 33.6083C0.189033 34.2091 0.00031171 34.8908 3.85805e-07 35.5849C-0.000310938 36.2789 0.187799 36.9608 0.54541 37.5619C0.903021 38.1631 1.41752 38.6623 2.03717 39.0093C2.65681 39.3564 3.35975 39.539 4.07528 39.539H18.2162C23.819 39.539 27.9509 37.1518 30.794 32.4945L37.6965 20.8993L41.3936 14.6939L52.4895 33.3335H37.6965L33.9971 39.539ZM17.9857 33.3272L8.11711 33.325L22.9101 8.47362L30.2912 20.8993L25.3492 29.2044C23.4611 32.2262 21.3162 33.3272 17.9857 33.3272Z"
            />
          </svg> </a
        >Open Sourced On
        <a
          class="underline"
          href="https://github.com/aayushmishramechatronics/nuxt3-portfolio-blog"
        >
          Github</a
        >
      </p>

      <div class="flex">
        <a class="mr-3" target="_blank" href="https://twitter.com/aayushmishra">
          <IconsTwitter class="w-4 dark:fill-white" />
        </a>
        <a target="_blank" href="https://github.com/aayushmishramechatronics"
          ><IconsGithub class="w-4 dark:fill-white" />
        </a>
      </div>
    </div>
  </footer>
</template>
