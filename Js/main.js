$('.vari').hide();
$(function() {
    $('#Methodselector').change(function(){
        clear();
      $('.vari').hide();
     $('.' + $(this).val()).show();
    });
  });

 //inputs +Buttons Chapter1
 var eqInput =document.getElementById("eq");
 var xlInput =document.getElementById("xl");
 var xuInput =document.getElementById("xu");
 var xnodeInput =document.getElementById("xnode");
 var xminInput =document.getElementById("xmin");
 var errInput =document.getElementById("err");
 var fDashInput=document.getElementById("fdash");
 var iter=1;
 var xi=0;
 var xiplus1=0;
 var error=100;
 var container=``;
 $('table').hide();
 

 //inputs +Buttons Chapter2
  var x00=document.getElementById("x00");
  var x01=document.getElementById("x01");
  var x02=document.getElementById("x02");
  var x03=document.getElementById("x03");
  var x10=document.getElementById("x10");
  var x11=document.getElementById("x11");
  var x12=document.getElementById("x12");
  var x13=document.getElementById("x13");
  var x20=document.getElementById("x20");
  var x21=document.getElementById("x21");
  var x22=document.getElementById("x22");
  var x23=document.getElementById("x23");
  var xn00;
  var xn01;
  var xn02;
  var xn03;
  var xn10;
  var xn11;
  var xn12;
  var xn13;
  var xn20;
  var xn21;
  var xn22;
  var xn23;

  var m21=0;
  var m31=0;
  var m32=0;
  $('.matrix').hide();
  $('.matrixLu').hide();
  $('.matrixCra').hide();

 var clrButton=document.getElementById("clear");
 var calcButton=document.getElementById("calc");
 

 //functions clear
 clrButton.addEventListener('click',function()
 {
   clear()
 })
 function clear()
 {
    eqInput.value="";
    xlInput.value="";
    xuInput.value="";
    xnodeInput.value="";
    xminInput.value="";
    errInput.value="";
    fDashInput.value="";
    document.getElementsByTagName('table').innerHTML = "";
    document.getElementById("root").innerHTML="";
    iter=1;
    error=100.000;
    xi=0;
    xiplus1=0;
    container=``;
    $('table').hide();
    clearMatrix()
 }
function clearMatrix()
{
   x00.value='';
   x01.value='';
   x02.value='';
   x03.value='';
   x10.value='';
   x11.value='';
   x12.value='';
   x13.value='';
   x20.value='';
   x21.value='';
   x22.value='';
   x23.value='';

       document.getElementById("u00").value="";
       document.getElementById("u01").value="";
       document.getElementById("u02").value="";
       document.getElementById("u10").value="";
       document.getElementById("u11").value="";
       document.getElementById("u12").value="";
       document.getElementById("u20").value="";
       document.getElementById("u21").value="";
       document.getElementById("u22").value="";

       document.getElementById("l00").value="";
       document.getElementById("l01").value="";
       document.getElementById("l02").value="";
       document.getElementById("l10").value="";
       document.getElementById("l11").value="";
       document.getElementById("l12").value="";
       document.getElementById("l20").value="";
       document.getElementById("l21").value="";
       document.getElementById("l22").value="";

       document.getElementById("b03").value="";
       document.getElementById("b13").value="";
       document.getElementById("b23").value="";

       document.getElementById("c1").value="";
       document.getElementById("c2").value="";
       document.getElementById("c3").value="";
       document.getElementById("xc1").value="";
       document.getElementById("xc2").value="";
       document.getElementById("xc3").value="";
       document.getElementById("a0").value="";
       document.getElementById("a1").value="";
       document.getElementById("a2").value="";
       document.getElementById("a3").value="";

       $('.matrix').hide();
       $('.matrixLu').hide();
       $('.matrixCra').hide();

}
//functions equations
 function func (x)
 {
     eq= eval(`${eqInput.value}`)
     return eq;
 }
 function funDash(x)
 {
    eq= eval(`${fDashInput.value}`)
    return eq;
 }



