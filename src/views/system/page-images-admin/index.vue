<template>
  <div>
    <div class="page-images-admin-body">
      <el-tabs @tab-click="initPageList" type="border-card">
        <el-tab-pane label="轮播图设置">
          <div>
            <el-row :gutter="20">
              <el-col :span="6">
                <span>描述：</span>
                <el-select
                  filterable
                  remote
                  :loading="loading"
                  :remote-method="searchNameSelect"
                  v-model="desNameShow" placeholder="请选择"
                >
                  <el-option

                    v-for="item in desSearchRes"
                    :key="item.id"
                    :label="item.des"
                    :value="item.des"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span>状态：</span>
                <el-select v-model="isShowValue" placeholder="请选择">
                  <el-option
                    v-for="item in isShow"
                    :key="item.key"
                    :label="item.value"
                    :value="item.key"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-button @click="getPageImageList(10001)" type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
              <el-col :span="6">
                <!--      预览-->
                <el-button icon="el-icon-view" @click="dialogRotationChartCat = true" style="margin-right: 20px;"
                           type="primary"
                >预览
                </el-button>
                <!--      增加-->
                <el-button icon="el-icon-plus" @click="dialogRotationChart = true" style="margin: auto;" type="primary">
                  增加
                </el-button>
              </el-col>
            </el-row>

            <!--      预览-->
            <el-dialog title="轮播图预览" :visible.sync="dialogRotationChartCat">
              <el-carousel height="500px">
                <el-carousel-item v-for="item in rotationChartList" :key="item.id">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="item.imageUrl "
                    fit="fill"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </el-dialog>
            <!--      显示-->
            <el-table
              :data="rotationChartList"
              border
              style="width: 100%;margin-top: 30px;"
            >
              <el-table-column
                prop="id"
                label="序号"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="des"
                label="描述"
                width="180"
              >
              </el-table-column>
              <el-table-column
                label="图片"
              >
                <template slot-scope="scope">
                  <div style="text-align: center">
                    <el-popover
                      placement="top-start"
                      width="400"
                      trigger="click"
                    >
                      <div>
                        <el-image
                          style="width: 100%; height: 100%"
                          :src="scope.row.imageUrl "
                          fit="fill"
                        ></el-image>
                      </div>
                      <el-button slot="reference">查看图片</el-button>
                    </el-popover>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
              >
                <template slot-scope="scope">
                  <div style="text-align: center">
                    <div v-if="scope.row.showStatus==1">
                      <el-tag
                        effect="dark"
                      >
                        显示
                      </el-tag>
                    </div>
                    <div v-else>
                      <el-tag
                        effect="danger"
                      >
                        不显示
                      </el-tag>
                    </div>

                  </div>
                  <div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="sort"
                label="排序"
              >
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
              >
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--      分页-->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryParam.currentPage"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="queryParam.size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="queryParam.total"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="顶部banner设置">
          <div>
            <el-row :gutter="20">
              <el-col :span="6">
                <span>描述：</span>
                <el-select
                  filterable
                  remote
                  :loading="loading"
                  :remote-method="searchNameSelect"
                  v-model="desNameShow" placeholder="请选择"
                >
                  <el-option

                    v-for="item in desSearchRes"
                    :key="item.id"
                    :label="item.des"
                    :value="item.des"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <span>状态：</span>
                <el-select v-model="isShowValue" placeholder="请选择">
                  <el-option
                    v-for="item in isShow"
                    :key="item.key"
                    :label="item.value"
                    :value="item.key"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-button @click="getPageImageList(10001)" type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
              <el-col :span="6">
                <!--      预览-->
                <el-button icon="el-icon-view" @click="dialogRotationChartCat = true" style="margin-right: 20px;"
                           type="primary"
                >预览
                </el-button>
                <!--      增加-->
                <el-button icon="el-icon-plus" @click="dialogRotationChart = true" style="margin: auto;" type="primary">
                  增加
                </el-button>
              </el-col>
            </el-row>

            <!--      预览-->
            <el-dialog title="轮播图预览" :visible.sync="dialogRotationChartCat">
              <el-carousel height="500px">
                <el-carousel-item v-for="item in rotationChartList" :key="item.id">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="item.imageUrl "
                    fit="fill"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </el-dialog>
            <!--    列表  显示-->
            <el-table
              :data="topBannerList"
              border
              style="width: 100%;margin-top: 30px;"
            >
              <el-table-column
                prop="id"
                label="序号"
                width="180"
              >
              </el-table-column>
              <el-table-column
                prop="des"
                label="描述"
                width="180"
              >
              </el-table-column>
              <el-table-column
                label="图片"
              >
                <template slot-scope="scope">
                  <div style="text-align: center">
                    <el-popover
                      placement="top-start"
                      width="400"
                      trigger="click"
                    >
                      <div>
                        <el-image
                          style="width: 100%; height: 100%"
                          :src="scope.row.imageUrl "
                          fit="fill"
                        ></el-image>
                      </div>
                      <el-button slot="reference">查看图片</el-button>
                    </el-popover>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
              >
                <template slot-scope="scope">
                  <div style="text-align: center">
                    <div v-if="scope.row.showStatus==1">
                      <el-tag
                        effect="dark"
                      >
                        显示
                      </el-tag>
                    </div>
                    <div v-else>
                      <el-tag
                        effect="danger"
                      >
                        不显示
                      </el-tag>
                    </div>

                  </div>
                  <div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="sort"
                label="排序"
              >
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
              >
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--      分页-->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryParam.currentPage"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="queryParam.size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="queryParam.total"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-dialog title="轮播图" :visible.sync="dialogRotationChart">
        <el-form :model="rotationChartForm">
          <el-form-item label="图片描述" label-width="120px">
            <el-input style="width: 80%" v-model="rotationChartForm.des" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="图片" label-width="120px">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
            >
              <img v-if="rotationChartForm.imageUrl" :src="rotationChartForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="排序" label-width="120px">
            <el-input-number v-model="rotationChartForm.sort" :min="1" :max="10" label="描述文字"></el-input-number>
          </el-form-item>

          <el-form-item label="启用" label-width="120px">
            <el-switch
              v-model="rotationChartForm.showStatus"
              active-color="#13ce66"
              active-value="1"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogRotationChart = false">取 消</el-button>
          <el-button type="primary" @click="saveRotationChart()">确 定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import req from '@/api/system.js'

