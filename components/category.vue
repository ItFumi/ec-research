<template>
    <div class="absolute bg-amber border-2 border-gray top-0.5 h-10 leading-6 left-0.5 py-2 transform rotate-12 rounded-full text-center text-gray text-2xl w-10">
        <span v-if="type==1">
            <font-awesome-icon icon="running" />
        </span>
        <span v-else-if="type==2">
            <font-awesome-icon icon="couch" />
        </span>
        <span v-else-if="type==3">
            <font-awesome-icon icon="shopping-basket" />
        </span>
        <span v-else-if="type==4">
            <font-awesome-icon icon="tv" />
        </span>
        <span v-else-if="type==5">
            <font-awesome-icon icon="tshirt" />
        </span>
    </div>
</template>
<script>
export default {
  props: ["type"]
}
</script>