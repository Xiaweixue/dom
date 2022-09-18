<template>
    <div>
        <el-card class="lb">
            <div>
                <el-button type="primary">新增</el-button>
                <el-button type="primary">导出商品列表excel文件</el-button>
            </div>
            <el-table :data="list" border style="width: 100%">
                <el-table-column type="index" label="序号">
                </el-table-column>
                <el-table-column prop="name" label="商品图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.pic" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="商品名称">
                </el-table-column>
                <el-table-column prop="price" label="商品价格">
                    <template slot-scope="scope">
                        <div>原价：{{scope.row.price}}</div>
                        <div>现价：{{scope.row.originalPrice}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="productCategoryName" label="商品类别">
                </el-table-column>
                <el-table-column prop="newStatus" label="标签">
                    <template slot-scope="scope">
                        <div>
                           最新： <el-switch v-model="scope.row.newStatus" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                        </div>
                       <p> 推荐： <el-switch v-model="scope.row.previewStatus" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch></p>
                    </template>
                </el-table-column>
                <el-table-column prop="newStatus" label="标签2">
                    <template slot-scope="scope">
                        <div>
                           发布： <el-switch v-model="scope.row.newStatus" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                        </div>
                       <p> 审核： <el-switch v-model="scope.row.previewStatus" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch></p>
                    </template>
                </el-table-column>
                <el-table-column prop="productCategoryName" label="sku">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑sku</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="weight" label="重量">
                </el-table-column>
                <el-table-column prop="sort" label="排序">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small" style="color:red;">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
import axios from '../utlis/request'
export default {

    data() {
        return {
            list: []
        }
    }, created() {
        this.lb
    }, computed: {
        lb() {
            axios.post('lejuAdmin/product/productsByPage/1/10').then(res => {
                console.log(res);
                this.list = res.data.data.rows
            })
        }
    }
}
</script>
<style lang="scss">
.lb {
    margin-top: 30px;
    width: 95%;
    margin-left: 35px;
}

img {
    width: 100px;
    height: 100px;
}
</style>
