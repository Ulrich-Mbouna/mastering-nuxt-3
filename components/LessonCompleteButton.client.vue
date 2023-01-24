<template>
    <label
        class="uk-button uk-button-small  !rounded !text-white"
        :class=" !modelValue ? 'bg-gray-700' : 'bg-green-700'"
    >
      <input
          type="checkbox"
          :value="modelValue"
          @input="() => $emit('update:model-value', !modelValue)"
          class="hidden"
      />
      {{ modelValue ? 'Completed' : 'Mark as complete' }}
    </label>
</template>

<script setup>
defineProps({
  modelValue:{
    type: Boolean,
    default: false
  }
})

defineEmits(['update:model-value'])
</script>

<style scoped>
::selection {
  display: none;
}
</style>
