<template>
    <div>
        <el-card class="box-card">
            <i :class="add?'el-icon-s-unfold':'el-icon-s-fold'" @click="dj"></i>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '' }">{{title.ej}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{title.title}}</el-breadcrumb-item>
               
            </el-breadcrumb>
        </el-card>
    </div>
</template>
<script>
export default {
    props: {
        
    }, data() {
        return {
            title: {},
            add:false
        }
    },
    methods: {
        dj() {
            this.add = !this.add
            this.$emit('dj', this.add)
        }
    }, watch: {
        $route: {
            handler(val) {
                // console.log(val, '123123123');
                this.title = val.meta
            },
            immediate: true
        }
    }
}
</script>
<style lang="scss">
.el-card__body {
    display: flex;
}
</style>
