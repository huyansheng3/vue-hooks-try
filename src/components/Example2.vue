<template>
  <div>
    <span>xy{{ x }} {{y}}</span>

  </div>
</template>

<script>
import Vue from "vue";
import {
  value,
  computed,
  watch,
  onMounted,
  onUnmounted
} from "vue-function-api";

function useMouse() {
  const x = value(0);
  const y = value(0);
  const update = e => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });
  return { x, y };
}

export default {
  setup() {
    const { x, y } = useMouse();
    return {
      x,
      y
    };
  }
};
</script>