<template>
    <div>
        <el-card class="box-card">
            <i :class="item?'el-icon-s-unfold':'el-icon-s-fold'" @click="dj"></i>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/zy' }">{{title.ej}}</el-breadcrumb-item>
               
                
                <el-breadcrumb-item>{{title.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
    </div>
</template>
<script>
export default {
    props: {
        item: Boolean
    },data() {
        return {
            title:{}
        }
    },
    methods: {
        dj() {
            this.item = !this.item
            this.$emit('dj', this.item)
        }
    }, watch: {
        $route: {
            handler(val) {
                console.log(val, '123123123');
                this.title = val.meta
            },
            immediate:true
        }
    }
}
</script>
<style lang="scss">
.el-card__body{
    display: flex;
}
</style>
