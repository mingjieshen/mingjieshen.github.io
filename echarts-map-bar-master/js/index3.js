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
        symbolSize: 13,
        symbol: 'emptyCircle',
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
                        return '\n\n\n{sty1|'+name+'}\n加工企业总产能：'+value.split(",")[2];
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

myChart.setOption(option);

myChart.on('click', function (params) {
    if (params.componentSubType === 'scatter') {
    //   console.log(params)
    //   console.log(params.data.value[0])

      var mousePos=GetPostion();
      var selfX=mousePos[0]+20;
        var selfY=mousePos[1]-25;
        $('.modal-dialog')
        .css("position","absolute").css("top",selfY).css("left",selfX)
        
      $('#myModalLabel').text(params.data.name)
      $('#qysl').text('企业数量：'+params.data.value[2])
      $('#cnqk').text('产能情况：'+params.data.value[3])
      $('#myModal').modal('show')

    }
  })


  //获取鼠标位置GetPostion 
  function GetPostion(e) { 
    var x = getX(e); 
    var y = getY(e); 
    return [x,y]
    } 
    function getX(e) { 
    e = e || window.event; 
    return e.pageX || e.clientX + document.body.scrollLeft - document.body.clientLeft 
    } 
    function getY(e) { 
    e = e|| window.event; 
    return e.pageY || e.clientY + document.body.scrollTop - document.body.clientTop 
    } 
    