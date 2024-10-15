import{s as l,n as a}from"../chunks/scheduler.BH2dSHOS.js";import{S as n,i as d,e as o,c as p,k as c,l as u,g as m,d as h}from"../chunks/index.C8-kMhXx.js";const y=!0,x=Object.freeze(Object.defineProperty({__proto__:null,prerender:y},Symbol.toStringTag,{value:"Module"}));function v(r){let e,i=`<div class="mb-8"><h1 class="text-4xl mb-0 playwrite-font text-primary">CupidDB</h1> <br/> <h2 class="text-3xl mb-3">Getting Started</h2></div> <div><hr class="my-4"/> <h2 class="text-2xl mb-4">Running CupidDB Server</h2>
    The easiest way to run a CupidDB server is by using Docker. You can simply start a server with the following command:

    <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll">docker run --rm -p 5995:5995 wiamsuri/cupiddb:v0.4.0</pre></div> <div><hr class="my-4"/> <h2 class="text-2xl mb-4">Installing Python Client</h2>
    The CupidDB Python client is available on PyPI under the name pycupiddb.

    <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll">pip install pycupiddb</pre></div> <div><hr class="my-4"/> <h2 class="text-2xl mb-4">Using CupidDB to Store DataFrame</h2>
    CupidDB is ideal for storing DataFrames. When you store a DataFrame, CupidDB saves the data in Apache Arrow format.
    This allows the client to request the DataFrame with filter logic, which is executed server-side, reducing data transfer over the network.
    More importantly, data serialization and deserialization are avoided since CupidDB natively stores and transfers data in Apache Arrow format.

    <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll whitespace-pre-line">      from pycupiddb import CupidClient, RowFilter
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
    </pre></div> <div><hr class="my-4"/> <h2 class="text-2xl mb-4">Using CupidDB as a Cache Server</h2>
    CupidDB can be used as a cache server. It follows the get and set API you might already be familiar with.

    <pre class="bg-gray-300 py-4 px-6 my-4 rounded-md overflow-x-scroll whitespace-pre-line">      cupid_client.set(key=&#39;key&#39;, value=&#39;value&#39;, timeout=60)

      result = cupid_client.get(key=&#39;key&#39;)
      print(result)
      # This should print out &quot;value&quot;

      cupid_client.set(key=&#39;key&#39;, value=1, timeout=60)
      result = cupid_client.incr(key=&#39;key&#39;)
      print(result) # This should print out 2

      result = cupid_client.incr(key=&#39;key&#39;, delta=5)
      print(result) # This should print out 7
    </pre></div>`;return{c(){e=o("div"),e.innerHTML=i,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(e)!=="svelte-11rm1ys"&&(e.innerHTML=i),this.h()},h(){u(e,"class","container mx-auto my-6 px-4 py-4 md:py-8 px-0 md:px-4 md:mt-12 md:mb-4")},m(t,s){m(t,e,s)},p:a,i:a,o:a,d(t){t&&h(e)}}}class b extends n{constructor(e){super(),d(this,e,null,v,l,{})}}export{b as component,x as universal};
