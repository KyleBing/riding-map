// note 字段中，使用 `|` 来作为 html 中的换行符

const LINES = [
    {
        index: 1,
        name: '金刚纂路',
        area: '南部山区',
        note: '金刚纂路是一条比较曲折的山路，平坦，注意拐弯不可见的地方鸣笛示意',
        roadType: '柏油路',
        months: '春，夏，秋',
        videoLink: 'https://www.bilibili.com/video/BV1dB4y1M7fc/',
        paths: [
            {position: [117.111285, 36.658996], name: '奥体西', note: ''},
            {position: [117.119066, 36.647191], name: '龙洞立交桥', note: ''},
            {position: [117.136836, 36.646152], name: '龙洞隧道', note: ''},
            {position: [117.166971, 36.647804], name: '旅游路', note: ''},
            {position: [117.177737, 36.639391], name: '港九路', note: ''},
            {position: [117.178289, 36.623558], name: '滩九线', note: ''},
            {position: [117.179607, 36.576843], name: '金刚纂路开始', note: ''},
            {position: [117.1682, 36.547592], name: '南山牧场', note: '这段路最高的地方，峰顶'},
            {position: [117.164123, 36.529662], name: '潘洪路起点', note: '另一条不错路线的开始'},
            {position: [117.166935, 36.515995], name: '村庄', note: '路边很多卖水果的，|很多采摘的地方，|5-6 月份有樱桃，|之后有杏什么的'},
            {position: [117.152763, 36.505393], name: '金刚纂路结束', note: '小桥'},
        ]
    },
    {
        index: 2,
        name: '潘洪路',
        area: '南部山区',
        note: '上面的路会比较险，落差比较大',
        roadType: '柏油路',
        months: '春，夏，秋',
        videoLink: '',
        paths: [
            {position: [117.164021, 36.529783], name: '潘洪路起点', note: ''},
            {position: [117.155944, 36.531921], name: '村庄', note: ''},
            {position: [117.151137, 36.534041], name: '村庄', note: ''},
            {position: [117.151749, 36.537283], name: '北裕山路', note: ''},
            {position: [117.148525, 36.541463], name: '建议终点', note: '往北是水泥路'},
        ]
    },
    {
        index: 3,
        name: '光华大道',
        area: '华山风景区',
        note: '很平缓的一段路，也能沿途看点风景，两边的树挺好的，途经居民区的时候注意减速',
        roadType: '柏油路',
        months: '春，夏，秋，冬',
        videoLink: 'https://www.bilibili.com/video/BV1oL411F7Fz/',
        paths: [
            {position: [117.075955,36.718342], name: '起点', note: ''},
            {position: [117.089677,36.733301], name: '旁边山坡不错', note: ''},
            {position: [117.087709,36.738589], name: '途经点', note: ''},
            {position: [117.078358,36.739405], name: '途经点', note: ''},
            {position: [117.065656,36.716442], name: '途经点', note: ''},
            {position: [117.06926,36.71722], name: '景区南门', note: ''},
            {position: [117.074283,36.718502], name: '终点', note: ''},
        ]
    },
    {
        index: 4,
        name: '黄河乡道',
        area: '黄河',
        note: '路两边是紫叶李。\n春天的时候开白花。\n夏末的时候，树下会有长草，很棒，还能看到黄河堤坝',
        roadType: '柏油路',
        months: '春，夏，秋',
        videoLink: '',
        paths: [
            {position: [117.039897,36.746698], name: '起点', note: ''},
            {position: [117.08462,36.774927], name: '付家钓鱼', note: ''},
            {position: [117.10125,36.782954], name: '途经点', note: ''},
            {position: [117.123534,36.798376], name: '途经点', note: ''},
            {position: [117.151922,36.835841], name: '途经点', note: ''},
            {position: [117.171894,36.862967], name: '途经点', note: ''},
            {position: [117.18833,36.90988], name: '终点', note: '可以接着往北走'},
        ]
    },
    {
        index: 5,
        name: '黄河大堤附近',
        area: '黄河',
        note: '春天的时候特别好看，两边的紫叶李都开花了，白色的一片，加上左边的蓝色小湖面，甚是好看。\n如果人多，会很堵，可以走绝北路，相对车少点，但路不太好走。',
        roadType: '柏油路',
        months: '春',
        videoLink: '',
        paths: [
            {position: [116.867337,36.647036], name: '起点', note: ''},
            {position: [116.836749,36.66289], name: '途经点', note: ''},
            {position: [116.828134,36.661488], name: '途经点', note: ''},
            {position: [116.825452,36.674233], name: '美景开始', note: '从此处沿这个小湖走，相当好看，|春天的时候两边都是开花的紫叶李'},
            {position: [116.831063,36.676478], name: '相当好看', note: ''},
            {position: [116.805217,36.698194], name: '', note: ''},
            {"name":"不错","position":[116.820142,36.715946],"note":""},
            {"name":"终点","position":[116.843684,36.721588],"note":""},
        ]
    },
    {
        index: 6,
        name: '经十路',
        area: '济南市',
        note: '济南摩托车友最喜欢的一条路，辅路好走',
        roadType: '柏油路',
        months: '春、夏、秋、冬',
        videoLink: 'https://www.bilibili.com/video/BV1u34y1X7oD/',
        paths: [
            {position: [117.52971,36.674825], name: '章丘区', note: ''},
            {position: [117.451066,36.670276], name: '圣井立交', note: ''},
            {position: [117.292493,36.665083], name: '孙村立交', note: ''},
            {position: [117.254167,36.665506], name: '经十东路', note: ''},
            {position: [117.226492,36.670729], name: '港西立交', note: ''},
            {position: [117.209116,36.673922], name: '邢村立交', note: ''},
            {position: [117.19562,36.67307], name: '融创茂', note: ''},
            {position: [117.146845,36.662953], name: '汉峪金谷', note: ''},
            {position: [117.120165,36.660012], name: '奥体中心', note: ''},
            {position: [117.100743,36.657516], name: '万象城', note: ''},
            {position: [117.071582,36.651508], name: '燕山立交', note: ''},
            {position: [116.997166,36.648618], name: '八一立交', note: '建议走中间路，|走辅路还需要转两个弯'},
            {position: [116.933255,36.651579], name: '腊山立交', note: ''},
            {position: [116.889495,36.65012], name: '济西立交桥', note: ''},
            {position: [116.874072,36.647787], name: '经十西路', note: ''},
            {position: [116.842528,36.638568], name: '湿地公园', note: ''},
            {position: [116.758929,36.5676874], name: '长清区', note: ''},
        ]
    },
    {
        index: 7,
        name: '旅游路',
        area: '济南市',
        note: '旅游路周边全是树，很不错，路过千佛山',
        roadType: '柏油路',
        months: '春、夏、秋、冬',
        videoLink: '',
        paths: [
            {"name":"旅游路","position":[117.225994,36.645441],"note":"起点"},
            {"name":"龙洞隧道","position":[117.133162,36.64706],"note":""},
            {"name":"龙洞立交","position":[117.119834,36.648302],"note":""},
            {"name":"转山隧道","position":[117.110699,36.645965],"note":""},
            {"name":"旅游路","position":[117.081108,36.638478],"note":""},
            {"name":"开元隧道","position":[117.061617,36.635028],"note":""},
            {"name":"千佛山","position":[117.040909,36.634938],"note":""},
            {"name":"终点","position":[117.028123,36.617744],"note":""}
        ]
    },
    {
        index: 8,
        name: '彩西路',
        area: '济南市',
        note: '折返。\n春末夏初，漂亮，骑起来特别舒服，有景，有风，有山',
        roadType: '柏油路',
        months: '春、夏、秋、冬',
        videoLink: 'https://www.bilibili.com/video/BV1Mv4y1K7Zw/',
        paths: [
            {"name":"从旅游路过来","position":[117.158603,36.64788],"note":""},
            {"name":"来的路比较爽","position":[117.202932,36.644186],"note":"但大中午的经常会有洒水车"},
            {"name":"这个小弯也挺爽","position":[117.242559,36.646157],"note":""},
            {"name":"学校驻地，减速","position":[117.270259,36.637054],"note":""},
            {"name":"彩西路开始","position":[117.283779,36.635365],"note":""},
            {"name":"桥","position":[117.295869,36.629558],"note":"还挺好看的"},
            {"name":"两边树挺多","position":[117.318974,36.61834],"note":""},
            {"name":"高速岔路","position":[117.325319, 36.615822],"note":""},
            {"name":"桥","position":[117.325907, 36.613022],"note":""},
            {"name":"","position":[117.326145, 36.611868],"note":""},
            {"name":"村庄","position":[117.328097, 36.604147],"note":""},
            {"name":"湖","position":[117.327177, 36.584645],"note":""},
            {"name":"村庄","position":[117.308784,36.559264],"note":""},
            {"name":"盘山路","position":[117.290883,36.554784],"note":""},
            {"name":"打卡聚集地","position":[117.283594,36.554013],"note":""},
            {"name":"烂路开始","position":[117.277541,36.553458],"note":"建议从此折返。|如果往下，全是烂路，直到山底。|走过一次，不想再走一次。"},
        ]
    },
    {
        index: 9,
        name: '七星台',
        area: '济南市',
        note: '市区 - 七星台 - 雪野湖 - 章丘 - 市区',
        roadType: '柏油路',
        months: '春、夏、秋、冬',
        videoLink: '',
        paths: [
            {"name": "奥体", "position": [117.120755, 36.659701], "note": ""},
            {"name": "港西立交", "position": [117.224244, 36.670987], "note": ""},
            {"name": "港西路", "position": [117.225822, 36.655722], "note": ""},
            {"name": "西营", "position": [117.218163, 36.506025], "note": ""},
            // {"name": "山路开头", "position": [117.289154, 36.502976], "note": ""},
            {"name": "山路开头", "position": [117.292938, 36.504781], "note": ""},
            {"name": "山路", "position": [117.302406, 36.501923], "note": ""},
            {"name": "七星台", "position": [117.313996, 36.489861], "note": ""},
            {"name": "317省道", "position": [117.398972, 36.489957], "note": "这附近的路相当舒服"},
            {"name": "", "position": [117.43586, 36.499098], "note": ""},
            {"name": "野生动物园", "position": [117.470735, 36.618999], "note": ""},
            {"name": "圣井立交", "position": [117.461739, 36.67054], "note": ""},
            {"name": "经十东路", "position": [117.420042, 36.67136], "note": ""},
            {"name": "奥体", "position": [117.121517, 36.659886], "note": ""},
        ]
    },
    {
        index: 10,
        name: '卧虎山水库',
        area: '济南市',
        note: '吹吹风，拍拍视频很不错',
        roadType: '柏油路',
        months: '春、夏、秋、冬',
        videoLink: '',
        paths: [
            {"name":"起点","position":[117.01983,36.486121],"note":""},
            {"name":"途经点","position":[116.999312,36.479234],"note":""},
            {"name":"坝","position":[116.964913,36.490972],"note":""},
            {"name":"推荐点开始","position":[116.995164,36.491397],"note":"可以看到南边一片湖面和南边的山峦"},
            {"name":"拍照，吹风","position":[116.997237,36.491178],"note":"拍个视频拍个照什么的很不错"},
            {"name":"结束","position":[117.017465,36.492657],"note":""},
            {"name":"返程","position":[117.01812,36.493474],"note":""},
        ]
    },
    {
        index: 11,
        name: '雪野湖',
        area: '济南市',
        note: '赏景，吹风，露营休息，周边很多农家乐，都在向你招手',
        roadType: '柏油路，有点起伏，乐趣',
        months: '春、夏、秋、冬',
        videoLink: '',
        paths: [
            {"name":"雪野湖","position":[117.561748,36.449293],"note":""},
            {"name":"吹风，坐会","position":[117.56749,36.449967],"note":""},
            {"name":"你就走","position":[117.571235,36.453191],"note":""},
            {"name":"一直走","position":[117.578628,36.453742],"note":""},
            {"name":"接着走","position":[117.589681,36.444701],"note":""},
            {"name":"这里也可以坐会","position":[117.596865,36.403837],"note":""},
            {"name":"结束","position":[117.578484,36.400953],"note":"返程"},
        ]
    },
]
const COLORS = {
    green  : "#4CD964",
    cyan   : "#5AC8FA",
    blue   : "#007AFF",
    purple : "#5856D6",
    magenta: "#FF2D70",
    red    : "#FF3B30",
    orange : "#FF9500",
    yellow : "#FFCC00",
    gray   : "#8E8E93",
}
export default {
    COLORS, LINES
}
