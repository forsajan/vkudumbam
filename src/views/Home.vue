<template>
  <div class="home">
    <TreeChart :json="treeData" />
  </div>
</template>

<script>
// @ is an alias to /src
import TreeChart from "vue-tree-chart";
import { treeViewData } from "@/model";

export default {
  name: "Home",
  data() {
    return {
      treeData: treeViewData,
    };
  },
  components: {
    TreeChart,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  align-content: center;
}
</style>
