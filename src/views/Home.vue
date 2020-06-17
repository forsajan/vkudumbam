<template>
  <div class="home">
    <TreeStructure :treeData="treeData" />
  </div>
</template>

<script>
// @ is an alias to /src
import TreeStructure from "../components/TreeStructure.vue";
import { treeViewData } from "@/model";

export default {
  name: "Home",
  data() {
    return {
      treeData: treeViewData,
    };
  },
  components: {
    TreeStructure,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  align-content: center;
}
</style>
