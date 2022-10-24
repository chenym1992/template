<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore()
const {count,doubleCount} = storeToRefs(counterStore);
</script>
<template>
  <div class="about">
    <div>
      <p>about pinia</p>
      <button @click="counterStore.increment">increment</button>
      <p>{{ count }}</p>
      <p>{{ doubleCount }}</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  p{
    margin-top: 20px;
  }
}
</style>
