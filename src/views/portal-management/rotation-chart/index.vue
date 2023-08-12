<template>
  <div>
    <a-card style="width: 100%">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
    <a-card style="width: 100%">
      <a-carousel arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img :src="getImgUrl(props.i)"  alt=""/>
          </a>
        </template>
        <div v-for="item in 4" :key="item">
          <img :src="getImgUrl(item - 1)"  alt=""/>
        </div>
      </a-carousel>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { rotationChartListApi } from "@/api/portal-management/portal";

const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';

const getImgUrl = (i: number) => {
  const params: any ={
    type: 1,
  }
  rotationChartListApi(params).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>

