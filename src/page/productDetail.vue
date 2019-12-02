<template>
  <div class="page-detail">
    <!-- 面包屑组件 -->
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>

    <!-- 页面详情 -->
    <el-row class="m-sum-card">
      <!-- 左侧详情 -->
      <el-col :span="16">
        <dl>
          <dt>
            <h1>{{ detailsData.title }}</h1>
            <el-rate
              v-model="detailsData.score"
              disabled
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <span>{{ detailsData.score }}分人均￥{{ detailsData.avgPrice }}</span>
          </dt>
          <dd class="contact">
            <p>地址：{{ detailsData.address }}</p>
            <p class="phone">电话：{{ detailsData.phone }}</p>
            <p>营业时间：{{ detailsData.businessTime }}</p>
          </dd>
          <dd>
            <ul>
              <li v-for="(item, index) in detailsData.service" :key="index">
                <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" />
                <p>{{ item }}</p>
              </li>
            </ul>
          </dd>
        </dl>
      </el-col>

      <!-- 右侧图片 -->
      <el-col :span="8">
        <div class="d-right">
          <div class="big">
            <img :src="detailsData.imgUrl" />
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 商家团购及优惠 + 推荐菜 + 网友点评-->
    <el-row class="m-detail-list">
      <!-- 左侧 - 列表 -->
      <el-col :span="19">
        <!-- 商家团购及优惠 -->
        <div>
          <h3 class="m-title">商家团购及优惠</h3>
          <div class="deal-need-login">
            <img
              src="https://p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
              alt="图片"
            />
            <span>请登录后查看详细团购优惠</span>
            <el-button type="primary">
              <a>立即登录</a>
            </el-button>
          </div>
        </div>

        <!-- 推荐菜 -->
        <div class="m-detail-item">
          <h3 class="m-title">推荐菜</h3>
            <div class="list">
              <!-- 产品图片 -->
              <ul class="product">
                <li v-for="item in recommendList" :key="item.id">
                  <img :src="item.imgUrl" alt="美食">
                  <p>{{ item.name }}<span>￥{{ item.price }}</span></p>
                </li>
              </ul>

              <!-- 菜单列表 -->
              <div class="menu">
                <span v-for="(item, index) in detailsData.recommend" :key="index">{{ item }}</span>
              </div>
          </div>
          
        </div>

        <div class="m-review-box">
          <h3 class="m-title">{{ detailsData.commentNum }}条网友点评</h3>
          <div class="review">
            <!-- 商品评论数 -->
            <div class="review-list">
              <ul>
                <li v-for="(item, index) in reviewList" :key="index">{{ item.dishes }}({{ item.num }})</li>
              </ul>
            </div>
            <!--  品评论列表 -->
            <div class="comment" v-for="(item, index) in detailsData.comment" :key="index">
              <div class="head">
                <img :src="item.image">
              </div>
              <div class="info">
                <p class="name">{{ item.username }}</p>
                <p class="score">
                  <el-rate
                    v-model="item.rate"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                  <span>2019年10月11日</span>
                </p>
                <p class="content">
                  <span>{{ item.evalaute }}</span>
                </p>
                <div class="score-img">
                  <ul>
                    <li v-if="i < 4 ? true : false" v-for="(v, i) in item.pics" :key="i"><img :src="v" alt="评价图片"></li>
                  </ul>
                </div>
                <p class="praise">
                  <span><i class="el-icon-thumb"></i>赞</span>
                </p>
              </div>
            </div>
            <!-- 分页 -->
            <div class="pagination">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
                @current-change	="click">
              </el-pagination>
            </div>
          </div>
        </div>
      </el-col>
      <!-- 右侧 - 猜你喜欢 -->
      <el-col :span="5">
        <recommend :list="recommendData" />
      </el-col>
    </el-row>

    <!-- 附近商家 -->
    <el-row></el-row>

    <!-- 底部导航 -->
    <nav class="botton-nav">
      <div class="title">美团导航</div>
      <dl class="b-n-content">
        <div class="b-n-classification">
          <dt class="b-n-subtitle">热门分类</dt>
          <div class="b-n-sublist">
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20168/"
                title="直通车"
                target="_blank"
              >直通车</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c301/"
                title="展览馆"
                target="_blank"
              >展览馆</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20837/"
                title="景点套餐"
                target="_blank"
              >景点套餐</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c299/"
                title="动植物园"
                target="_blank"
              >动植物园</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c307/"
                title="滑雪"
                target="_blank"
              >滑雪</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c21364/"
                title="定制游"
                target="_blank"
              >定制游</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20970/"
                title="旅游用车"
                target="_blank"
              >旅游用车</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20175/"
                title="景＋酒"
                target="_blank"
              >景＋酒</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c346/"
                title="骑马"
                target="_blank"
              >骑马</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20126/"
                title="短途游"
                target="_blank"
              >短途游</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c309/"
                title="农家乐"
                target="_blank"
              >农家乐</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20245/"
                title="潜水"
                target="_blank"
              >潜水</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c296/"
                title="景点"
                target="_blank"
              >景点</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c308/"
                title="漂流"
                target="_blank"
              >漂流</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20123/"
                title="户外运动"
                target="_blank"
              >户外运动</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c20343/"
                title="一日游"
                target="_blank"
              >一日游</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c302/"
                title="游船"
                target="_blank"
              >游船</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c297/"
                title="主题公园"
                target="_blank"
              >主题公园</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c344/"
                title="攀登运动"
                target="_blank"
              >攀登运动</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://hf.meituan.com/mobile_poi_zhoubianyou/c300/"
                title="海洋馆"
                target="_blank"
              >海洋馆</a>
            </dd>
          </div>
        </div>
        <div class="b-n-classification">
          <dt class="b-n-subtitle">周边热门</dt>
          <div class="b-n-sublist">
            <dd class="b-n-list-item">
              <a
                href="https://feidongxian.meituan.com/mobile_poi_zhoubianyou/c298/"
                title="肥东县水上乐园"
                target="_blank"
              >肥东县水上乐园</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c346/"
                title="巢湖骑马"
                target="_blank"
              >巢湖骑马</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feidongxian.meituan.com/mobile_poi_zhoubianyou/c308/"
                title="肥东县漂流"
                target="_blank"
              >肥东县漂流</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feidongxian.meituan.com/mobile_poi_zhoubianyou/c301/"
                title="肥东县展览馆"
                target="_blank"
              >肥东县展览馆</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feidongxian.meituan.com/mobile_poi_zhoubianyou/c305/"
                title="肥东县真人CS"
                target="_blank"
              >肥东县真人CS</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c20168/"
                title="巢湖直通车"
                target="_blank"
              >巢湖直通车</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c306/"
                title="巢湖单车出租"
                target="_blank"
              >巢湖单车出租</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c20837/"
                title="巢湖景点套餐"
                target="_blank"
              >巢湖景点套餐</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feixixian.meituan.com/mobile_poi_zhoubianyou/c302/"
                title="肥西县游船"
                target="_blank"
              >肥西县游船</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c296/"
                title="巢湖景点"
                target="_blank"
              >巢湖景点</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feixixian.meituan.com/mobile_poi_zhoubianyou/c20970/"
                title="肥西县旅游用车"
                target="_blank"
              >肥西县旅游用车</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feixixian.meituan.com/mobile_poi_zhoubianyou/c303/"
                title="肥西县高空观景"
                target="_blank"
              >肥西县高空观景</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c20123/"
                title="巢湖户外运动"
                target="_blank"
              >巢湖户外运动</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c299/"
                title="巢湖动植物园"
                target="_blank"
              >巢湖动植物园</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c304/"
                title="巢湖温泉"
                target="_blank"
              >巢湖温泉</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c20124/"
                title="巢湖游玩观光"
                target="_blank"
              >巢湖游玩观光</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c20343/"
                title="巢湖一日游"
                target="_blank"
              >巢湖一日游</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://ch.meituan.com/mobile_poi_zhoubianyou/c297/"
                title="巢湖主题公园"
                target="_blank"
              >巢湖主题公园</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feixixian.meituan.com/mobile_poi_zhoubianyou/c345/"
                title="肥西县滑冰"
                target="_blank"
              >肥西县滑冰</a>
            </dd>
            <dd class="b-n-list-item">
              <a
                href="https://feixixian.meituan.com/mobile_poi_zhoubianyou/c300/"
                title="肥西县海洋馆"
                target="_blank"
              >肥西县海洋馆</a>
            </dd>
          </div>
        </div>
        <div class="b-n-classification">
          <dt class="b-n-subtitle">热门商家</dt>
          <div class="b-n-sublist">
            <dd class="b-n-list-item">
              <a href="/meishi/4912643/" title="避风塘（合肥银泰城店）" target="_blank">避风塘（合肥银泰城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/2127791/" title="回味鸭血粉丝汤（中环城店）" target="_blank">回味鸭血粉丝汤（中环城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/52744056/" title="毛记冒菜（天鹅湖万达店）" target="_blank">毛记冒菜（天鹅湖万达店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/6819113/" title="韩宫宴炭火烤肉（天鹅湖银泰店）" target="_blank">韩宫宴炭火烤肉（天鹅湖银泰店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/40236585/" title="熙顺紫菜包饭（工大店）" target="_blank">熙顺紫菜包饭（工大店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/1083200/" title="丽清大别山鹅火锅（开发区店）" target="_blank">丽清大别山鹅火锅（开发区店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/4035873/" title="汉堡王（合肥银泰城店）" target="_blank">汉堡王（合肥银泰城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/3296610/" title="重庆德庄火锅（天鹅湖万达店）" target="_blank">重庆德庄火锅（天鹅湖万达店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/2535361/" title="超港（港澳店）" target="_blank">超港（港澳店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/51524355/" title="江源亭韩国参鸡汤（天鹅湖万达店）" target="_blank">江源亭韩国参鸡汤（天鹅湖万达店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/5663395/" title="瓦泥兔的餐厅之芜湖小吃" target="_blank">瓦泥兔的餐厅之芜湖小吃</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/42437049/" title="忆秦时（新地店）" target="_blank">忆秦时（新地店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/52582771/" title="四川香天下火锅（华润万象城店）" target="_blank">四川香天下火锅（华润万象城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/2480054/" title="天下宴大酒店" target="_blank">天下宴大酒店</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/qinzi/68995244/" title="优家孕妈咪儿童摄影" target="_blank">优家孕妈咪儿童摄影</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/40415125/" title="小辉哥火锅（华润万象城店）" target="_blank">小辉哥火锅（华润万象城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/2551781/" title="虹泥小厨（天鹅湖万达店）" target="_blank">虹泥小厨（天鹅湖万达店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/65122392/" title="厕所串串（中环城店）" target="_blank">厕所串串（中环城店）</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/4685326/" title="鸭汤工坊" target="_blank">鸭汤工坊</a>
            </dd>
            <dd class="b-n-list-item">
              <a href="/meishi/4068151/" title="榴恋沙巴" target="_blank">榴恋沙巴</a>
            </dd>
          </div>
        </div>
      </dl>
    </nav>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Crumbs from "@/components/detail/crumbs.vue";
