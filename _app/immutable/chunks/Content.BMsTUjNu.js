import{s as c,n as m}from"./scheduler.CQlsE29-.js";import{S as g,i as u,e as d,s as f,m as h,c as b,k as y,f as _,n as v,l as $,g as l,o as x,p as q,q as w,d as p,r as T}from"./index.Dt_HRBFW.js";import{D as C}from"./DocClass.DKziTN_N.js";function D(o){let e,i='<h1 class="text-4xl mb-0 playwrite-font text-primary">CupidDB</h1> <br/> <h2 class="text-3xl mb-3">RowFilter</h2>',n,a,s;return a=new C({props:{data:o[0]}}),{c(){e=d("div"),e.innerHTML=i,n=f(),h(a.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-135eukp"&&(e.innerHTML=i),n=_(t),v(a.$$.fragment,t),this.h()},h(){$(e,"class","mb-8")},m(t,r){l(t,e,r),l(t,n,r),x(a,t,r),s=!0},p:m,i(t){s||(q(a.$$.fragment,t),s=!0)},o(t){w(a.$$.fragment,t),s=!1},d(t){t&&(p(e),p(n)),T(a,t)}}}function F(o){return[{name:"pycupiddb.RowFilter",args:"column, logic, value, data_type",description:`The following is a list of available comparison logic:<br>
                  <strong>gte</strong> : Greater than or equal to<br>
                  <strong>gt</strong> : Greater than<br>
                  <strong>lte</strong> : Less than or equal to<br>
                  <strong>lt</strong> : Less than<br>
                  <strong>eq</strong> : Equal<br>
                  <strong>ne</strong> : Not equal<br>`,parameters:[{name:"column",type:"string",description:"Specifies the column name on which to apply the filter logic."},{name:"logic",type:"string",description:"The comparison logic to apply to the column. The possible inputs for the logic argument are `gte`, `gt`, `lte`, `lt`, `eq`, and `ne`."},{name:"value",type:"Any",description:"The value used for comparing against the data in the column."},{name:"data_type",type:"string",description:"Specifies the data type for filtering. The possible inputs for the data type argument are `int`, `float`, `date`, `datetime`, `string`, and `bool`."}],example:`from datetime import date
              from pycupiddb import RowFilter

              filters = [
              &nbsp;&nbsp;RowFilter(column='date', logic='gte', value=date(2000, 1, 1), data_type='date'),
              ]`}]}class k extends g{constructor(e){super(),u(this,e,F,D,c,{})}}export{k as C};
