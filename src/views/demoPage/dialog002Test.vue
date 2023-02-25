<template>
  <div>
    <el-form
      ref="formModel"
      :disabled="formModelDisabled"
      :model="formModelData"
      :rules="formModelRules"
      :hide-required-asterisk="true"
      label-width="125px"
      label-position="right"
    >
      <el-row :gutter="15">
        <el-col :span="24" style="width:100%;">
          <el-row
            type="flex"
            justify="center"
            align="middle"
            :gutter="15"
            style="flex-direction:row"
          >
            <el-col
              v-if="formModelControl.addOne.isShow"
              :span="24"
              :offset="0"
            >
              <el-form-item-ex label-width="0" prop="addOne">
                <el-button
                  :loading="formModelControl.addOne.loading"
                  @click.native="formModel_addOneClickHandler"
                  type="primary"
                  :disabled="formModelControl.addOne.disabled"
                >
                  新增（专人队列设置）
                </el-button>
                <el-button
                  :loading="formModelControl.changeOne.loading"
                  @click.native="formModel_changeOneClickHandler"
                  type="primary"
                  :disabled="formModelControl.changeOne.disabled"
                >
                  编辑
                </el-button>
                <el-button
                  :loading="formModelControl.deleteMultiple.loading"
                  @click.native="formModel_deleteMultipleClickHandler"
                  type="primary"
                  :disabled="formModelControl.deleteMultiple.disabled"
                >
                  删除
                </el-button>
                <!-- <el-button
                  :loading="formModelControl.showOneInfo.loading"
                  @click.native="formModel_showOneInfoClickHandler"
                  type="primary"
                  :disabled="formModelControl.showOneInfo.disabled"
                >
                  查看
                </el-button> -->
                <!-- <el-button
                  :loading="formModelControl.exportOne.loading"
                  @click.native="formModel_exportOneClickHandler"
                  type="primary"
                  :disabled="formModelControl.exportOne.disabled"
                >
                  导出
                </el-button> -->
              </el-form-item-ex>
            </el-col>
            <!--showMeDialog的弹窗表单开始-Start-->
            <el-dialog
              append-to-body
              :close-on-click-modal="false"
              title="测试弹出框"
              v-bind="$attrs"
              v-on="$listeners"
              :visible.sync="showMeDialog_formModelVisible"
            >
              <div class="el-dialog--inner">
                <el-form
                  ref="showMeDialog_formModel"
                  :disabled="showMeDialog_formModelDisabled"
                  :model="showMeDialog_formModelData"
                  :rules="showMeDialog_formModelRules"
                  :hide-required-asterisk="true"
                  label-width="125px"
                  label-position="right"
                >
                  <el-row :gutter="15">
                    <el-col :span="24" style="width:100%;">
                      <el-row :gutter="15">
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field103.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="队列名称" prop="field103">
                                <remote-dict
                                  ref="formModel_field103"
                                  :params="formModelControl.field103.params"
                                  :disabled="formModelControl.field103.disabled"
                                  v-model="formModelData.field103"
                                  placeholder="请选择队列名称"
                                  clearable
                                  :style="{ width: '100%' }"
                                ></remote-dict>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field105.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="客户名称" prop="field105">
                                <el-input-search
                                  @returnRow="
                                    biz.field105ReturnRowHandler ||
                                      biz.emptyFn('field105ReturnRowHandler')
                                  "
                                  v-model="formModelData.field105"
                                  placeholder="请选择客户名称"
                                  show-word-limit
                                  crud-service="pts"
                                  :init-cond="1"
                                  :default-param="2"
                                  query-name="queryId"
                                  :disabled="formModelControl.field105.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input-search>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field107.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易类型名称"
                                prop="field107"
                              >
                                <el-input-search
                                  @returnRow="
                                    biz.field107ReturnRowHandler ||
                                      biz.emptyFn('field107ReturnRowHandler')
                                  "
                                  v-model="formModelData.field107"
                                  placeholder="请选择交易类型名称"
                                  show-word-limit
                                  crud-service="pts"
                                  :init-cond="1"
                                  :default-param="2"
                                  query-name="queryId"
                                  :disabled="formModelControl.field107.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input-search>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="24" style="width:100%;">
                      <el-row :gutter="15">
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field112.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易节点名称"
                                prop="field112"
                              >
                                <remote-dict
                                  ref="formModel_field112"
                                  :params="formModelControl.field112.params"
                                  :disabled="formModelControl.field112.disabled"
                                  v-model="formModelData.field112"
                                  placeholder="请选择交易节点名称"
                                  clearable
                                  :style="{ width: '100%' }"
                                ></remote-dict>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field114.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="操作人员员工号"
                                prop="field114"
                              >
                                <el-input-search
                                  @returnRow="
                                    biz.field114ReturnRowHandler ||
                                      biz.emptyFn('field114ReturnRowHandler')
                                  "
                                  v-model="formModelData.field114"
                                  placeholder="请选择操作人员员工号"
                                  show-word-limit
                                  crud-service="pts"
                                  :init-cond="1"
                                  :default-param="2"
                                  query-name="queryId"
                                  :disabled="formModelControl.field114.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input-search>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field116.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="启用标识" prop="field116">
                                <remote-dict
                                  ref="formModel_field116"
                                  :params="formModelControl.field116.params"
                                  :disabled="formModelControl.field116.disabled"
                                  v-model="formModelData.field116"
                                  placeholder="请选择启用标识"
                                  clearable
                                  :style="{ width: '100%' }"
                                ></remote-dict>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="24" style="width:100%;">
                      <el-row :gutter="15">
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field124.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="优先次序" prop="field124">
                                <remote-dict
                                  ref="formModel_field124"
                                  :params="formModelControl.field124.params"
                                  :disabled="formModelControl.field124.disabled"
                                  v-model="formModelData.field124"
                                  placeholder="请选择优先次序"
                                  clearable
                                  :style="{ width: '100%' }"
                                ></remote-dict>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
              <span slot="footer">
                <!--手动把按钮粘贴到此处-->
                <el-button
                  :loading="formModelControl.cancelChange.loading"
                  @click.native="formModel_cancelChangeClickHandler"
                  type="primary"
                  :disabled="formModelControl.cancelChange.disabled"
                >
                  取消
                </el-button>
                <el-button
                  :loading="formModelControl.submitOne.loading"
                  @click.native="formModel_submitOneClickHandler"
                  type="primary"
                  :disabled="formModelControl.submitOne.disabled"
                >
                  提交
                </el-button>
              </span>
            </el-dialog>
            <!--showMeDialog的弹窗表单结束-End-->
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import bizFormMixin from "@/mixins/biz-form";
export default {
  mixins: [bizFormMixin],
  name: "dialog002Test",
  components: {},
  props: [],
  data() {
    return {
      biz: {}, //请务必使用点击顶部复制按钮的方式拷贝vue页面 没有biz,表单工具的页面不能渲染
      showMeDialog_formModelVisible: false,
      showMeDialog_formModelDisabled: false,
      showMeDialog_formModelData: {
        ziduan1: ""
      },
      showMeDialog_formModelControl: {
        ziduan1: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        }
      },
      showMeDialog_formModelRules: {},
      multipleSelection: {},
      sendArray: [],
      formModelDisabled: false,
      formModelData: {
        field103: undefined,
        field105: undefined,
        field107: undefined,
        field112: undefined,
        field114: undefined,
        field116: undefined,
        field124: undefined
      },
      formModelControl: {
        addOne: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        changeOne: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        deleteMultiple: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        showOneInfo: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        submitOne: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        cancelChange: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        exportOne: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        showMeDialog: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },

        field103: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "BALANCE_CCY"
            }
          },
          url: undefined
        },
        field105: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field107: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field112: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "BALANCE_CCY"
            }
          },
          url: undefined
        },
        field114: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field116: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "BALANCE_CCY"
            }
          },
          url: undefined
        },
        field124: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "BALANCE_CCY"
            }
          },
          url: undefined
        }
      },
      formModelRules: {
        field103: [
          {
            required: false,
            message: "请选择队列名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择队列名称",
            trigger: "change"
          }
        ],
        field105: [
          {
            required: false,
            message: "请选择客户名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择客户名称",
            trigger: "change"
          }
        ],
        field107: [
          {
            required: false,
            message: "请选择交易类型名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易类型名称",
            trigger: "change"
          }
        ],
        field112: [
          {
            required: false,
            message: "请选择交易节点名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易节点名称",
            trigger: "change"
          }
        ],
        field114: [
          {
            required: false,
            message: "请选择操作人员员工号",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择操作人员员工号",
            trigger: "change"
          }
        ],
        field116: [
          {
            required: false,
            message: "请选择启用标识",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择启用标识",
            trigger: "change"
          }
        ],
        field124: [
          {
            required: false,
            message: "请选择优先次序",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择优先次序",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    formModel_addOneClickHandler() {
      //todo 在这里修改请求体
      // this.$apitas.post_bpcd_setdscdesc({ body: params }).then(res => {
      //   this.bpCdForm.dscDesc = res.data;
      // });
      // 底部是调用缓存接口
      // this.$apitas
      //   .post_tascache_querycachedatatypekey({ dataKey: "", dataType: "" })
      //   .then(res => {});
      this.showMeDialog_formModelVisible = true;
      // this.showMeDialog_formModelData = this.formModelData;
      console.log("我是当前页面数据", this.formModelData);
    },
    formModel_changeOneClickHandler() {
      //todo 在这里修改请求体
      // this.$apitas.post_bpcd_setdscdesc({ body: params }).then(res => {
      //   this.bpCdForm.dscDesc = res.data;
      // });
      // 底部是调用缓存接口
      // this.$apitas
      //   .post_tascache_querycachedatatypekey({ dataKey: "", dataType: "" })
      //   .then(res => {});
      this.showMeDialog_formModelVisible = true;
      this.showMeDialog_formModelData = this.formModelData;
      this.$message.info("编辑");
    },
    formModel_deleteMultipleClickHandler() {
      //todo 在这里修改请求体
      // this.$apitas.post_bpcd_setdscdesc({ body: params }).then(res => {
      //   this.bpCdForm.dscDesc = res.data;
      // });
      // 底部是调用缓存接口
      // this.$apitas
      //   .post_tascache_querycachedatatypekey({ dataKey: "", dataType: "" })
      //   .then(res => {});
      // this.showMeDialog_formModelVisible = true;
      this.$message.info("删除");
      console.log("我是选中行数据", this.multipleSelection);
    },
    formModel_submitOneClickHandler() {
      // 在这里修改请求体
      let params = this.showMeDialog_formModelData;
      // this.$apitas.post_bpcd_setdscdesc({ body: params }).then(res => {
      //   this.bpCdForm.dscDesc = res.data;
      // });
      // 底部是调用缓存接口
      // this.$apitas
      //   .post_tascache_querycachedatatypekey({ dataKey: "", dataType: "" })
      //   .then(res => {});
      this.$message.info("提交成功");
      console.log("我是提交数据：", this.showMeDialog_formModelData.ziduan1);
      console.log("我是提交数据2：", this.showMeDialog_formModelData); // 到时候直接提交这个数据就可以

      this.showMeDialog_formModelVisible = false;
    },
    formModel_cancelChangeClickHandler() {
      //todo here
      this.$message.info("取消信息");
      this.showMeDialog_formModelVisible = false;
    },
    formModel_exportOneClickHandler() {
      //todo here
      this.$message.warning("正在导出");
    }
  }
};
</script>
<style scoped></style>
