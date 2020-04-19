<template>
  <div class="sh-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ShCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
