$(function(){
    if (location.href.includes('index')){
        document.querySelector('button[name=index]').style.borderBottom = '3px solid #fff'
        document.querySelector('button[name=index]').style.color = '#fff'
    }else if(location.href.includes('demo')){
        document.querySelector('button[name=demo]').style.borderBottom = '3px solid #fff'
        document.querySelector('button[name=demo]').style.color = '#fff'
    }else if(location.href.includes('contact')){
        document.querySelector('button[name=contact]').style.borderBottom = '3px solid #fff'
        document.querySelector('button[name=contact]').style.color = '#fff'
    }else if(location.href.includes('document')){
        document.querySelector('button[name=documentation]').style.borderBottom = '3px solid #fff'
        document.querySelector('button[name=documentation]').style.color = '#fff'
    }
});
function navBarClick(event){
    let name = event.name
    if (name!=='index')
        location.href="./"+name+".html";
    else location.href = './index.html';
}