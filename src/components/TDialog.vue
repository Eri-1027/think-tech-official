<template>
  <div>
    <!-- success -->
    <t-dialog-confirm
      :t-confirm-text="dialogMsg"
      :t-dialog="dialog.success"
    >
      <template #text>
        <t-sign-animation
          :t-sign-type="'success'"
        />
      </template>
    </t-dialog-confirm>

    <!-- failed -->
    <t-dialog-confirm
      :t-confirm-text="dialogMsg"
      :t-dialog="dialog.failed"
    >
      <template #text>
        <t-sign-animation
          :t-sign-type="'failed'"
        />
      </template>
    </t-dialog-confirm>
  </div>
</template>
<script>
export default {
  computed: {
    dialog () {
      return this.$store.state.dialog.dialog
    },
    dialogMsg () {
      return this.$store.state.dialog.dialogMsg
    }

  }
}
</script>
