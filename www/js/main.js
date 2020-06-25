
window.onload=function(){
    banner();
    Toptab();
}


function banner() {
    var oBtnLeft = document.querySelector('.banner .prev');
    var oBtnRight = document.querySelector('.banner .next');
    var aImgs = document.querySelectorAll('.swiper img');
    var aLi = document.querySelectorAll('.banner .swiper .dots i');
    var index = 0;
    oBtnRight.onclick = function () {
        clearInterval(timer);
        aImgs[index].className = '';
        aLi[index].className = '';
        index++;
        if (index >= aImgs.length) {
            index = 0;
        }
        aImgs[index].className = 'on';
        aLi[index].className = 'active';
        autotoright();
    }
    oBtnLeft.onclick = function () {
        clearInterval(timer);
        aImgs[index].className = '';
        aLi[index].className = '';
        index--;
        if (index < 0) {
            index = aImgs.length - 1;
        }
        aImgs[index].className = 'on';
        aLi[index].className = 'active';
        autotoright();
    }
    for (var i = 0; i <= 2; i++) {
        aLi[i].num = i;
        aLi[i].onmouseenter = function () {
            for (var j = 0; j <= 2; j++) {
                aLi[j].className = '';
                aImgs[j].className = '';
            }
            this.className = 'active';
            aImgs[this.num].className = 'on';
            index = this.num;  //让下一张播放的图片为焦点选择的图片的下一张，
            // 没有这一句那么每次点击下一张播放会从第一张开始
        }
    }
    var timer = null;
    function autotoright() {
        timer = setInterval(function () {
            aImgs[index].className = '';
            aLi[index].className = '';
            index++;
            if (index >= aImgs.length) {
                index = 0;
            }
            aImgs[index].className = 'on';
            aLi[index].className = 'active';
        }, 5000);
    }
    autotoright();
}

function Toptab(){
    //获取折叠搜索框operation
    var Toptab=document.getElementsByClassName("top_flex_search")[0];
    //获取下面搜索框
    var TopOpera=document.getElementsByClassName("operation")[0];
    //获取下面搜索框相对窗口的高度
    
    window.onscroll=function(ev){
        var ev=ev||window.event;
        var TopOpera_top=TopOpera.getBoundingClientRect().top;
        if(TopOpera_top<=50){
            Toptab.style.display='block';
            TopOpera.style.visibility='hidden';
        }else{
            Toptab.style.display='none';
            TopOpera.style.visibility='visible';
        }
    }
}	