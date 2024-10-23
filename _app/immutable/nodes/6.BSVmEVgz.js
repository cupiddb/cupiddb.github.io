import{s as D,n as x}from"../chunks/scheduler.CQlsE29-.js";import{S as T,i as M,e as o,s as v,c as p,k as u,f,l as B,g as a,d as l}from"../chunks/index.CA-k4357.js";const H=!0,F=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"}));function L(w){let t,_='<h1 class="text-4xl mb-0 playwrite-font text-primary">CupidDB</h1> <br/> <h2 class="text-3xl mb-3">Getting Started</h2>',c,s,b=`<hr class="my-4"/> <h2 class="text-2xl mb-4">Running CupidDB Server</h2>
  The easiest way to run a CupidDB server is by using Docker. You can simply start a server with the following command:

  <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll">docker run --rm -p 5995:5995 cupiddb/cupiddb:latest</pre>`,m,r,g=`<hr class="my-4"/> <h2 class="text-2xl mb-4">Installing Python Client</h2>
  The CupidDB Python client is available on PyPI under the name pycupiddb.

  <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll">pip install pycupiddb</pre>`,h,n,C=`<hr class="my-4"/> <h2 class="text-2xl mb-4">Using CupidDB to Store DataFrame</h2>
  CupidDB is ideal for storing DataFrames. When you store a DataFrame, CupidDB saves the data in Apache Arrow format.
  This allows the client to request the DataFrame with filter logic, which is executed server-side, reducing data transfer over the network.
  More importantly, data serialization and deserialization are avoided since CupidDB natively stores and transfers data in Apache Arrow format.

  <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll whitespace-pre-line">    from pycupiddb import CupidClient, RowFilter
    import pandas as pd

    df = pd.DataFrame({&#39;a&#39;: [1, 2, 3], &#39;b&#39;: [4, 5, 6]})

    cupid_client = CupidClient(host=&#39;localhost&#39;, port=5995)

    cupid_client.set(key=&#39;key&#39;, value=df)

    df = cupid_client.get_dataframe(key=&#39;key&#39;)

    # Or using filters

    filters = [
        RowFilter(column=&#39;b&#39;, logic=&#39;gte&#39;, value=5, data_type=&#39;int&#39;)
    ]
    df = cupid_client.get_dataframe(
        key=&#39;key&#39;,
        columns=[&#39;a&#39;],
        filters=filters,
    )
    print(df)
    # You should see
    #   a
    # 0 2
    # 1 3
  </pre>`,y,d,k=`<hr class="my-4"/> <h2 class="text-2xl mb-4">Using CupidDB as a Cache Server</h2>
  CupidDB can be used as a cache server. It follows the get and set API you might already be familiar with.

  <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll whitespace-pre-line">    cupid_client.set(key=&#39;key&#39;, value=&#39;value&#39;, timeout=60)

    result = cupid_client.get(key=&#39;key&#39;)
    print(result)
    # This should print out &quot;value&quot;

    cupid_client.set(key=&#39;key&#39;, value=1, timeout=60)
    result = cupid_client.incr(key=&#39;key&#39;)
    print(result) # This should print out 2

    result = cupid_client.incr(key=&#39;key&#39;, delta=5)
    print(result) # This should print out 7
  </pre>`;return{c(){t=o("div"),t.innerHTML=_,c=v(),s=o("div"),s.innerHTML=b,m=v(),r=o("div"),r.innerHTML=g,h=v(),n=o("div"),n.innerHTML=C,y=v(),d=o("div"),d.innerHTML=k,this.h()},l(e){t=p(e,"DIV",{class:!0,"data-svelte-h":!0}),u(t)!=="svelte-1gdxpim"&&(t.innerHTML=_),c=f(e),s=p(e,"DIV",{"data-svelte-h":!0}),u(s)!=="svelte-1akerw7"&&(s.innerHTML=b),m=f(e),r=p(e,"DIV",{"data-svelte-h":!0}),u(r)!=="svelte-1osz1si"&&(r.innerHTML=g),h=f(e),n=p(e,"DIV",{"data-svelte-h":!0}),u(n)!=="svelte-1huit8q"&&(n.innerHTML=C),y=f(e),d=p(e,"DIV",{"data-svelte-h":!0}),u(d)!=="svelte-17a8tfh"&&(d.innerHTML=k),this.h()},h(){B(t,"class","mb-8")},m(e,i){a(e,t,i),a(e,c,i),a(e,s,i),a(e,m,i),a(e,r,i),a(e,h,i),a(e,n,i),a(e,y,i),a(e,d,i)},p:x,i:x,o:x,d(e){e&&(l(t),l(c),l(s),l(m),l(r),l(h),l(n),l(y),l(d))}}}class P extends T{constructor(t){super(),M(this,t,null,L,D,{})}}export{P as component,F as universal};
