import{s as f,n as o}from"../chunks/scheduler.CQlsE29-.js";import{S as b,i as y,e as c,s as g,c as u,k as h,f as w,l as m,g as s,d as r}from"../chunks/index.Dt_HRBFW.js";import{l as v}from"../chunks/cupiddb-logo-text.DbtXUgL4.js";const x=!0,T=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function D(p){let e,l=`<img class="h-48 w-full object-contain" src="${v}" alt="CupidDB logo"/>`,n,a,d=`<h1 class="mb-4 text-4xl">Introducing... CupidDB!</h1> <p>Hello everyone! I’m excited to share with you my latest project: CupidDB,
    an in-memory database designed for performance and efficiency.
    After eight years of coding professionally and working with numerous open-source projects,
    I felt the urge to give back to the community.
    For a long time, I was unsure about what and how I should contribute to the open-source community until...</p> <br/> <h2 class="mb-4 text-2xl">The Challenge</h2> <p>Recently, I faced a challenge that many developers encounter when working with data-intensive applications.
    I needed to cache a large pandas DataFrame and share it among multiple clients.
    Initially, I turned to Redis, known for its speed and reliability as a caching solution.
    While Redis excelled at caching, it quickly became apparent that it is not ideal for my problem.</p> <br/> <p>The crux of the issue was that my Python clients required only a portion of the DataFrame.
    This meant they were not only consuming more bandwidth than necessary but also utilizing extra memory to load the entire DataFrame,
    only to discard a significant portion of it once it was in memory.
    This inefficiency was frustrating and prompted me to think:
    wouldn’t it be great if there was an in-memory database that could filter DataFrames on the server side,
    allowing clients to retrieve only the data they need?</p> <br/> <h2 class="mb-4 text-2xl">Enter CupidDB</h2> <p>This realization sparked the idea for CupidDB.
    My goal was to create a solution that combines the speed of Redis with the ability to filter DataFrames server-side,
    effectively eliminating the need for clients to load unnecessary data.
    I decided to write CupidDB in Rust, a language known for its performance and safety,
    to ensure that the database would be both fast and reliable.</p> <br/> <p>To facilitate efficient communication between the server and clients, CupidDB uses the Apache Arrow columnar format.
    This choice allows for blazing-fast serialization and deserialization of data,
    making it incredibly efficient for transmitting data between the database and clients.</p> <br/> <h2 class="mb-4 text-2xl">A Contribution to the Open Source Community</h2> <p>With CupidDB, I hope to contribute a valuable tool to the open-source community.
    It’s been rewarding to develop a solution that not only addresses my needs but can also help others facing similar challenges.
    As developers, we constantly encounter obstacles that inspire us to innovate, and CupidDB is my answer to a common issue in data management.</p> <br/> <p>I’m excited to see how CupidDB can be utilized and improved by fellow developers.
    I encourage anyone interested in enhancing their data processing workflows to check it out,
    provide feedback, and contribute to its development.
    Together, we can make CupidDB even better and more useful for our community.</p> <br/> <p>Thank you for taking the time to read about CupidDB!
    I’m looking forward to sharing more updates and developments in the future!
    <br/><br/>
    Watt Iamsuri
    <br/>
    2024-10-31</p>`;return{c(){e=c("div"),e.innerHTML=l,n=g(),a=c("div"),a.innerHTML=d,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1j1b1ug"&&(e.innerHTML=l),n=w(t),a=u(t,"DIV",{class:!0,"data-svelte-h":!0}),h(a)!=="svelte-1bpyhv5"&&(a.innerHTML=d),this.h()},h(){m(e,"class","py-10"),m(a,"class","container mx-auto my-6 px-2 md:px-24")},m(t,i){s(t,e,i),s(t,n,i),s(t,a,i)},p:o,i:o,o,d(t){t&&(r(e),r(n),r(a))}}}class _ extends b{constructor(e){super(),y(this,e,null,D,f,{})}}export{_ as component,T as universal};