import Recommend from "@/components/detail/recommend.vue";

export default {
  data() {
    return {
      detailsData: {},
      recommendData: [
        {
          itemId: 2412338,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p1.meituan.net/mogu/890485aaffe19f69dafd77d52b74399253545.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: 2412339,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p1.meituan.net/mogu/605ea10e6b12a9c1cc26edc23909fcd51313876.png@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: 2412340,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl:
            "https://p0.meituan.net/msmerchant/bc34dae2069213750fea5c66c74e6a81134672.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        }
      ],
      recommendList: [
        {
          id:"0001",
          imgUrl: 'https://qcloud.dpfile.com/pc/w-xy5E69LiOxR17aWjstIvnjNnHlg4va3G2QiXJYwgi7qedPpCLqEG2pP_NUZEsVmXKqvF8xz-Pgbz9r8ffpSA.jpg',
          name: '红糖糍耙',
          price: '10'
        },
        {
          id:"0002",
          imgUrl: 'https://p1.meituan.net/bbia/c9bdc4f69dbdd50c561a8a5ae7da471a1546378.jpg@130w_130h_1e_1c',
          name: '四格鸳鸯',
          price: '55'
        },
        {
          id:"0003",
          imgUrl: 'https://p1.meituan.net/bbia/7e40db4910fa88cf2e5a4a853bd53899141053.jpg@130w_130h_1e_1c',
          name: '一米肥牛',
          price: '38'
        },
        {
          id:"0004",
          imgUrl: 'https://p1.meituan.net/bbia/e7c35c7e907d3f30000346f1f198f017133173.jpg@130w_130h_1e_1c',
          name: '雪花肥牛',
          price: '46'
        },
        {
          id:"0005",
          imgUrl: 'https://p1.meituan.net/bbia/66c5a4f4b09fb366f50204321f7efb935730304.jpg@130w_130h_1e_1c',
          name: '极品脆毛肚',
          price: '36'
        },
        {
          id:"0006",
          imgUrl: 'https://p1.meituan.net/bbia/bf4983c3b7234b0ace6cefa5ca925e2c46326.jpg@130w_130h_1e_1c',
          name: '手工虾滑',
          price: '36'
        }
      ],
      reviewList: [{
        dishes: '味道赞',
        num: null
      }, {
        dishes: '环境优雅',
        num: null
      }, {
        dishes: '上菜快',
        num: null
      }, {
        dishes: '菜品健康',
        num: null
      }, {
        dishes: '价格实惠',
        num: null
      }, {
        dishes: '回头客',
        num: null
      }, {
        dishes: '分量足',
        num: null
      }, {
        dishes: '高大上',
        num: null
      }, {
        dishes: '朋友聚餐',
        num: null
      }, {
        dishes: '服务热情',
        num: null
      }, {
        dishes: '小姐姐漂亮',
        num: null
      }]
    };
  },
  created() {
    // 产品列表详情页
    api.getDetail().then(res => {
      console.log(res.data.data);
      this.detailsData = res.data.data;
      this.calculate();
    });
    // 推荐产品列表 图片地址暂失效，先用mock的数据
    // api.getRecommend().then(res => {
    //   console.log(res)
    // this.recommendData = res.data.data
    // })
  },
  methods: {
    calculate() {
      let commentNum = this.detailsData.commentNum;
      let len = this.reviewList.length
      for(var i = 0; i < len; i++){

        if(i == len - 1){
          this.reviewList[i].num = commentNum;
        } else {
          let calcuNum = Math.floor(Math.random() * commentNum)

          commentNum -= calcuNum;
          this.reviewList[i].num = calcuNum;
        }
      }
    },
    click() {
      alert('别点了，效果还没做呢~');
    }
  },
  components: {
    Crumbs,
    Recommend
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/detail/index.scss";
</style>