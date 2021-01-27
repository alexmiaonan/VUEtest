<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<HiWorld msg="home传来的msg" :num="20" @send="sendmsg">
			<h1 slot="shang">Home页面插槽1</h1>
			<h2 slot="xia">Home页面插槽2</h2>
		</HiWorld>
		<Heart :stateprop="heartstate" @toparents="statechange"><span slot="heart">为你点赞！</span></Heart>
		<br>
		<br>
		<Star :starnumprop="star" @tellparent="starchange"><span slot="to">评星！</span></Star>
		<br>
		<br>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"><i class="el-icon-edit"></i>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<el-row>
			<el-button plain>朴素按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" plain>成功按钮</el-button>
			<el-button type="info" plain>信息按钮</el-button>
			<el-button type="warning" plain>警告按钮</el-button>
			<el-button type="danger" plain>危险按钮</el-button>
		</el-row>
		<el-row>
			<el-button round>圆角按钮</el-button>
			<el-button type="primary" round>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>
		</el-row>
		<el-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
		<el-row>
			<el-link type="primary">主要链接</el-link>
			<el-link type="success">成功链接</el-link>
			<el-link type="warning">警告链接</el-link>
			<el-link type="danger">危险链接</el-link>
			<el-link type="info">信息链接</el-link>
		</el-row>
		<el-row>
			<el-input placeholder="请输入内容" v-model="input" clearable></el-input>
			<el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
		</el-row>
		<el-row>
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
			</el-switch>
			<div class="block">
				<span class="demonstration">带快捷选项</span>
				<el-date-picker v-model="value3" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions">
				</el-date-picker>
			</div>
		</el-row>
		<el-row>
			<div class="block">
				<span class="demonstration">Click 指示器触发</span>
				<el-carousel trigger="click" height="150px">
					<el-carousel-item v-for="item in img" :key="item">
						<img :src="item" alt="">
					</el-carousel-item>
				</el-carousel>
			</div>
		</el-row>
		<br>
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item title="一致性 Consistency" name="1">
				<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
				<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
			</el-collapse-item>
			<el-collapse-item title="反馈 Feedback" name="2">
				<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
				<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
			</el-collapse-item>
			<el-collapse-item title="效率 Efficiency" name="3">
				<div>简化流程：设计简洁直观的操作流程；</div>
				<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
			</el-collapse-item>
			<el-collapse-item title="可控 Controllability" name="4">
				<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
				<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
			</el-collapse-item>
		</el-collapse>
		<br>
		<div class="demo-image__lazy">
			<el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
		</div>
		<div class="demo-image__preview">
			<el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
			</el-image>
		</div>
		<br>
		<el-row style="overflow:auto;height: 100px;">
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">
					<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
						<li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
		<br>
		<el-row>
			<el-radio v-model="radio" label="1">备选项</el-radio>
			<el-radio v-model="radio" label="2">备选项</el-radio>
		</el-row>
		<br>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
			<el-checkbox label="禁用" disabled></el-checkbox>
			<el-checkbox label="选中且禁用" disabled></el-checkbox>
		</el-checkbox-group>
		<br>
		<el-cascader :options="options1" :show-all-levels="false"></el-cascader>
		<br>
		<div class="block">
			<span class="demonstration">默认</span>
			<el-slider v-model="value11"></el-slider>
		</div>
		<div class="block">
			<span class="demonstration">自定义初始值</span>
			<el-slider v-model="value21"></el-slider>
		</div>
		<div class="block">
			<span class="demonstration">隐藏 Tooltip</span>
			<el-slider v-model="value31" :show-tooltip="false"></el-slider>
		</div>
		<div class="block">
			<span class="demonstration">格式化 Tooltip</span>
			<el-slider v-model="value41" :format-tooltip="formatTooltip"></el-slider>
		</div>
		<div class="block">
			<span class="demonstration">禁用</span>
			<el-slider v-model="value51" disabled></el-slider>
		</div>
		<el-time-picker v-model="value01" :picker-options="{
				selectableRange: '18:30:00 - 20:30:00'
				}" placeholder="任意时间点">
		</el-time-picker>
		<el-time-picker arrow-control v-model="value02" :picker-options="{
				selectableRange: '18:30:00 - 20:30:00'
				}" placeholder="任意时间点">
		</el-time-picker>
		<div class="block">
			<span class="demonstration">带快捷选项</span>
			<el-date-picker v-model="value002" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions11">
			</el-date-picker>
		</div>
		<div class="block">
			<span class="demonstration">无默认值</span>
			<el-color-picker v-model="color2"></el-color-picker>
		</div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<el-row>
			<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
			<div>
				<el-button-group>
					<el-button icon="el-icon-minus" @click="decrease"></el-button>
					<el-button icon="el-icon-plus" @click="increase"></el-button>
				</el-button-group>
			</div>
		</el-row>
		<el-tree :data="data111" :props="defaultProps" accordion @node-click="handleNodeClick">
		</el-tree>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import Heart from "@/components/Heart/Heart.vue"
	import Star from "@/components/Star/Star.vue"
	export default {
		// name: 'Home',
		components: {
			HelloWorld,
			Heart,
			Star
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			sendmsg(e) {
				console.log("Hiworld传输的参数", e)
			},
			statechange(e) {
				console.log("更改服务器点赞状态！state:", e.state)
			},
			starchange(e) {
				console.log("更改服务器评星状态！state:", e.starnum)
			},
			load() {
				if (this.count < 1000)
					this.count += 2
			},
			formatTooltip(val) {
				return val / 100;
			},
			onSubmit() {
				console.log('submit!');
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			increase() {
				this.percentage += 10;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 10;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			}

		},
		data() {
			return {
				data111: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},

				percentage: 10,
				colors: [{
						color: '#f56c6c',
						percentage: 20
					},
					{
						color: '#e6a23c',
						percentage: 40
					},
					{
						color: '#5cb87a',
						percentage: 60
					},
					{
						color: '#1989fa',
						percentage: 80
					},
					{
						color: '#6f7ad3',
						percentage: 100
					}
				],
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				filterMethod(query, item) {
					return item.pinyin.indexOf(query) > -1;
				},
				color1: '#409EFF',
				color2: null,
				pickerOptions11: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value002: '',
				value01: new Date(2016, 9, 10, 18, 40),
				value02: new Date(2016, 9, 10, 18, 40),
				value11: 0,
				value21: 50,
				value31: 36,
				value41: 48,
				value51: 42,
				options1: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '组件',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],
				checkList: ['选中且禁用', '复选框 A'],
				radio: '1',
				count: 0,
				url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
				srcList: [
					'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
				],
				urls: [
					'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
					'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
					'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
					'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
					'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
				],
				img: [require("../components/Heart/img/1.png"), require("../components/Heart/img/2.png")],
				activeName: '1',
				heartstate: false,
				star: 2,
				input: "",
				input2: "",
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				value2: true,
				value3: "",
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				}
			}
		}
	}
</script>
<style>
	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