export default {
  data() {
    return {
      tableData: [],
      queryParam: {
        currentPage: 1,
        size: 10,
        total: 0

      },
      dialogRotationChart: false,
      rotationChartForm: {
        des: '',
        showStatus: 1,
        sort: 1,
        imageUrl: '',
        type: 10001
      },
      desNameShow: '',
      uploadUrl: '',
      isShow: [
        {
          key: 1,
          value: '启用'
        },
        {
          key: 0,
          value: '停用'
        }
      ],
      loading: false,
      isShowValue: '启用',
      desSearchRes: [],
      rotationChartList: [],
      dialogRotationChartCat: false,
      type: [
        {
          name: '轮播图',
          value: 10001
        },
        {
          name: '顶部banner',
          value: 10002
        }
      ],
      //  顶部banner变量
      topBannerList: []
    }
  },
  created() {
    this.uploadUrl = process.env.VUE_APP_BASE_API + 'cloud/oss/upload'
    this.getPageImageList(10001)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleSizeChange(val) {
      this.queryParam.size = val
    },
    handleCurrentChange(val) {
      this.queryParam.currentPage = val
    },
    testDemo(type) {
      console.log(type)
    },
    getPageImageList(type) {
      // 获取图片列表信息
      let param
      param = {}
      param.currentPage = this.queryParam.currentPage
      param.size = this.queryParam.size
      param.type = type

      if (this.isShowValue === '启用') {
        param.showStatus = 1
      } else {
        param.showStatus = this.isShowValue
      }
      req.getPageImagesList(param).then((res) => {
        console.log(res)
        if (type == this.type[0].value) {
          this.rotationChartList = res.data.data.data
        }
        if (type == this.type[1].value) {
          this.topBannerList = res.data.data.data
        }

        console.log(this.rotationChartList)
        this.queryParam.currentPage = res.data.data.currPage
        this.queryParam.total = res.data.data.totalCount
      })
    },
    handleAvatarSuccess(res, file) {
      // 图片上传成功的回调
      this.rotationChartForm.imageUrl = res.data.url
      this.$message({
        message: '图片上传成功！',
        type: 'success'
      })

    },
    searchNameSelect(query) {
      if (query !== '') {
        this.loading = true
        req.selectRotationChartDes(query).then((res) => {
          this.desSearchRes = res.data.data
          this.loading = false
        })
      }
    },
    saveRotationChart() {
      console.log(this.rotationChartForm)
      req.addPageImages(this.rotationChartForm).then((res) => {
        this.$message({
          message: '轮播图添加成功！',
          type: 'success'
        })
        this.rotationChartForm = {}
      })
      this.getPageImageList(10001)
      this.dialogRotationChart = false

    },
    openRotationChart() {

    },
    initPageList(tab) {
      //  点击选项卡调用列表函数
      this.getPageImageList(this.type[tab.index].value)

    }
  }
}
</script>

<style scoped>
.page-images-admin-body {
  margin-top: 30px;
  margin-left: 6%;
  margin-right: 6%;
}


/*图片上传样式*/
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
