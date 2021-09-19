<template>
    <div :class="[ isActive == id ? 'animate-rotateCategory' : '' ]" class="absolute bg-amber border-2 border-gray top-0.5 h-10 leading-6 left-0.5 py-2 transform rotate-12 rounded-full text-center text-gray text-2xl w-10">
        <span v-if="type==1">
            <fa :icon="['fas', 'running']" />
        </span>
        <span v-else-if="type==2">
            <fa :icon="['fas', 'couch']" />
        </span>
        <span v-else-if="type==3">
            <fa :icon="['fas', 'shopping-basket']" />
        </span>
        <span v-else-if="type==4">
            <fa :icon="['fas', 'tv']" />
        </span>
        <span v-else-if="type==5">
            <fa :icon="['fas', 'tshirt']" />
        </span>
    </div>
</template>
<script>
export default {
  props: ["type","isActive","id"]
}
</script>