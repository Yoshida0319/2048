const resultarea=document.getElementById('result')
const it=document.getElementById('aiti')
const ni=document.getElementById('ani')
const sa=document.getElementById('asan')
const yo=document.getElementById('ayon')
const go=document.getElementById('ago')
const rok=document.getElementById('aroku')
const nan=document.getElementById('anana')
const hat=document.getElementById('ahati')
const ky=document.getElementById('akyu')
const zy=document.getElementById('azyu')
const zyuit=document.getElementById('azyuiti')
const zyun=document.getElementById('azyuni')
const zyusa=document.getElementById('azyusan')
const zyuyo=document.getElementById('azyuyon')
const zyug=document.getElementById('azyugo')
const zyurok=document.getElementById('azyuroku')
const aaa=document.getElementById('aa')
const bbb=document.getElementById('bb')
const ccc=document.getElementById('cc')
const ddd=document.getElementById('dd')
const eee=document.getElementById('ee')
const fff=document.getElementById('ff')
const ggg=document.getElementById('gg')
const hhh=document.getElementById('hh')
const iii=document.getElementById('ii')
const jjj=document.getElementById('jj')
const kkk=document.getElementById('kk')
const lll=document.getElementById('ll')
const mmm=document.getElementById('mm')
const nnn=document.getElementById('nn')
const ooo=document.getElementById('oo')
const ppp=document.getElementById('pp')
const butto=document.getElementById('button')
const ikerukana=[it,ni,sa,yo,go,rok,nan,hat,ky,zy,zyuit,zyun,zyusa,zyuyo,zyug,zyurok];
const ikuzo=[aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk,lll,mmm,nnn,ooo,ppp]
var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
randam(a,1);
function inner(a,nannya){
    for (let inn = 0; inn < ikerukana.length; inn++) {
        const element = ikerukana[inn];
        const eleme=ikuzo[inn];
        element.innerText="";
        resultarea.innerText="";
        eleme.style.borderColor='hsl(0,0%,50%)';
        if(a[inn]!==0){
            element.style.color='black';
            element.innerText=a[inn];
        }
        if(a[inn]===0){
            eleme.style.backgroundColor='hsl(0, 0%, 75%)';
        }else if(a[inn]===2){
            eleme.style.backgroundColor='hsl(0, 0%, 83%)';
        }else if(a[inn]===4){
            eleme.style.backgroundColor='hsl(28.6,97%,86.9%)';
        }else if(a[inn]===8){
            eleme.style.backgroundColor='hsl(30, 100%, 50%)';
        }else if(a[inn]===16){
            eleme.style.backgroundColor='hsl(27, 41%, 32%)';
        }else if(a[inn]===32){
            eleme.style.backgroundColor='hsl(64, 61%, 48%)';
        }else if(a[inn]===64){
            eleme.style.backgroundColor='hsl(208, 100%, 38%)';
        }else if(a[inn]===128){
            eleme.style.backgroundColor='hsl(42, 63%, 82%)';
        }else if(a[inn]===256){
            eleme.style.backgroundColor='hsl(189, 100%, 33%)';
        }else if(a[inn]===512){
            eleme.style.backgroundColor='hsl(1, 73%, 61%)';
        }else if(a[inn]===1024){
            eleme.style.backgroundColor='hsl(63, 36%, 71%)';
        }else if(a[inn]===2048){
            eleme.style.backgroundColor='hsl(51,100%,50%)';
        }else if(a[inn]>=4096){
            element.style.fontSize='30px';
            eleme.style.backgroundColor='black';
            element.style.color='white';
            if(a[inn]>=16384){
                element.style.fontSize='25px';
            }
        }
        if(nannya===1){
            resultarea.innerText="Game Over!";
            eleme.style.backgroundColor='hsl(0,0%,85%)';
            element.style.color='hsl(0,0%,75%)';
            eleme.style.borderColor='hsl(0,0%,80%)';
        }
    }
}
butto.onclick=()=>{
    for (let anara = 0; anara < a.length; anara++) {
        a.splice(anara,1,0);
    }
    randam(a,1);
}
document.onkeydown=function(event){
    if(event.key==='ArrowUp' || event.key==='W' || event.key==='w'){
        ueya(a,0,1);
        return;
    }else if(event.key==='ArrowDown' || event.key==='S' || event.key==='s'){
        sitaya(a,0,1);
        return;
    }else if(event.key==='ArrowRight' || event.key==='D' || event.key==='d'){
        migiya(a,0,1);
        return;
    }else if(event.key==='ArrowLeft' || event.key==='A' || event.key==='a'){
        hidariya(a,0,1);
        return;
    }else{
        return;
    }
}
function ueya(a,korena,korekore){
    let yossya=0;
    if(korekore===2){
        if(a[0]===a[4] && a[4]!==0){
            let iyaya=a[0]+a[4];
            kittyae(0,4,iyaya,a);
            yossya++;
        }
        if(a[1]===a[5] && a[5]!==0){
            let iyaya=a[1]+a[5];
            kittyae(1,5,iyaya,a);
            yossya++;
        }
        if(a[2]===a[6] && a[6]!==0){
            let iyaya=a[2]+a[6];
            kittyae(2,6,iyaya,a);
            yossya++;
        }
        if(a[3]===a[7] && a[7]!==0){
            let iyaya=a[3]+a[7];
            kittyae(3,7,iyaya,a);
            yossya++;
        }
        if(a[4]===a[8] && a[8]!==0){
            let iyaya=a[4]+a[8];
            kittyae(4,8,iyaya,a);
            yossya++;
        }
        if(a[5]===a[9] && a[9]!==0){
            let iyaya=a[5]+a[9];
            kittyae(5,9,iyaya,a);
            yossya++;
        }
        if(a[6]===a[10] && a[10]!==0){
            let iyaya=a[6]+a[10];
            kittyae(6,10,iyaya,a);
            yossya++;
        }
        if(a[7]===a[11] && a[11]!==0){
            let iyaya=a[7]+a[11];
            kittyae(7,11,iyaya,a);
            yossya++;
        }
        if(a[8]===a[12] && a[12]!==0){
            let iyaya=a[8]+a[12];
            kittyae(8,12,iyaya,a);
            yossya++;
        }
        if(a[9]===a[13] && a[13]!==0){
            let iyaya=a[9]+a[13];
            kittyae(9,13,iyaya,a);
            yossya++;
        }
        if(a[10]===a[14] && a[14]!==0){
            let iyaya=a[10]+a[14];
            kittyae(10,14,iyaya,a);
            yossya++;
        }
        if(a[11]===a[15] && a[15]!==0){
            let iyaya=a[11]+a[15];
            kittyae(11,15,iyaya,a);
            yossya++;
        }
    }else{
        if(a[0]===0 && a[4]!==0){
            let iyaya=a[0]+a[4];
            kittyae(0,4,iyaya,a);
            yossya++;
        }
        if(a[1]===0 && a[5]!==0){
            let iyaya=a[1]+a[5];
            kittyae(1,5,iyaya,a);
            yossya++;
        }
        if(a[2]===0 && a[6]!==0){
            let iyaya=a[2]+a[6];
            kittyae(2,6,iyaya,a);
            yossya++;
        }
        if(a[3]===0 && a[7]!==0){
            let iyaya=a[3]+a[7];
            kittyae(3,7,iyaya,a);
            yossya++;
        }
        if(a[4]===0 && a[8]!==0){
            let iyaya=a[4]+a[8];
            kittyae(4,8,iyaya,a);
            yossya++;
        }
        if(a[5]===0 && a[9]!==0){
            let iyaya=a[5]+a[9];
            kittyae(5,9,iyaya,a);
            yossya++;
        }
        if(a[6]===0 && a[10]!==0){
            let iyaya=a[6]+a[10];
            kittyae(6,10,iyaya,a);
            yossya++;
        }
        if(a[7]===0 && a[11]!==0){
            let iyaya=a[7]+a[11];
            kittyae(7,11,iyaya,a);
            yossya++;
        }
        if(a[8]===0 && a[12]!==0){
            let iyaya=a[8]+a[12];
            kittyae(8,12,iyaya,a);
            yossya++;
        }
        if(a[9]===0 && a[13]!==0){
            let iyaya=a[9]+a[13];
            kittyae(9,13,iyaya,a);
            yossya++;
        }
        if(a[10]===0 && a[14]!==0){
            let iyaya=a[10]+a[14];
            kittyae(10,14,iyaya,a);
            yossya++;
        }
        if(a[11]===0 && a[15]!==0){
            let iyaya=a[11]+a[15];
            kittyae(11,15,iyaya,a);
            yossya++;
        }
    }
    if(korekore===1){
        if(yossya===0){
            ueya(a,korena,2);
        }else{
            korena++;
            ueya(a,korena,1);
        }
    }else if(korekore===2){
        if(yossya!==0){
            korena++;
        }
        ueya(a,korena,3);
    }else if(korekore===3){
        if(yossya!==0){
            korena++;
        }
        randam(a,korena);
    }
}
function sitaya(a,korena,korekore){
    let yossya=0;
    if(korekore===2){
        if(a[8]===a[12] && a[8]!==0){
            let iyaya=a[8]+a[12];
            kittyae(12,8,iyaya,a);
            yossya++;
        }
        if(a[9]===a[13] && a[9]!==0){
            let iyaya=a[9]+a[13];
            kittyae(13,9,iyaya,a);
            yossya++;
        }
        if(a[10]===a[14] && a[10]!==0){
            let iyaya=a[10]+a[14];
            kittyae(14,10,iyaya,a);
            yossya++;
        }
        if(a[11]===a[15] && a[11]!==0){
            let iyaya=a[11]+a[15];
            kittyae(15,11,iyaya,a);
            yossya++;
        }
        if(a[4]===a[8] && a[4]!==0){
            let iyaya=a[4]+a[8];
            kittyae(8,4,iyaya,a);
            yossya++;
        }
        if(a[5]===a[9] && a[5]!==0){
            let iyaya=a[5]+a[9];
            kittyae(9,5,iyaya,a);
            yossya++;
        }
        if(a[6]===a[10] && a[6]!==0){
            let iyaya=a[6]+a[10];
            kittyae(10,6,iyaya,a);
            yossya++;
        }
        if(a[7]===a[11] && a[7]!==0){
            let iyaya=a[7]+a[11];
            kittyae(11,7,iyaya,a);
            yossya++;
        }
        if(a[0]===a[4] && a[0]!==0){
            let iyaya=a[0]+a[4];
            kittyae(4,0,iyaya,a);
            yossya++;
        }
        if(a[1]===a[5] && a[1]!==0){
            let iyaya=a[1]+a[5];
            kittyae(5,1,iyaya,a);
            yossya++;
        }
        if(a[2]===a[6] && a[2]!==0){
            let iyaya=a[2]+a[6];
            kittyae(6,2,iyaya,a);
            yossya++;
        }
        if(a[3]===a[7] && a[3]!==0){
            let iyaya=a[3]+a[7];
            kittyae(7,3,iyaya,a);
            yossya++;
        }
    }else{
        if(a[12]===0 && a[8]!==0){
            let iyaya=a[8]+a[12];
            kittyae(12,8,iyaya,a);
            yossya++;
        }
        if(a[13]===0 && a[9]!==0){
            let iyaya=a[9]+a[13];
            kittyae(13,9,iyaya,a);
            yossya++;
        }
        if(a[14]===0 && a[10]!==0){
            let iyaya=a[10]+a[14];
            kittyae(14,10,iyaya,a);
            yossya++;
        }
        if(a[15]===0 && a[11]!==0){
            let iyaya=a[11]+a[15];
            kittyae(15,11,iyaya,a);
            yossya++;
        }
        if(a[8]===0 && a[4]!==0){
            let iyaya=a[4]+a[8];
            kittyae(8,4,iyaya,a);
            yossya++;
        }
        if(a[9]===0 && a[5]!==0){
            let iyaya=a[5]+a[9];
            kittyae(9,5,iyaya,a);
            yossya++;
        }
        if(a[10]===0 && a[6]!==0){
            let iyaya=a[6]+a[10];
            kittyae(10,6,iyaya,a);
            yossya++;
        }
        if(a[11]===0 && a[7]!==0){
            let iyaya=a[7]+a[11];
            kittyae(11,7,iyaya,a);
            yossya++;
        }
        if(a[4]===0 && a[0]!==0){
            let iyaya=a[0]+a[4];
            kittyae(4,0,iyaya,a);
            yossya++;
        }
        if(a[5]===0 && a[1]!==0){
            let iyaya=a[1]+a[5];
            kittyae(5,1,iyaya,a);
            yossya++;
        }
        if(a[6]===0 && a[2]!==0){
            let iyaya=a[2]+a[6];
            kittyae(6,2,iyaya,a);
            yossya++;
        }
        if(a[7]===0 && a[3]!==0){
            let iyaya=a[3]+a[7];
            kittyae(7,3,iyaya,a);
            yossya++;
        } 
    }
    if(korekore===1){
        if(yossya===0){
            sitaya(a,korena,2);
        }else{
            korena++;
            sitaya(a,korena,1);
        }
    }else if(korekore===2){
        if(yossya!==0){
            korena++;
        }
        sitaya(a,korena,3);
    }else if(korekore===3){
        if(yossya!==0){
            korena++;
        }
        randam(a,korena);
    }
}
function migiya(a,korena,korekore){
    let yossya=0;
    if(korekore===2){
        if(a[2]===a[3] && a[2]!==0){
            let iyaya=a[2]+a[3];
            kittyae(3,2,iyaya,a);
            yossya++;
        }
        if(a[6]===a[7] && a[6]!==0){
            let iyaya=a[6]+a[7];
            kittyae(7,6,iyaya,a);
            yossya++;
        }
        if(a[10]===a[11] && a[10]!==0){
            let iyaya=a[10]+a[11];
            kittyae(11,10,iyaya,a);
            yossya++;
        }
        if(a[14]===a[15] && a[14]!==0){
            let iyaya=a[14]+a[15];
            kittyae(15,14,iyaya,a);
            yossya++;
        }
        if(a[1]===a[2] && a[1]!==0){
            let iyaya=a[1]+a[2];
            kittyae(2,1,iyaya,a);
            yossya++;
        }
        if(a[5]===a[6] && a[5]!==0){
            let iyaya=a[5]+a[6];
            kittyae(6,5,iyaya,a);
            yossya++;
        }
        if(a[9]===a[10] && a[9]!==0){
            let iyaya=a[9]+a[10];
            kittyae(10,9,iyaya,a);
            yossya++;
        }
        if(a[13]===a[14] && a[13]!==0){
            let iyaya=a[13]+a[14];
            kittyae(14,13,iyaya,a);
            yossya++;
        }
        if(a[0]===a[1] && a[0]!==0){
            let iyaya=a[0]+a[1];
            kittyae(1,0,iyaya,a);
            yossya++;
        }
        if(a[4]===a[5] && a[4]!==0){
            let iyaya=a[4]+a[5];
            kittyae(5,4,iyaya,a);
            yossya++;
        }
        if(a[8]===a[9] && a[8]!==0){
            let iyaya=a[8]+a[9];
            kittyae(9,8,iyaya,a);
            yossya++;
        }
        if(a[12]===a[13] && a[12]!==0){
            let iyaya=a[12]+a[13];
            kittyae(13,12,iyaya,a);
            yossya++;
        }
    }else{
        if(a[3]===0 && a[2]!==0){
            let iyaya=a[2]+a[3];
            kittyae(3,2,iyaya,a);
            yossya++;
        }
        if(a[7]===0 && a[6]!==0){
            let iyaya=a[6]+a[7];
            kittyae(7,6,iyaya,a);
            yossya++;
        }
        if(a[11]===0 && a[10]!==0){
            let iyaya=a[10]+a[11];
            kittyae(11,10,iyaya,a);
            yossya++;
        }
        if(a[15]===0 && a[14]!==0){
            let iyaya=a[14]+a[15];
            kittyae(15,14,iyaya,a);
            yossya++;
        }
        if(a[2]===0 && a[1]!==0){
            let iyaya=a[1]+a[2];
            kittyae(2,1,iyaya,a);
            yossya++;
        }
        if(a[6]===0 && a[5]!==0){
            let iyaya=a[5]+a[6];
            kittyae(6,5,iyaya,a);
            yossya++;
        }
        if(a[10]===0 && a[9]!==0){
            let iyaya=a[9]+a[10];
            kittyae(10,9,iyaya,a);
            yossya++;
        }
        if(a[14]===0 && a[13]!==0){
            let iyaya=a[13]+a[14];
            kittyae(14,13,iyaya,a);
            yossya++;
        }
        if(a[1]===0 && a[0]!==0){
            let iyaya=a[0]+a[1];
            kittyae(1,0,iyaya,a);
            yossya++;
        }
        if(a[5]===0 && a[4]!==0){
            let iyaya=a[4]+a[5];
            kittyae(5,4,iyaya,a);
            yossya++;
        }
        if(a[9]===0 && a[8]!==0){
            let iyaya=a[8]+a[9];
            kittyae(9,8,iyaya,a);
            yossya++;
        }
        if(a[13]===0 && a[12]!==0){
            let iyaya=a[12]+a[13];
            kittyae(13,12,iyaya,a);
            yossya++;
        }
    }
    if(korekore===1){
        if(yossya===0){
            migiya(a,korena,2);
        }else{
            korena++;
            migiya(a,korena,1);
        }
    }else if(korekore===2){
        if(yossya!==0){
            korena++;
        }
        migiya(a,korena,3);
    }else if(korekore===3){
        if(yossya!==0){
            korena++;
        }
        randam(a,korena);
    }
}
function hidariya(a,korena,korekore){
    let yossya=0;
    if(korekore===2){
        if(a[0]===a[1] && a[1]!==0){
            let iyaya=a[0]+a[1];
            kittyae(0,1,iyaya,a);
            yossya++;
        }
        if(a[4]===a[5] && a[5]!==0){
            let iyaya=a[4]+a[5];
            kittyae(4,5,iyaya,a);
            yossya++;
        }
        if(a[8]===a[9] && a[9]!==0){
            let iyaya=a[8]+a[9];
            kittyae(8,9,iyaya,a);
            yossya++;
        }
        if(a[12]===a[13] && a[13]!==0){
            let iyaya=a[12]+a[13];
            kittyae(12,13,iyaya,a);
            yossya++;
        }
        if(a[1]===a[2] && a[2]!==0){
            let iyaya=a[1]+a[2];
            kittyae(1,2,iyaya,a);
            yossya++;
        }
        if(a[5]===a[6] && a[6]!==0){
            let iyaya=a[5]+a[6];
            kittyae(5,6,iyaya,a);
            yossya++;
        }
        if(a[9]===a[10] && a[10]!==0){
            let iyaya=a[9]+a[10];
            kittyae(9,10,iyaya,a);
            yossya++;
        }
        if(a[13]===a[14] && a[14]!==0){
            let iyaya=a[13]+a[14];
            kittyae(13,14,iyaya,a);
            yossya++;
        }
        if(a[2]===a[3] && a[3]!==0){
            let iyaya=a[2]+a[3];
            kittyae(2,3,iyaya,a);
            yossya++;
        }
        if(a[6]===a[7] && a[7]!==0){
            let iyaya=a[6]+a[7];
            kittyae(6,7,iyaya,a);
            yossya++;
        }
        if(a[10]===a[11] && a[11]!==0){
            let iyaya=a[10]+a[11];
            kittyae(10,11,iyaya,a);
            yossya++;
        }
        if(a[14]===a[15] && a[15]!==0){
            let iyaya=a[14]+a[15];
            kittyae(14,15,iyaya,a);
            yossya++;
        }
    }else{
        if(a[0]===0 && a[1]!==0){
            let iyaya=a[0]+a[1];
            kittyae(0,1,iyaya,a);
            yossya++;
        }
        if(a[4]===0 && a[5]!==0){
            let iyaya=a[4]+a[5];
            kittyae(4,5,iyaya,a);
            yossya++;
        }
        if(a[8]===0 && a[9]!==0){
            let iyaya=a[8]+a[9];
            kittyae(8,9,iyaya,a);
            yossya++;
        }
        if(a[12]===0 && a[13]!==0){
            let iyaya=a[12]+a[13];
            kittyae(12,13,iyaya,a);
            yossya++;
        }
        if(a[1]===0 && a[2]!==0){
            let iyaya=a[1]+a[2];
            kittyae(1,2,iyaya,a);
            yossya++;
        }
        if(a[5]===0 && a[6]!==0){
            let iyaya=a[5]+a[6];
            kittyae(5,6,iyaya,a);
            yossya++;
        }
        if(a[9]===0 && a[10]!==0){
            let iyaya=a[9]+a[10];
            kittyae(9,10,iyaya,a);
            yossya++;
        }
        if(a[13]===0 && a[14]!==0){
            let iyaya=a[13]+a[14];
            kittyae(13,14,iyaya,a);
            yossya++;
        }
        if(a[2]===0 && a[3]!==0){
            let iyaya=a[2]+a[3];
            kittyae(2,3,iyaya,a);
            yossya++;
        }
        if(a[6]===0 && a[7]!==0){
            let iyaya=a[6]+a[7];
            kittyae(6,7,iyaya,a);
            yossya++;
        }
        if(a[10]===0 && a[11]!==0){
            let iyaya=a[10]+a[11];
            kittyae(10,11,iyaya,a);
            yossya++;
        }
        if(a[14]===0 && a[15]!==0){
            let iyaya=a[14]+a[15];
            kittyae(14,15,iyaya,a);
            yossya++;
        }
    }
    if(korekore===1){
        if(yossya===0){
            hidariya(a,korena,2);
        }else{
            korena++;
            hidariya(a,korena,1);
        }
    }else if(korekore===2){
        if(yossya!==0){
            korena++;
        }
        hidariya(a,korena,3);
    }else if(korekore===3){
        if(yossya!==0){
            korena++;
        }
        randam(a,korena);
    }
}
function kittyae(kokoni,kokokara,korewo,a){
    a.splice(kokoni,1,korewo);
    a.splice(kokokara,1,0);
}
function randam(a,korena) {
    let soryaa=[];
    for (let so = 0; so < a.length; so++) {
        const el = a[so];
        if(el===0){
            soryaa.push(so);
        }
    }
    if(korena!==0){
        let itsi = Math.floor( Math.random() * soryaa.length) ;
        let nyui=soryaa[itsi];
        a.splice(nyui,1,2);
        hanndann(a);
        return;
    }else{
        return;
    }
}
function hanndann(a){
    let tukareta=0;
    for (let i = 0; i < 15; i++) {
        if(i!==3 && i!==7 && i!==11){
            if(a[i]===a[i+1] || a[i]===0 || a[i+1]===0){
                tukareta++;
            }
        }
        if(i!==12 && i!==13 && i!==14){
            if(a[i]===a[i+4] || a[i]===0){
                tukareta++;
            }
        }
    }
    if(tukareta===0){
        inner(a,1);
    }else{
        inner(a,0);
    }
}
