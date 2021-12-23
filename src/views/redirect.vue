<template>重定向</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const route = useRoute()
const router = useRouter()

router.replace({ path: `/${route.params.path}`, query: route.query }).catch((err) => {
  message.warning(err)
})
</script>

<style lang="scss" scoped></style>
