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
                  新增（交易类型设置）
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
                <el-button
                  :loading="formModelControl.exportOne.loading"
                  @click.native="formModel_exportOneClickHandler"
                  type="primary"
                  :disabled="formModelControl.exportOne.disabled"
                >
                  导出
                </el-button>
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
                    <!-- ======================================================== -->
                    <!-- ======================================================== -->

                    <el-col :span="24" style="width:100%;">
                      <el-row :gutter="15">
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field131.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易类型编码"
                                prop="field131"
                              >
                                <el-input-search
                                  @returnRow="
                                    biz.field131ReturnRowHandler ||
                                      biz.emptyFn('field131ReturnRowHandler')
                                  "
                                  v-model="formModelData.field131"
                                  placeholder="请选择交易类型编码"
                                  show-word-limit
                                  :disabled="formModelControl.field131.disabled"
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
                              v-if="formModelControl.field160.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易类型名称"
                                prop="field160"
                              >
                                <el-input
                                  v-model="formModelData.field160"
                                  placeholder="请选择交易类型名称"
                                  show-word-limit
                                  :disabled="formModelControl.field160.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field205.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="当天业务进来截止时间"
                                prop="field205"
                              >
                                <el-input-number-ex
                                  v-model="formModelData.field205"
                                  :controls="false"
                                  placeholder="请选择当天业务进来截止时间"
                                  :step="1"
                                  :precision="2"
                                  :disabled="formModelControl.field205.disabled"
                                ></el-input-number-ex>
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
                              v-if="formModelControl.field209.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="当天业务完成截止时间"
                                prop="field209"
                              >
                                <el-input
                                  v-model="formModelData.field209"
                                  placeholder="请选择当天业务完成截止时间"
                                  show-word-limit
                                  :disabled="formModelControl.field209.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input>
                              </el-form-item-ex>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="24" style="width:33%;">
                          <el-row :gutter="15">
                            <el-col
                              v-if="formModelControl.field211.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="服务承诺时长"
                                prop="field211"
                              >
                                <el-input
                                  v-model="formModelData.field211"
                                  placeholder="请选择服务承诺时长"
                                  show-word-limit
                                  :disabled="formModelControl.field211.disabled"
                                  clearable
                                  :style="{ width: '100%' }"
                                >
                                </el-input>
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
                              v-if="formModelControl.field235.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易系统编号"
                                prop="field235"
                              >
                                <remote-dict
                                  ref="formModel_field235"
                                  :params="formModelControl.field235.params"
                                  :disabled="formModelControl.field235.disabled"
                                  v-model="formModelData.field235"
                                  placeholder="请选择交易系统编号"
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
                              v-if="formModelControl.field237.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="启用标识" prop="field237">
                                <remote-dict
                                  ref="formModel_field237"
                                  :params="formModelControl.field237.params"
                                  :disabled="formModelControl.field237.disabled"
                                  v-model="formModelData.field237"
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
  name: "dialog004Test",
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
      // ========================================================

      formModelData: {
        field131: undefined,
        field160: undefined,
        field205: undefined,
        field209: undefined,
        field211: undefined,
        field235: undefined,
        field237: undefined
      },
      formModelControl: {
        field131: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field160: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field205: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field209: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field211: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field235: {
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
        field237: {
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
        // ========================================================
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
        }
      },
      formModelRules: {
        field131: [
          {
            required: false,
            message: "请选择交易类型编码",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易类型编码",
            trigger: "change"
          }
        ],
        field160: [
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
        field205: [
          {
            required: false,
            message: "请选择当天业务进来截止时间",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择当天业务进来截止时间",
            trigger: "change"
          }
        ],
        field209: [
          {
            required: false,
            message: "请选择当天业务完成截止时间",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择当天业务完成截止时间",
            trigger: "change"
          }
        ],
        field211: [
          {
            required: false,
            message: "请选择服务承诺时长",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择服务承诺时长",
            trigger: "change"
          }
        ],
        field235: [
          {
            required: false,
            message: "请选择交易系统编号",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易系统编号",
            trigger: "change"
          }
        ],
        field237: [
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
