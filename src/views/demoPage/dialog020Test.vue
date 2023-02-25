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
                  新增（参与智能分派交易）
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
                                label="交易系统编码"
                                prop="field131"
                              >
                                <remote-dict
                                  ref="formModel_field131"
                                  :params="formModelControl.field131.params"
                                  :disabled="formModelControl.field131.disabled"
                                  v-model="formModelData.field131"
                                  placeholder="请选择交易系统编码"
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
                              v-if="formModelControl.field160.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易类型名称"
                                prop="field160"
                              >
                                <el-input-search
                                  @returnRow="
                                    biz.field160ReturnRowHandler ||
                                      biz.emptyFn('field160ReturnRowHandler')
                                  "
                                  v-model="formModelData.field160"
                                  placeholder="请选择交易类型名称"
                                  show-word-limit
                                  :disabled="formModelControl.field160.disabled"
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
                              v-if="formModelControl.field248.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="交易节点编码"
                                prop="field248"
                              >
                                <remote-dict
                                  ref="formModel_field248"
                                  :params="formModelControl.field248.params"
                                  :disabled="formModelControl.field248.disabled"
                                  v-model="formModelData.field248"
                                  placeholder="请选择交易节点编码"
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
                              v-if="formModelControl.field237.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="是否参与智能分派交易"
                                prop="field237"
                              >
                                <remote-dict
                                  ref="formModel_field237"
                                  :params="formModelControl.field237.params"
                                  :disabled="formModelControl.field237.disabled"
                                  v-model="formModelData.field237"
                                  placeholder="请选择是否参与智能分派交易"
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
                              v-if="formModelControl.field244.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="业务所属" prop="field244">
                                <el-input-search
                                  @returnRow="
                                    biz.field244ReturnRowHandler ||
                                      biz.emptyFn('field244ReturnRowHandler')
                                  "
                                  v-model="formModelData.field244"
                                  placeholder="请选择业务所属"
                                  show-word-limit
                                  :disabled="formModelControl.field244.disabled"
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
                              v-if="formModelControl.field260.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="交易渠道" prop="field260">
                                <remote-dict
                                  ref="formModel_field260"
                                  :params="formModelControl.field260.params"
                                  :disabled="formModelControl.field260.disabled"
                                  v-model="formModelData.field260"
                                  placeholder="请选择交易渠道"
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
                              v-if="formModelControl.field254.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="无视空闲" prop="field254">
                                <remote-dict
                                  ref="formModel_field254"
                                  :params="formModelControl.field254.params"
                                  :disabled="formModelControl.field254.disabled"
                                  v-model="formModelData.field254"
                                  placeholder="请选择无视空闲"
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
                              v-if="formModelControl.field256.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex
                                label="长时/短时"
                                prop="field256"
                              >
                                <remote-dict
                                  ref="formModel_field256"
                                  :params="formModelControl.field256.params"
                                  :disabled="formModelControl.field256.disabled"
                                  v-model="formModelData.field256"
                                  placeholder="请选择长时/短时"
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
                              v-if="formModelControl.field263.isShow"
                              :span="24"
                              :offset="0"
                            >
                              <el-form-item-ex label="启用标识" prop="field263">
                                <remote-dict
                                  ref="formModel_field263"
                                  :params="formModelControl.field263.params"
                                  :disabled="formModelControl.field263.disabled"
                                  v-model="formModelData.field263"
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
        field248: undefined,
        field237: undefined,
        field244: undefined,
        field260: undefined,
        field254: undefined,
        field256: undefined,
        field263: undefined
      },
      formModelControl: {
        field131: {
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
        field160: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field248: {
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
        field244: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        field260: {
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
        field254: {
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
        field256: {
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
        field263: {
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
            message: "请选择交易系统编码",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易系统编码",
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
        field248: [
          {
            required: false,
            message: "请选择交易节点编码",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易节点编码",
            trigger: "change"
          }
        ],
        field237: [
          {
            required: false,
            message: "请选择是否参与智能分派交易",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择是否参与智能分派交易",
            trigger: "change"
          }
        ],
        field244: [
          {
            required: false,
            message: "请选择业务所属",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择业务所属",
            trigger: "change"
          }
        ],
        field260: [
          {
            required: false,
            message: "请选择交易渠道",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择交易渠道",
            trigger: "change"
          }
        ],
        field254: [
          {
            required: false,
            message: "请选择无视空闲",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择无视空闲",
            trigger: "change"
          }
        ],
        field256: [
          {
            required: false,
            message: "请选择长时/短时",
            trigger: "blur"
          },
          {
            required: false,
            message: "请选择长时/短时",
            trigger: "change"
          }
        ],
        field263: [
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
