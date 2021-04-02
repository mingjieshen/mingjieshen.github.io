var myChart = echarts.init(document.getElementById('map'));
// 市区坐标
var geoCoordMap = {
    "响水": [119.70985, 34.20513],
    "滨海": [119.95058, 34.05972],
    "大丰": [120.60594, 33.19893],
    "东台": [120.60376, 32.85078],
    "射阳": [120.26043, 33.77636],
    "亭湖": [120.2553, 33.38893],
    "盐都": [119.95448, 33.30732],
    "建湖": [119.79852, 33.47241],
    "阜宁县": [119.70175, 33.78228],
};
var rawData = [
    ["响水", 10, 20, 50],
    ["滨海", 10, 20, 100],
    ["大丰", 10, 20, 30],
    ["东台", 10, 20, 30],
    ["射阳", 10, 20, 30],
    ["亭湖", 10, 20, 30],
    ["盐都", 10, 20, 30],
    ["建湖", 10, 20, 30],
    ["阜宁县", 10, 20, 30]
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
console.log(makeMapData(rawData))
option = {
    animation: false,
    // 地图背景颜色
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
        offset: 0,
        color: '#4b5769'
    }, {
        offset: 1,
        color: '#404a59'
    }]),

    geo: {
        map: '盐城',
        // silent: true,
        roam: true,
        zoom: 1.155, // 地图初始大小
        center: [120.139998, 33.477631], // 初始中心位置
        label: {
            emphasis: {
                show: false,
                areaColor: '#eee'
            }
        },
        // 地区块儿颜色
        itemStyle: {
            normal: {
                areaColor: '#55C3FC',
                borderColor: '#fff'
            },
            emphasis: {
                areaColor: '#21AEF8'
            }
        }
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        //data: [{name: "东台", value: [119.70985, 34.20513,10,20,99]}],
        data: makeMapData(rawData),
        encode: {
            value: 2
        },
        symbolSize: 10,
        symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
        symbolRotate: 35,
        label: {
            formatter: '{b}',
            position: 'right',
            show: true
        },
        itemStyle: {
            color: '#F06C00',
            normal: {
                label: {
                    show: true,
                    //formatter: '\n\n\n\n\n\n{b}\n小麦：10000\n水稻：20000\n其他：9999',
                    formatter: function(param){
                        var name= param.name+"";
                        var value=param.value+"";
                        return '\n\n\n\n\n{sty1|'+name+'}\n小麦：'+value.split(",")[2]+
                        '\n水稻：'+value.split(",")[3]+
                        '\n其他：'+value.split(",")[4];
                    },
                    rich:{
                        sty1:{align:'center'}
                    }

                }
            },
            emphasis: { label: { show: true } }
        },
        emphasis: {
            label: {
                show: true
            }
        }
    }]
};

//柱状图配置
function renderEachCity() {
    var option = {
        xAxis: [],
        yAxis: [],
        grid: [],
        series: []
    };
    // var inflationStartIdx = 14;
    // var inflationYearCount = 3;
    // var inflationYearStart = '2006';
    // var xAxisCategory = [];
    // for (var i = 0; i < inflationYearCount; i++) {
    //     xAxisCategory.push((+inflationYearStart + i) + '');
    // }

    echarts.util.each(rawData, function (dataItem, idx) {
        var geoCoord = geoCoordMap[dataItem[0]];
        var coord = myChart.convertToPixel('geo', geoCoord);
        // var boundL = -12.782788213627585;
        // var boundR = 35.92763028872384;
        // var boundT = 32.22854555899493;
        // var boundB = 95.18817097360194;
        // if (!coord ||
        //     geoCoord[0] < boundL ||
        //     geoCoord[0] > boundR ||
        //     geoCoord[1] > boundB ||
        //     geoCoord[1] < boundT
        // ) {
        //     return;
        // }
        idx += '';

        inflationData = [30, 50, 20];
        // for (var k = 0; k < inflationYearCount; k++) {
        //     inflationData.push(dataItem[inflationStartIdx + k]);
        // }

        //设置柱状图x轴
        option.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem[0],
            // nameStyle: {
            //     color: 'red',
            //     fontSize: 12
            // },
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#666'
                }
            },
            // data: xAxisCategory,
            data: ["数据A", "数据B", "数据C"],
            z: 100

        });
        //设置柱状图y轴
        option.yAxis.push({
            id: idx,
            gridId: idx,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#1C70B6'
                }
            },
            z: 100
        });
        option.grid.push({
            id: idx,
            width: 30,
            height: 40,
            left: coord[0] - 15,
            top: coord[1] - 15,
            z: 100
        });
        option.series.push({
            id: idx,
            type: 'bar',
            xAxisId: idx,
            yAxisId: idx,
            barGap: 0,
            barCategoryGap: 0,
            // data: inflationData,
            data: inflationData,
            z: 100,
            itemStyle: {
                normal: {
                    color: function (params) {
                        // 柱状图每根柱子颜色
                        var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                        return colorList[params.dataIndex];
                    }
                }
            }
        });
    });
    console.time('a');
    myChart.setOption(option);
    console.timeEnd('a');
}

//setTimeout(renderEachCity, 0);
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

// var throttledRenderEachCity = throttle(renderEachCity, 0);
// myChart.on('geoRoam', throttledRenderEachCity);
myChart.setOption(option);


// 点击显示柱状图
myChart.on('click', function (e) {
    console.log(e)
    // console.log(params);
    if (e.componentSubType == "bar") {
        // 先清除所有柱状图
        $('.tongJiTu').remove();
        // 创建遮挡层
        creatWrap();
        // 创建柱状图容器
        var divObj = document.createElement('div');
        $(divObj).addClass('tongJiTu');
        divObj.id = 'zhuzhuang';
        var divX = getMousePos()['x'];
        var divY = getMousePos()['y'];
        $(divObj).css({
            'width': 250,
            'height': 180,
            'border': '1px solid #ccc',
            'position': 'absolute',
            'top': divY,
            'left': divX
        }).appendTo('.wrap');
        //$(divObj).append("<p>Text.</p>");
        // 创建柱状图
        zhuZhuangTu();
        // 点击遮挡层消失
        clearWrap('.zhedang');
    }
    return;
});
// 获取横纵坐标
function getMousePos(e) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    // console.log(x,y)
    return { 'x': x, 'y': y };
}
// 生成柱状图
function zhuZhuangTu() {
    var zhuzhuang = echarts.init(document.getElementById('zhuzhuang'));
    option = {
        backgroundColor: 'rgba(255,255,255,.3)',
        legend: {
            data: ['数据A', '数据B', '数据C']
        },
        xAxis: [
            {

                type: 'category',
                data: ['数据A', '数据B', '数据C']
            }
        ],
        yAxis: [
            {
                splitLine: {
                    show: false
                },
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                            return colorList[params.dataIndex];
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    }
                },
                data: [10, 20, 30]
            }
        ]
    };
    zhuzhuang.setOption(option);
}
// 生成遮挡层
function creatWrap() {
    var zheDang = document.createElement('div');
    $(zheDang).addClass('zhedang').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.2)'
    }).appendTo('.wrap');
}
// 去掉遮挡层
function clearWrap(id) {
    $(id).click(function (e) {
        // console.log(this);
        this.remove();
        $('.tongJiTu').remove();
        return false;
    });
}