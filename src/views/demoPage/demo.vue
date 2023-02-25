<template>
  <div class="p15 framework-component__wrapper">
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
          <el-row :gutter="15">
            <el-col :span="24" style="width:33%;">
              <el-row :gutter="15">
                <el-col
                  v-if="formModelControl.field113.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="币种" prop="field113">
                    <remote-dict
                      ref="formModel_field113"
                      :params="formModelControl.field113.params"
                      :disabled="formModelControl.field113.disabled"
                      v-model="formModelData.field113"
                      placeholder="请输入币种"
                      clearable
                    ></remote-dict>
                  </el-form-item-ex>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" style="width:33%;">
              <el-row :gutter="15">
                <el-col
                  v-if="formModelControl.ziduan2.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="日期选择" prop="ziduan2">
                    <el-date-picker
                      v-model="formModelData.ziduan2"
                      format="yyyy-MM-dd"
                      value-format="yyyyMMdd"
                      placeholder="请输入单行文本日期选择"
                      clearable
                      :disabled="formModelControl.ziduan2.disabled"
                    ></el-date-picker>
                  </el-form-item-ex>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" style="width:33%;">
              <el-row :gutter="15">
                <el-col
                  v-if="formModelControl.ziduan3.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="时间段名称" prop="ziduan3">
                    <el-input
                      v-model="formModelData.ziduan3"
                      placeholder="请输入单行文本"
                      show-word-limit
                      :disabled="formModelControl.ziduan3.disabled"
                      clearable
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
                  v-if="formModelControl.ziduan4.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="启用标识" prop="ziduan4">
                    <remote-dict
                      ref="formModel_ziduan4"
                      :params="formModelControl.ziduan4.params"
                      :disabled="formModelControl.ziduan4.disabled"
                      v-model="formModelData.ziduan4"
                      placeholder="请输入单行文本启用标识"
                      clearable
                    ></remote-dict>
                  </el-form-item-ex>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" style="width:33%;">
              <el-row :gutter="15">
                <el-col
                  v-if="formModelControl.ziduan5.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="日期选择" prop="ziduan5">
                    <remote-dict
                      ref="formModel_ziduan5"
                      :params="formModelControl.ziduan5.params"
                      :disabled="formModelControl.ziduan5.disabled"
                      v-model="formModelData.ziduan5"
                      placeholder="请输入单行文本日期选择"
                      clearable
                    ></remote-dict>
                  </el-form-item-ex>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" style="width:33%;">
              <el-row :gutter="15">
                <el-col
                  v-if="formModelControl.ziduan6.isShow"
                  :span="24"
                  :offset="0"
                >
                  <el-form-item-ex label="机构树" prop="ziduan6">
                    <remote-dict
                      ref="formModel_ziduan6"
                      :params="formModelControl.ziduan6.params"
                      :disabled="formModelControl.ziduan6.disabled"
                      v-model="formModelData.ziduan6"
                      placeholder="请输入单行文本机构树"
                      clearable
                    ></remote-dict>
                  </el-form-item-ex>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24" style="width:100%;">
          <el-row
            type="flex"
            justify="center"
            align="middle"
            :gutter="15"
            style="flex-direction:row;text-align:center"
          >
            <el-col
              v-if="formModelControl.field113.isShow"
              :span="24"
              :offset="0"
            >
              <el-form-item-ex label-width="0" prop="field113">
                <el-button
                  :loading="formModelControl.field113.loading"
                  @click.native="formModel_field113ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field113.disabled"
                >
                  重置
                </el-button>
                <el-button
                  :loading="formModelControl.field118.loading"
                  @click.native="formModel_field118ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field118.disabled"
                >
                  查询
                </el-button>
                <!-- <el-button
                  :loading="formModelControl.field119.loading"
                  @click.native="formModel_field119ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field119.disabled"
                >
                  新增
                </el-button>
                <el-button
                  :loading="formModelControl.field120.loading"
                  @click.native="formModel_field120ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field120.disabled"
                >
                  修改
                </el-button>
                <el-button
                  :loading="formModelControl.field121.loading"
                  @click.native="formModel_field121ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field121.disabled"
                >
                  删除
                </el-button>
                <el-button
                  :loading="formModelControl.field122.loading"
                  @click.native="formModel_field122ClickHandler"
                  type="primary"
                  :disabled="formModelControl.field122.disabled"
                >
                  查看
                </el-button> -->
                <dialog002Test ref="dialog002Test"></dialog002Test>
                <dialog003Test ref="dialog003Test"></dialog003Test>
                <dialog004Test ref="dialog004Test"></dialog004Test>
                <dialog005Test ref="dialog005Test"></dialog005Test>
                <dialog006Test ref="dialog006Test"></dialog006Test>
                <dialog007Test ref="dialog007Test"></dialog007Test>
                <dialog008Test ref="dialog008Test"></dialog008Test>
                <dialog009Test ref="dialog009Test"></dialog009Test>
                <dialog010Test ref="dialog010Test"></dialog010Test>
                <dialog011Test ref="dialog011Test"></dialog011Test>
                <dialog012Test ref="dialog012Test"></dialog012Test>
                <dialog013Test ref="dialog013Test"></dialog013Test>
                <dialog014Test ref="dialog014Test"></dialog014Test>
                <dialog015Test ref="dialog015Test"></dialog015Test>
                <dialog016Test ref="dialog016Test"></dialog016Test>
                <dialog017Test ref="dialog017Test"></dialog017Test>
                <dialog018Test ref="dialog018Test"></dialog018Test>
                <dialog019Test ref="dialog019Test"></dialog019Test>
                <dialog020Test ref="dialog020Test"></dialog020Test>
                <dialog021Test ref="dialog021Test"></dialog021Test>
                <dialog022Test ref="dialog022Test"></dialog022Test>
                <dialog023Test ref="dialog023Test"></dialog023Test>
                <dialog024Test ref="dialog024Test"></dialog024Test>
                <!-- ======================================================== -->
                <dialog025Test ref="dialog025Test"></dialog025Test>
                <dialog026Test ref="dialog026Test"></dialog026Test>
                <dialog027Test ref="dialog027Test"></dialog027Test>
                <dialog028Test ref="dialog028Test"></dialog028Test>
                <dialog029Test ref="dialog029Test"></dialog029Test>
              </el-form-item-ex>
            </el-col>

            <!--field122的弹窗表单开始-Start-->
            <!-- <el-dialog
              append-to-body
              :close-on-click-modal="false"
              title=""
              v-bind="$attrs"
              v-on="$listeners"
              :visible.sync="field122_formModelVisible"
            >
              <div class="el-dialog--inner">
                <el-form
                  ref="field122_formModel"
                  :disabled="field122_formModelDisabled"
                  :model="field122_formModelData"
                  :rules="field122_formModelRules"
                  :hide-required-asterisk="true"
                  label-width="125px"
                  label-position="right"
                >
                  <el-row :gutter="15">
                    <el-col :span="24" style="width:100%;">
                      <el-row :gutter="15"> </el-row>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
              <span slot="footer"> -->
            <!--手动把按钮粘贴到此处-->
            <!-- </span>
            </el-dialog> -->
            <!--field122的弹窗表单结束-End-->
          </el-row>
        </el-col>
        <el-col :span="24" style="width:100%;">
          <el-row :gutter="15">
            <el-col
              v-if="formModelControl.field124.isShow"
              :span="24"
              :offset="0"
            >
              <el-table
                highlight-current-row
                stripe
                border
                height="450"
                ref="formModel_field124"
                :data="formModelControl.field124.tableData"
                @current-change="formModel_field124_handleCurrentChange"
                @selection-change="handleSelectionChange"
                style="width:100%;"
              >
                <el-table-column
                  type="index"
                  width="55px"
                  align="center"
                  label="#"
                />
                <el-table-column
                  type="selection"
                  header-align="center"
                  align="center"
                  width="50"
                ></el-table-column>
                <el-table-column
                  v-for="(th, key) in formModelControl.field124.tableHeader"
                  :show-overflow-tooltip="true"
                  :fixed="key < 0"
                  :key="key"
                  sortable="true"
                  :prop="th.prop"
                  :formatter="th.formatter"
                  :label="th.label"
                  :min-width="th.width"
                ></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
        <el-col v-if="formModelControl.field135.isShow" :span="24" :offset="0">
          <!-- <el-pagination
            @size-change="formModel_query"
            @current-change="formModel_query"
            :current-page.sync="formModelData.currPage"
            :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"
            :page-size.sync="formModelData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="formModelControl.field135.total"
          >
          </el-pagination> -->
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import bizFormMixin from "@/mixins/biz-form";
import dialog002Test from "./dialog002Test.vue";
import dialog003Test from "./dialog003Test.vue";
import dialog004Test from "./dialog004Test.vue";
import dialog005Test from "./dialog005Test.vue";
import dialog006Test from "./dialog006Test.vue";
import dialog007Test from "./dialog007Test.vue";
import dialog008Test from "./dialog008Test.vue";
import dialog009Test from "./dialog009Test.vue";
import dialog010Test from "./dialog010Test.vue";
import dialog011Test from "./dialog011Test.vue";
import dialog012Test from "./dialog012Test.vue";
import dialog013Test from "./dialog013Test.vue";
import dialog014Test from "./dialog014Test.vue";
import dialog015Test from "./dialog015Test.vue";
import dialog016Test from "./dialog016Test.vue";
import dialog017Test from "./dialog017Test.vue";
import dialog018Test from "./dialog018Test.vue";
import dialog019Test from "./dialog019Test.vue";
import dialog020Test from "./dialog020Test.vue";
import dialog021Test from "./dialog021Test.vue";
import dialog022Test from "./dialog022Test.vue";
import dialog023Test from "./dialog023Test.vue";
import dialog024Test from "./dialog024Test.vue";
import dialog025Test from "./dialog025Test.vue";
import dialog026Test from "./dialog026Test.vue";
import dialog027Test from "./dialog027Test.vue";
import dialog028Test from "./dialog028Test.vue";
import dialog029Test from "./dialog029Test.vue";
export default {
  mixins: [
    bizFormMixin,
    dialog002Test,
    dialog003Test,
    dialog004Test,
    dialog005Test,
    dialog006Test,
    dialog007Test,
    dialog008Test,
    dialog009Test,
    dialog010Test,
    dialog011Test,
    dialog012Test,
    dialog013Test,
    dialog014Test,
    dialog015Test,
    dialog016Test,
    dialog017Test,
    dialog018Test,
    dialog019Test,
    dialog020Test,
    dialog021Test,
    dialog022Test,
    dialog023Test,
    dialog024Test,
    dialog025Test,
    dialog026Test,
    dialog027Test,
    dialog028Test,
    dialog029Test
  ],
  name: "demo",
  components: {
    dialog002Test,
    dialog003Test,
    dialog004Test,
    dialog005Test,
    dialog006Test,
    dialog007Test,
    dialog008Test,
    dialog009Test,
    dialog010Test,
    dialog011Test,
    dialog012Test,
    dialog013Test,
    dialog014Test,
    dialog015Test,
    dialog016Test,
    dialog017Test,
    dialog018Test,
    dialog019Test,
    dialog020Test,
    dialog021Test,
    dialog022Test,
    dialog023Test,
    dialog024Test,
    dialog025Test,
    dialog026Test,
    dialog027Test,
    dialog028Test,
    dialog029Test
  },
  props: [],
  data() {
    return {
      formModelDisabled: false,
      field122_formModelVisible: false,
      formModelData: {
        ziduan1: undefined,
        field113: undefined,
        ziduan2: undefined,
        ziduan3: undefined,
        ziduan4: undefined,
        ziduan5: undefined,
        ziduan6: undefined,
        currPage: 1,
        multipleSelection: [],
        page: {
          currPage: 1,
          pageSize: 3,
          totalSize: 0
        }
      },
      formModelControl: {
        ziduan1: {
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
        field113: {
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
        ziduan2: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        ziduan3: {
          isShowType: "v-if",
          isShow: true,
          disabled: false
        },
        ziduan4: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "ENABLE_FLAG"
            }
          },
          url: undefined
        },
        ziduan5: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          params: {
            data: {
              codeType: "TIME_SLOT"
            }
          },
          url: undefined
        },
        ziduan6: {
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
        field113: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field118: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field119: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field120: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field121: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field122: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          url: undefined
        },
        field124: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          tableHeader: [
            {
              prop: "ziduan1",
              label: "时间段名称",
              width: 120
            },
            {
              prop: "ziduan2",
              label: "开始时间",
              width: 120
            },
            {
              prop: "ziduan3",
              label: "结束时间",
              width: 120
            },
            {
              prop: "ziduan4",
              label: "结束日期",
              width: 120
            },
            {
              prop: "ziduan5",
              label: "计分矩阵",
              width: 120
            },
            {
              prop: "ziduan6",
              label: "启用标识",
              width: 120
            }
          ],
          url: undefined,
          tableData: [],
          currentRow: null
        },
        field135: {
          isShowType: "v-if",
          isShow: true,
          disabled: false,
          total: 0
        }
      },
      formModelRules: {
        ziduan1: [
          {
            required: false,
            message: "请输入单行文本时间段名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本时间段名称",
            trigger: "change"
          }
        ],
        field113: [
          {
            required: false,
            message: "请输入单行文本时间段名称",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本时间段名称",
            trigger: "change"
          }
        ],
        ziduan2: [
          {
            required: false,
            message: "请输入单行文本日期选择",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本日期选择",
            trigger: "change"
          }
        ],
        ziduan3: [
          {
            required: false,
            message: "请输入单行文本",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本",
            trigger: "change"
          }
        ],
        ziduan4: [
          {
            required: false,
            message: "请输入单行文本启用标识",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本启用标识",
            trigger: "change"
          }
        ],
        ziduan5: [
          {
            required: false,
            message: "请输入单行文本日期选择",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本日期选择",
            trigger: "change"
          }
        ],
        ziduan6: [
          {
            required: false,
            message: "请输入单行文本机构树",
            trigger: "blur"
          },
          {
            required: false,
            message: "请输入单行文本机构树",
            trigger: "change"
          }
        ]
      },
      queryResultData: {
        pageSize: 20,
        totalSize: 50,
        currentPage: 1
      },
      queryResultData: [
        {
          ziduan1: 1,
          ziduan2: 1,
          ziduan3: 1,
          ziduan4: 1,
          ziduan5: 1,
          ziduan6: 1
        },
        {
          ziduan1: 2,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 3,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 4,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 5,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 6,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 7,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        },
        {
          ziduan1: 8,
          ziduan2: 2,
          ziduan3: 2,
          ziduan4: 2,
          ziduan5: 2,
          ziduan6: 2
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    formModel_field113ClickHandler() {
      //todo here
      this.$refs[formModel].resetFields();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.$refs.dialog002Test.multipleSelection = val;
      console.log("我是多选框数据：", val);
    },
    formModel_field118ClickHandler() {
      //todo here
      this.formModelControl.field124.tableData = this.queryResultData;
      console.log("我是数据长度：", this.queryResultData.length);
      this.formModelControl.field135.total = this.queryResultData.length;
    },
    formModel_field119ClickHandler() {
      //todo here
    },
    formModel_field120ClickHandler() {
      //todo here
    },
    formModel_field121ClickHandler() {
      //todo here
    },
    formModel_field122ClickHandler() {
      //todo here
      this.field122_formModelVisible = true;
    },
    /*搜索表格field124选中行*/
    formModel_field124_handleCurrentChange(val) {
      this.formModelControl.field124.currentRow = val;
      this.$refs.dialog002Test.formModelData = val;
      console.log("我是当前行数据：", val);
    }
  }
};
</script>
<style scoped></style>
