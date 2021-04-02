var myChart = echarts.init(document.getElementById('map'));
// 市区坐标
var geoCoordMap = {
    "响水县": [119.70985, 34.20513],
    "滨海县": [119.95058, 34.05972],
    "大丰区": [120.60594, 33.19893],
    "东台市": [120.60376, 32.85078],
    "射阳县": [120.26043, 33.77636],
    "亭湖区": [120.2553, 33.38893],
    "盐都区": [119.95448, 33.30732],
    "建湖县": [119.79852, 33.47241],
    "阜宁县": [119.70175, 33.78228],
};
var rawData = [
    ["响水县", 100000, 100000, 300000],
    ["滨海县", 100000, 130000, 300000],
    ["大丰区", 100000, 160000, 300000],
    ["东台市", 100000, 190000, 300000],
    ["射阳县", 100000, 220000, 300000],
    ["亭湖区", 100000, 250000, 300000],
    ["盐都区", 100000, 280000, 300000],
    ["建湖县", 100000, 300000, 300000],
    ["阜宁县", 100000, 300000, 300000],
];

function makeMapData(rawData) {
    var mapData = [];
    for (var i = 0; i < rawData.length; i++) {
        var geoCoord = geoCoordMap[rawData[i][0]];
        if (geoCoord) {
            mapData.push({
                name: rawData[i][0],
                value: geoCoord.concat(rawData[i].slice(1))
            });

        }
    }
    return mapData;
};

function makeMapDataNew(rawData) {
    var mapData = [];
    for (var i = 0; i < rawData.length; i++) {
        mapData.push({
            name: rawData[i][0],
            value: rawData[i][1] + rawData[i][2] + rawData[i][3],
            // xm:rawData[i][1],
            // jd: rawData[i][2],
            // other: rawData[i][3],
        });
    }
    return mapData;
}

console.log(makeMapData(rawData))

option = {
    animation: false,
    // 地图背景颜色
    // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
    //     offset: 0,
    //     color: '#fff'
    // }, {
    //     offset: 1,
    //     color: '#fff'
    // }]),
    backgroundColor: '#fff',
    visualMap: {
        type: 'continuous',
        min: 100000,
        max: 300000,
        text: ['最大值', '最小值'],
        //是否显示拖拽用的手柄
        calculable: true,
        // /拖拽时，是否实时更新
        realtime: true,
        dimension: 3,
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered'],
        },
        outOfRange: {
            color: ['#121122', 'rgba(3,4,5,0.4)', '#FFFFFF'],
        }
    },
    // tooltip: {
    //     trigger: 'axis'
    // },
    // geo: {
    //     map: 'yancheng',
    //     // silent: true,
    //     roam: true,
    //     zoom: 1.3, // 地图初始大小
    //     center: [120.139998, 33.477631], // 初始中心位置
    //     label: {
    //         emphasis: {
    //             show: false,
    //             areaColor: '#eee'
    //         }
    //     },
    //     // 地区块儿颜色
    //     itemStyle: {
    //         normal: {
    //             areaColor: 'rgb(31,61,87)',
    //             borderColor: '#fff'
    //         },
    //         emphasis: {
    //             areaColor: 'gray'
    //         }
    //     }
    // },
    series: [{
        type: 'map',
        // coordinateSystem: 'geo',
        mapType: 'yancheng', // 自定义扩展图表类型
        //data: [{name: "东台", value: [119.70985, 34.20513,10,20,99]}],
        data: makeMapData(rawData),

        // symbolSize: 10,
        // symbol: 'circle',
        // symbolRotate: 35,
        label: {

            show: true
        },
        itemStyle: {

            normal: {
                color: '#FFFFFF',
                label: {
                    show: true,
                    formatter: function (param) {
                        var name = param.name + "";
                        var value = param.data.value + "";
                        return '\n\n\n\n\n{sty1|' + name + '}\n小麦：' + value.split(",")[2] +
                            '吨\n水稻：' + value.split(",")[3] +
                            '吨\n其他：' + value.split(",")[4] + '吨';
                    },
                    rich: {
                        term: {},
                        sty1: {
                            align: 'center',
                            fontSize: 18,
                            textBorderWidth: 0,
                            color: '#fff'
                        }
                    }

                }
            },
            emphasis: {
                areaColor: '#999',
            },
        },
        emphasis: {
            label: {
                show: true
            }
        }
    }]
};

// 缩放和拖拽
function throttle(fn, delay, debounce) {

    var currCall;
    var lastCall = 0;
    var lastExec = 0;
    var timer = null;
    var diff;
    var scope;
    var args;

    delay = delay || 0;

    function exec() {
        lastExec = (new Date()).getTime();
        timer = null;
        fn.apply(scope, args || []);
    }

    var cb = function () {
        currCall = (new Date()).getTime();
        scope = this;
        args = arguments;
        diff = currCall - (debounce ? lastCall : lastExec) - delay;

        clearTimeout(timer);

        if (debounce) {
            timer = setTimeout(exec, delay);
        } else {
            if (diff >= 0) {
                exec();
            } else {
                timer = setTimeout(exec, -diff);
            }
        }

        lastCall = currCall;
    };

    return cb;
}

myChart.setOption(option);