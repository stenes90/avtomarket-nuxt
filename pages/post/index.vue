<template>
  <ClientOnly>
    <carousel :per-page="1" :mouseDrag="true" :centerMode="true">
      <slide>
        <img
          src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="
          alt=""
        />
      </slide>
      <slide>
        <img
          src="https://sonar.es/system/attached_images/25944/medium/branko-2-sonar-bcn-2019.jpg?1548332699"
          alt=""
        />
      </slide>
    </carousel>
  </ClientOnly>
</template>

<script>
//import { Carousel, Slide } from "vue-carousel";
export default {
  // components: {
  //   Carousel,
  //   Slide
  // }
};
</script>
