<template>
  <v-menu
    offset-y
    open-on-hover
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="secondary"
        v-bind="attrs"
        rounded
        class="mx-1"
        v-on="on"
      >
        {{ title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in listItems"
        :key="index"
        :to="item.link"
        class="listItem"
        color="#fff"
      >
        <v-list-item-title>
          <span class="listItem__text secondary--text">{{ item.title }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    listItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.listItem {
  &:hover {
    .listItem__text {
      color: #000 !important;
      transition: all  1s ;
    }
  }
}
</style>