//funcions methods Chapter 1
 function bisecion(xl,xu)
 {
     var iter=1;
     var xr=0;
     var xrold=0;
     var error=0;
     var container=``;
     if($('#Methodselector').val()=="Bisectio")
     {
        $('table').show();
        var table=`<th>iter</th>
        <th>xl</th>
         <th>f(xl)</th>
         <th>xu</th>
         <th>f(xu)</th>
         <th>xr</th>
         <th>f(xr)</th>
         <th>E%</th>`;
document.getElementById("tableHead").innerHTML=table  
     }
        
      do{
             xrold=xr;
             xr=(xl+xu)/2;
            error=Math.abs((xr-xrold)/xr)*100;
             container+=`<tr>
             <td>${iter}</td>
             <td>${xl.toFixed(3)}</td>
             <td>${func(xl).toFixed(3)}</td> 
             <td>${xu.toFixed(3)}</td>
             <td>${func(xu).toFixed(3)}</td> 
             <td>${xr.toFixed(3)}</td>
             <td>${func(xr).toFixed(3)}</td>
             <td>${error.toFixed(3)}</td>
             </tr>`
             document.getElementById("tableBody").innerHTML=container;
             if(func(xl)*func(xr)>0)
             {
                 xl=xr;
             }
             else{
                 xu=xr;
             }
            iter++;
        }while(error > parseFloat(errInput.value));
        document.getElementById("root").innerHTML= `Root = ${xr.toFixed(3)}`;
 }
 function falsePosition(xl,xu)
 {
     var iter=1;
     var xr=0;
     var xrold=0;
     var error=0;
     var container=``;
     if($('#Methodselector').val()=="FalsePosition")
     {
        $('table').show();
        var table=`<th>iter</th>
        <th>xl</th>
         <th>f(xl)</th>
         <th>xu</th>
         <th>f(xu)</th>
         <th>xr</th>
         <th>f(xr)</th>
         <th>E%</th>`;
document.getElementById("tableHead").innerHTML=table  
     }
        
      do{
             xrold=xr;
             xr=xu-(func(xu)*(xl-xu))/(func(xl)-func(xu));
            error=Math.abs((xr-xrold)/xr)*100;
             container+=`<tr>
             <td>${iter}</td>
             <td>${xl.toFixed(3)}</td>
             <td>${func(xl).toFixed(3)}</td> 
             <td>${xu.toFixed(3)}</td>
             <td>${func(xu).toFixed(3)}</td> 
             <td>${xr.toFixed(3)}</td>
             <td>${func(xr).toFixed(3)}</td>
             <td>${error.toFixed(3)}</td>
             </tr>`
             document.getElementById("tableBody").innerHTML=container;
             if(func(xl)*func(xr)>0)
             {
                 xl=xr;
             }
             else{
                 xu=xr;
             }
            iter++;
        }while(error > parseFloat(errInput.value));
        document.getElementById("root").innerHTML= `Root = ${xr.toFixed(3)}`;
 } 
 function simpleFixedPoint(xnode)
 {
     
     if($('#Methodselector').val()=="SimpleFixedPoint")
     {
        $('table').show();
        var table=`<th>iter</th>
        <th>xi</th>
         <th>f(xi)</th>
         <th>E%</th>`;
         document.getElementById("tableHead").innerHTML=table  
      }
              xi=xnode;
              xiplus1=func(xi);
              
              container+=`<tr>
              <td>${iter}</td>
              <td>${xi.toFixed(3)}</td>
              <td>${xiplus1.toFixed(3)}</td> 
              <td>${error.toFixed(3)}</td>
              </tr>`
              document.getElementById("tableBody").innerHTML=container;
              error=Math.abs((xiplus1-xi)/xiplus1)*100;
              iter++;
             if(error > parseFloat(errInput.value))
             {
                 simpleFixedPoint(xiplus1);
             }
             else
             {
                 return document.getElementById("root").innerHTML= `Root = ${xi.toFixed(3)}`;
             }
 } 
 function newton(xnode)
 {
    xi=xnode;
    
    if($('#Methodselector').val()=="Newten")
    {
       $('table').show();
       var table=`<th>iter</th>
       <th>xi</th>
        <th>f(xi)</th>
        <th>fDash(xi)</th>
        <th>E%</th>`;
        document.getElementById("tableHead").innerHTML=table 
    } 
    
     container+=`<tr>
     <td>${iter}</td>
     <td>${xi.toFixed(3)}</td>
     <td>${func(xi).toFixed(3)}</td>
     <td>${funDash(xi).toFixed(3)}</td> 
     <td>${error.toFixed(3)}</td>
     </tr>`
     document.getElementById("tableBody").innerHTML=container;
       xiplus1=xi-(func(xi)/funDash(xi));
    if(error > parseFloat(errInput.value))
    {
        error=Math.abs((xiplus1-xi)/xiplus1)*100;
       iter++;
        newton(xiplus1);
    }
    else
    {
        document.getElementById("root").innerHTML=`Root = ${xi.toFixed(3)}`
    }
 }
 function secant(xmin,xnode)
 {
    var xiold=xnode;
    if($('#Methodselector').val()=="Secant")
     {
        $('table').show();
        var table=`<th>iter</th>
        <th>xmin1</th>
         <th>f(xmin1)</th>
         <th>xi</th>
         <th>f(xi)</th>
         <th>E%</th>`;
         document.getElementById("tableHead").innerHTML=table 
     } 
     error =Math.abs((xi-xmin)/xi)*100;
     if(iter==1)
     {
         error= 100.000;
         console.log(error);
     }
      xi=xnode;
      container+=`<tr>
      <td>${iter}</td>
      <td>${xmin.toFixed(3)}</td>
      <td>${func(xmin).toFixed(3)}</td>
      <td>${xi.toFixed(3)}</td> 
      <td>${func(xi).toFixed(3)}</td>
      <td>${error.toFixed(3)}</td>
      </tr>`

      document.getElementById("tableBody").innerHTML=container;
      xi=xi-((func(xi)*(xmin-xi))/(func(xmin)-func(xi)))
      xmin=xiold;
      iter++;
      if(error> parseFloat(errInput.value))
      {
          secant(xmin,xi);
      }
      else
      {
          document.getElementById("root").innerHTML=`Root = ${xi.toFixed(3)}`
      }
 }


 //functions Method Chapter 2
   function gaussianElimination()
   {
    xn00=x00.value;
    xn01=x01.value;
    xn02=x02.value;
    xn03=x03.value;
    xn10=x10.value;
    xn11=x11.value;
    xn12=x12.value;
    xn13=x13.value;
    xn20=x20.value;
    xn21=x21.value;
    xn22=x22.value;
    xn23=x23.value;
    m21 = xn10/xn00;
    m31 = xn20/xn00;

    xn10= xn10 - (m21*xn00);
    xn11= xn11 - (m21*xn01);
    xn12= xn12 - (m21*xn02);
    xn13= xn13 - (m21*xn03);
    xn20= xn20 - (m31 * xn00);
    xn21= xn21 - (m31 * xn01);
    xn22= xn22 - (m31 * xn02);
    xn23= xn23 - (m31 * xn03);

    m32 = xn21/ xn11;

    xn20 = xn20 - (m32 * xn10) ;
    xn21= xn21- (m32 * xn11) ;
    xn22= xn22 - (m32 * xn12) ;
    xn23= xn23 - (m32 * xn13) ;
    
   var x3 = xn23 / xn22;
   var x2 = (xn13 - (xn12 * x3)) / xn11;
   var x1 = (xn03 - (xn01 * x2) - (xn02 * x3)) / xn00;
     

    document.getElementById("r00").value=xn00;
    document.getElementById("r01").value=xn01;
    document.getElementById("r02").value=xn02;
    document.getElementById("r03").value=xn03;
    document.getElementById("r10").value=xn10;
    document.getElementById("r11").value=xn11;
    document.getElementById("r12").value=xn12;
    document.getElementById("r13").value=xn13;
    document.getElementById("r20").value=xn20;
    document.getElementById("r21").value=xn21;
    document.getElementById("r22").value=xn22;
    document.getElementById("r23").value=xn23;
    document.getElementById("m21").value=m21;
    document.getElementById("m31").value=m31;
    document.getElementById("m32").value=m32;
    document.getElementById("x1").value=x1;
    document.getElementById("x2").value=x2;
    document.getElementById("x3").value=x3;
    $('.matrix').show();
   }
 

   function Lu()
   {
       var b03=x03.value;
       var b13=x13.value;
       var b23=x23.value;

       gaussianElimination()
        
       var u00 = xn00;
       var u01 = xn01;
       var u02 = xn02;
       var u10 = xn10;
       var u11 = xn11;
       var u12 = xn12;
       var u20 = xn20;
       var u21 = xn21;
       var u22 = xn22;

       var l00 = 1;
       var l01 = 0;
       var l02 = 0;
       var l10 = m21;
       var l11 = 1; 
       var l12 = 0;
       var l20 = m31;
       var l21 = m32;
       var l22 = 1;
        
       document.getElementById("u00").value=u00;
       document.getElementById("u01").value=u01;
       document.getElementById("u02").value=u02;
       document.getElementById("u10").value=u10;
       document.getElementById("u11").value=u11;
       document.getElementById("u12").value=u12;
       document.getElementById("u20").value=u20;
       document.getElementById("u21").value=u21;
       document.getElementById("u22").value=u22;

       document.getElementById("l00").value=l00;
       document.getElementById("l01").value=l01;
       document.getElementById("l02").value=l02;
       document.getElementById("l10").value=l10;
       document.getElementById("l11").value=l11;
       document.getElementById("l12").value=l12;
       document.getElementById("l20").value=l20;
       document.getElementById("l21").value=l21;
       document.getElementById("l22").value=l22;

       document.getElementById("b03").value=b03;
       document.getElementById("b13").value=b13;
       document.getElementById("b23").value=b23;

       var c1 = b03 / l00;
       var c2 = (b13 - (l10) * c1) / l11;
       var c3 = (b23 - ((l20 * c1) + (l21 * c2))) / l22;
       document.getElementById("c1").value=c1;
       document.getElementById("c2").value=c2;
       document.getElementById("c3").value=c3;

       $('.matrixLu').show();
        

   }

   function cramerRule()
   {
    xn00=x00.value;
    xn01=x01.value;
    xn02=x02.value;
    xn03=x03.value;
    xn10=x10.value;
    xn11=x11.value;
    xn12=x12.value;
    xn13=x13.value;
    xn20=x20.value;
    xn21=x21.value;
    xn22=x22.value;
    xn23=x23.value;
     var x000 = xn00;
     var x001 = xn01; 
     var x110 = xn10; 
     var x111 = xn11; 
     var x220 = xn20; 
     var x221 = xn21; 
     var da = (xn00 * ((xn11 * xn22) - (xn12 * xn21))) - (xn01 * ((xn10 * xn22) - (xn12 * xn20))) + (xn02 * ((xn10 * xn21) - (xn11 * xn20)));
       document.getElementById("a0").value=da;
       xn00 = xn03; xn10 = xn13; xn20 = xn23;
     var da1 = (xn00 * ((xn11 * xn22) - (xn12 * xn21))) - (xn01 * ((xn10 * xn22) - (xn12 * xn20))) + (xn02 * ((xn10 * xn21) - (xn11 * xn20))); 
       document.getElementById("a1").value=da1;
       xn00 = x000; xn10 = x110; xn20 = x220;
       xn01 = xn03; xn11 = xn13; xn21 = xn23;
     var da2 = (xn00 * ((xn11 * xn22) - (xn12 * xn21))) - (xn01 * ((xn10 * xn22) - (xn12 * xn20))) + (xn02 * ((xn10 * xn21) - (xn11 * xn20))); 
       document.getElementById("a2").value=da2; 
       xn01 = x001; xn11 = x111; xn21 = x221;
       xn02 = xn03; xn12 = xn13; xn22 = xn23;
     var da3 = (xn00 * ((xn11 * xn22) - (xn12 * xn21))) - (xn01 * ((xn10 * xn22) - (xn12 * xn20))) + (xn02 * ((xn10 * xn21) - (xn11 * xn20)));
        document.getElementById("a3").value=da3;


    var x1 = da1 / da; 
    var x2 = da2 / da; 
    var x3 = da3 / da;
    document.getElementById("xc1").value=x1;
    document.getElementById("xc2").value=x2;
    document.getElementById("xc3").value=x3;
  $('.matrixCra').show();
   }

 //---------------------------------------
//clicking Button For Calculate
calcButton.addEventListener('click',function()
{  
    var xl=parseFloat(xlInput.value);
    var xu=parseFloat(xuInput.value);
    var xnode=parseFloat(xnodeInput.value);
    var xmin=parseFloat(xminInput.value);
    if($('#Methodselector').val()=="Bisectio")
    {
     bisecion(xl,xu);
    }
    else if($('#Methodselector').val()=="FalsePosition")
    {
        falsePosition(xl,xu);
    }
    else if($('#Methodselector').val()=="SimpleFixedPoint")
    {
        simpleFixedPoint(xnode);
    }
    else if($('#Methodselector').val()=="Newten")
    {
        newton(xnode);
    }
    else if ($('#Methodselector').val()=="Secant")
    {
        secant(xmin,xnode);
    }
    else if ($('#Methodselector').val()=="GaussianElimination")
    {
        gaussianElimination();
    }
    else if ($('#Methodselector').val()=="LUDecomposition")
    {
        Lu();
    }
    else if ($('#Methodselector').val()=="CramerRule")
    {
        cramerRule();
    }
        
})